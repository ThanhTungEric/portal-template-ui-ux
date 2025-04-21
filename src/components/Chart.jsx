import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/weatherData';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    Grid,
    Paper,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  worldElectricityProduction,
  keyToLabel,
  colors,
} from '../dataset/worldElectricityProduction';

// Display basic bar chart with Data set demo
const BarsDataset = () => {
  const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
        width: 60,
      },
    ],
    height: 300,
  };

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London', valueFormatter },
        { dataKey: 'paris', label: 'Paris', valueFormatter },
        { dataKey: 'newYork', label: 'New York', valueFormatter },
        { dataKey: 'seoul', label: 'Seoul', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
};

// Basic Bar chart w Dataset code
const barsDataSet = `
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/weather';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
      width: 60,
    },
  ],
  height: 300,
};

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London', valueFormatter },
        { dataKey: 'paris', label: 'Paris', valueFormatter },
        { dataKey: 'newYork', label: 'New York', valueFormatter },
        { dataKey: 'seoul', label: 'Seoul', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
`;

// Display Basic Line chart w Dataset demo

const LineDataset = () => {
  const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none', // To stack 0 on top of others
  };
  
  const customize = {
    height: 350,
    hideLegend: true,
  };

  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'year',
          valueFormatter: (value) => value.toString(),
          min: 1985,
          max: 2022,
        },
      ]}
      yAxis={[{ width: 50 }]}
      series={Object.keys(keyToLabel).map((key) => ({
        dataKey: key,
        label: keyToLabel[key],
        color: colors[key],
        showMark: false,
        ...stackStrategy,
      }))}
      dataset={worldElectricityProduction}
      {...customize}
    />
  );
}

// Basic Line chart w Dataset code
const lineDataSet = `
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  worldElectricityProduction,
  keyToLabel,
  colors,
} from './worldElectricityProduction';

const stackStrategy = {
  stack: 'total',
  area: true,
  stackOffset: 'none', // To stack 0 on top of others
};

const customize = {
  height: 350,
  hideLegend: true,
};

export default function LineDataset() {
  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'year',
          valueFormatter: (value) => value.toString(),
          min: 1985,
          max: 2022,
        },
      ]}
      yAxis={[{ width: 50 }]}
      series={Object.keys(keyToLabel).map((key) => ({
        dataKey: key,
        label: keyToLabel[key],
        color: colors[key],
        showMark: false,
        ...stackStrategy,
      }))}
      dataset={worldElectricityProduction}
      {...customize}
    />
  );
}
`;

const chartList = [
    {
        name: 'Bar Chart',
        component: <BarsDataset />,
        code: barsDataSet
    },
    {
      name: 'Line Chart',
      component: <LineDataset />,
      code: lineDataSet
  },
    
]

export default function ChartComponent() {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [codeString, setCodeString] = useState('');
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800); // mô phỏng tải dữ liệu
        return () => clearTimeout(timer);
    }, []);
    

    const handleOpen = (code) => {
        setCodeString(code);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (loading) {
            return (
            <Box p={4} textAlign="center">
                <Typography variant="h6" gutterBottom>Đang tải...</Typography>
                <CircularProgress color="primary" />
            </Box>
            );
        }
    
    // ADD HANDLE COPY
    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <Box p={2} mx={10} my={4}>
            <Grid container spacing={8}>
                {chartList.map((item, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                    <Paper elevation={3} sx={{ p: 4, minWidth: 200, minHeight: 250 }}>
                        <Typography variant="h6" gutterBottom>
                        {item.name}
                        </Typography>
                        {item.component}
                        <Divider sx={{ my: 2 }} />
                        <Button variant="outlined" onClick={() => handleOpen(item.code)}>
                        Code
                        </Button>
                    </Paper>
                    </Grid>
                ))}
            </Grid>
            {/* Popup source code */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogContent dividers>
                    <SyntaxHighlighter language="jsx" style={oneDark} wrapLongLines showLineNumbers>
                    {codeString}
                    </SyntaxHighlighter>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCopy} startIcon={<ContentCopyIcon />}>
                    {copied ? 'Đã copy!' : 'Copy code'}
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                    Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}