import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
    Box,
    Button,
    CircularProgress,
    Divider,
    Grid,
    Paper,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const typoVariants = [
    {
    label: 'Heading h1',
    variant: 'h1',
    customRender: (
        <Typography variant="h1" gutterBottom  sx={{ fontSize: '4.5rem' }}>
            h1. Heading
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';

<Typography variant="h1" gutterBottom>
    h1. Heading
</Typography>`
    },
    {
    label: 'Heading h2',
    variant: 'h2',
    customRender: (
        <Typography variant="h2" gutterBottom>
            h2. Heading
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';

<Typography variant="h2" gutterBottom>
    h2. Heading
</Typography>`
    },
    {
    label: 'Heading h3',
    variant: 'h3',
    customRender: (
        <Typography variant="h3" gutterBottom>
            h3. Heading
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';

<Typography variant="h3" gutterBottom>
    h3. Heading
</Typography>`
    },
    {
    label: 'Heading h4',
    variant: 'h4',
    customRender: (
        <Typography variant="h4" gutterBottom>
            h4. Heading
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';

<Typography variant="h4" gutterBottom>
    h4. Heading
</Typography>`
    },
    {
    label: 'Heading h5',
    variant: 'h5',
    customRender: (
        <Typography variant="h5" gutterBottom>
            h5. Heading
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';

<Typography variant="h5" gutterBottom>
    h5. Heading
</Typography>`
    },
    {
    label: 'Heading h6',
    variant: 'h6',
    customRender: (
        <Typography variant="h6" gutterBottom>
            h6. Heading
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';

<Typography variant="h6" gutterBottom>
    h6. Heading
</Typography>`
    },
    {
    label: 'Subtitle 1',
    variant: 'subtitle1',
    customRender: (
        <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';
<Typography variant="subtitle1" gutterBottom>
    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>`
    },
    {
    label: 'Subtitle 2',
    variant: 'subtitle2',
    customRender: (
        <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';
<Typography variant="subtitle2" gutterBottom>
    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>`
    },
    {
    label: 'Body 1',
    variant: 'body1',
    customRender: (
        <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';
<Typography variant="body1" gutterBottom>
    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>`
    },
    {
    label: 'Body 2',
    variant: 'body2',
    customRender: (
        <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';
<Typography variant="body2" gutterBottom>
    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>`
    },
    {
    label: 'Caption',
    variant: 'caption',
    customRender: (
        <Typography variant="caption" gutterBottom>
            caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';
<Typography variant="caption" gutterBottom>
    caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>`
    },
    {
    label: 'Overline',
    variant: 'overline',
    customRender: (
        <Typography variant="overline" gutterBottom>
            overline. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
    ),
    code: `import { Typography } from '@mui/material';
<Typography variant="overline" gutterBottom>
    overline. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Typography>`
    }
];


export default function TypographyComponent() {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800); // mô phỏng tải dữ liệu
        return () => clearTimeout(timer);
    }, []);

    const handleCopy = (code, index) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
    };

    if (loading) {
        return (
        <Box p={4} textAlign="center">
            <Typography variant="h6" gutterBottom>Đang tải các typography...</Typography>
            <CircularProgress color="primary" />
        </Box>
        );
    }

    return (
        <Box p={2} mx={8} my={4}>
        <Grid container spacing={4}>
            {typoVariants.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{display: 'flex', maxWidth: '520px'}}>
                <Paper
                elevation={2}
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                }}
                >
                <Box sx={{ mb: 2, textAlign: 'center' }}>
                    {item.customRender}
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="subtitle2"></Typography>
                    <Button
                    onClick={() => handleCopy(item.code, index)}
                    startIcon={<ContentCopyIcon />}
                    size="small"
                    >
                    {copiedIndex === index ? 'Đã copy!' : 'Copy code'}
                    </Button>
                </Box>

                <Box sx={{ flexGrow: 1 }} />
                <SyntaxHighlighter language="jsx" style={oneDark} wrapLongLines>
                    {item.code}
                </SyntaxHighlighter>
                </Paper>
            </Grid>
            ))}
        </Grid>
        </Box>
    );
}
