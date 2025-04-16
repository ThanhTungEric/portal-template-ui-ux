import CloseIcon from '@mui/icons-material/Close';
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
    IconButton,
    Paper,
    Snackbar,
    SnackbarContent,
    Stack,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


// Basic Timeline
const BasicTimeline = () => {
    return (
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
}

// Left position timeline
const LeftPositionedTimeline = () => {
    return (
        <Timeline position="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
}

const basicTimelineCode = `
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
`;

const leftPositionedTimelineCode = `
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function LeftPositionedTimeline() {
  return (
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
`;


const TimelineList = [
    {
        name: 'Basic Timeline',
        component: <BasicTimeline />,
        code: basicTimelineCode
    },
    {
        name: 'Left Positioned Timeline',
        component: <LeftPositionedTimeline />,
        code: leftPositionedTimelineCode
    },
    
]

export default function TimelineComponent() {
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
                <Typography variant="h6" gutterBottom>Đang tải các timeline component...</Typography>
                <CircularProgress color="primary" />
            </Box>
            );
        }
    
    // handle copy
    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <Box p={2} mx={10} my={4}>
            <Grid container spacing={8}>
                {TimelineList.map((item, idx) => (
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