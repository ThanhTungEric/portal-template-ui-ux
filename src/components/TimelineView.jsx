import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HotelIcon from '@mui/icons-material/Hotel';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import RepeatIcon from '@mui/icons-material/Repeat';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    Grid,
    Paper,
    Typography
} from '@mui/material';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

// Left Aligned Timeline
const LeftAlignedTimeline = () => {
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

// Alternative Timeline
const AlternativeTimeline = () => {
    return (
        <Timeline position="alternate">
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

// Outlined Timeline
const OutlinedTimeline = () => {
    return (
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
        </Timeline>
    );
}

// Opposite Timeline
const OppositeTimeline = () => {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                09:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                12:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                9:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
            </TimelineItem>
            </Timeline>
        );
}

// Customized Timeline
const CustomizedTimeline = () => {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                >
                9:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={{fontSize: '1.2rem'}}>
                    Eat
                </Typography>
                <Typography sx={{fontSize: '0.8rem'}}>Because you need strength</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                >
                10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                    <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={{fontSize: '1.2rem'}}>
                    Code
                </Typography>
                <Typography  sx={{fontSize: '0.8rem'}}>Because it&apos;s awesome!</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                    <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={{fontSize: '1.2rem'}}>
                    Sleep
                </Typography>
                <Typography sx={{fontSize: '0.8rem'}}>Because you need rest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                    <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={{fontSize: '1.2rem'}}>
                    Repeat
                </Typography>
                <Typography sx={{fontSize: '0.8rem'}}>This is the life you love!</Typography>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
        );
}

const basicTimelineCode = `import * as React from 'react';
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

const leftAlignedTimelineCode = `import * as React from 'react';
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
}`;

const alternativeTimelineCode = `import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AlternateTimeline() {
    return (
        <Timeline position="alternate">
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
}`;

const outlinedTimelineCode = `import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AlternateTimeline() {
    return (
        <Timeline position="alternate">
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

const oppositeTimelineCode = `import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
    return (
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            09:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            12:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            9:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
        </Timeline>
    );
}
`;

const customizedTimeline = `import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
                <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Eat
            </Typography>
            <Typography>Because you need strength</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            >
            10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
                <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
                <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
        </TimelineItem>
        </Timeline>
    );
}
`;

const timelineVariants = [
    {
        label: 'Basic Timeline',
        component: <BasicTimeline />,
        code: basicTimelineCode,
    },
    {
        label: 'Left Aligned Timeline',
        component: <LeftAlignedTimeline />,
        code: leftAlignedTimelineCode,
    },
    {
        label: 'Alternative Timeline',
        component: <AlternativeTimeline />,
        code: alternativeTimelineCode,
    },
    {
        label: 'Outlined Timeline',
        component: <OutlinedTimeline />,
        code: outlinedTimelineCode,
    },
    {
        label: 'Opposite Timeline',
        component: <OppositeTimeline />,
        code: oppositeTimelineCode,
    },
    {
        label: 'Customized Timeline',
        component: <CustomizedTimeline />,
        code: customizedTimeline,
    },
]

export default function TimelineView() {
    const [open, setOpen] = React.useState(false);
        const [copied, setCopied] = React.useState(false);
        const [codeString, setCodeString] = React.useState('');
    
        const handleOpen = (code) => {
            setCodeString(code);
            setOpen(true);
        };
    
        const handleClose = () => {
            setOpen(false);
        };
    
    
        // ✅ THÊM HANDLE COPY
        const handleCopy = () => {
            navigator.clipboard.writeText(codeString);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        };
    
        return (
            <Box p={2} mx={4} my={2}>
                <Grid container spacing={8}>
                    {timelineVariants.map((item, idx) => (
                        <Grid item xs={12} md={6} key={idx}>
                        <Paper elevation={3} sx={{ p: 4, width: 300, height: 460 }}>
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
                {/* ✅ Popup xem mã nguồn */}
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

