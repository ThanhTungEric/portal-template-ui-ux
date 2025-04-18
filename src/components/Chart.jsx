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

// Basic bar chart with Data set
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

// Basic Bar chart w Dataset
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

const chartList = [
    {
        name: 'Chart Bar',
        component: <BarsDataset />,
        code: barsDataSet
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
                <Typography variant="h6" gutterBottom>Đang tải các snackbar...</Typography>
                <CircularProgress color="primary" />
            </Box>
            );
        }
    
    // THÊM HANDLE COPY
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
            {/* Popup xem mã nguồn */}
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