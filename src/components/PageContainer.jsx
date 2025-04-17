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
    Snackbar,
    SnackbarContent,
    Stack,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PageContainer } from '@toolpad/core/PageContainer';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internal';
import { useTheme } from '@mui/material/styles';


// Basic Page Container
const BasicPageContainer = () => {
    const NAVIGATION = [
        { segment: '', title: 'Home' },
        { segment: 'orders', title: 'Orders' },
      ];
      const router = useDemoRouter('/orders');

      const theme = useTheme();
    
      return (
        <AppProvider navigation={NAVIGATION} router={router} theme={theme}>
          <Paper sx={{ width: '100%' }}>
            {/* preview-start */}
            <PageContainer>Page content</PageContainer>
            {/* preview-end */}
          </Paper>
        </AppProvider>
      );
}

// Positioned Snackbar
const PositionedSnackbar = () => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
    };

    const handleClose = () => {
    setState({ ...state, open: false });
    };

    const buttons = (
    <React.Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
            Top-Center
        </Button>
        </Box>
        <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={6}>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
            Top-Left
            </Button>
        </Grid>
        <Grid sx={{ textAlign: 'right' }} size={6}>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
            Top-Right
            </Button>
        </Grid>
        <Grid size={6}>
            <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
            Bottom-Left
            </Button>
        </Grid>
        <Grid sx={{ textAlign: 'right' }} size={6}>
            <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
            Bottom-Right
            </Button>
        </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
            Bottom-Center
        </Button>
        </Box>
    </React.Fragment>
    );

    return (
    <Box sx={{ width: 530 }}>
        {buttons}
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
        />
    </Box>
    );
}

// Content Basic Page Container
const ContentSnackbar = () => {
    const action = (
        <Button color="secondary" size="small">
            lorem ipsum dolorem
        </Button>
    );

    return (
    <Stack spacing={2} sx={{ width: 530 }}>
        <SnackbarContent message="I love snacks." action={action} />
        <SnackbarContent
        message={
            'I love candy. I love cookies. I love cupcakes. \
            I love cheesecake. I love chocolate.'
        }
        />
        <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
        />
        <SnackbarContent
        message={
            'I love candy. I love cookies. I love cupcakes. \
            I love cheesecake. I love chocolate.'
        }
        action={action}
        />
    </Stack>
    );
}

// Automatic Dismiss
const AutoDismissSnackbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        };

    return (
    <div>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="This Snackbar will be dismissed in 5 seconds."
        />
    </div>
    );
}

const basicPageContainerCode = `
import * as React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internal';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const NAVIGATION = [
  { segment: '', title: 'Home' },
  { segment: 'orders', title: 'Orders' },
];

export default function BasicPageContainer() {
  const router = useDemoRouter('/orders');

  const theme = useTheme();

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={theme}>
      <Paper sx={{ width: '100%' }}>
        {/* preview-start */}
        <PageContainer>Page content</PageContainer>
        {/* preview-end */}
      </Paper>
    </AppProvider>
  );
}
`;

const positionedSnackbarCode = `
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function PositionedSnackbar() {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
            Top-Center
            </Button>
        </Box>
        <Grid container sx={{ justifyContent: 'center' }}>
            <Grid size={6}>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
                Top-Left
            </Button>
            </Grid>
            <Grid sx={{ textAlign: 'right' }} size={6}>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
                Top-Right
            </Button>
            </Grid>
            <Grid size={6}>
            <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
                Bottom-Left
            </Button>
            </Grid>
            <Grid sx={{ textAlign: 'right' }} size={6}>
            <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
                Bottom-Right
            </Button>
            </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
            Bottom-Center
            </Button>
        </Box>
        </React.Fragment>
    );

    return (
        <Box sx={{ width: 500 }}>
        {buttons}
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
        />
        </Box>
    );
}
`;

const contentSnackbarCode = `
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

const action = (
    <Button color="secondary" size="small">
        lorem ipsum dolorem
    </Button>
);

export default function LongTextSnackbar() {
    return (
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
        <SnackbarContent message="I love snacks." action={action} />
        <SnackbarContent
            message={
            'I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate.'
            }
        />
        <SnackbarContent
            message="I love candy. I love cookies. I love cupcakes."
            action={action}
        />
        <SnackbarContent
            message={
            'I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate.'
            }
            action={action}
        />
        </Stack>
    );
}
`;

const autoDismissSnackbarCode = `
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

        setOpen(false);
    };

    return (
    <div>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="This Snackbar will be dismissed in 5 seconds."
        />
        </div>
    );
}`;


const snackbarList = [
    {
        name: 'Basic Page Container',
        component: <BasicPageContainer />,
        code: basicPageContainerCode
    },
    {
        name: 'Automatic Dismiss',
        component: <AutoDismissSnackbar />,
        code: autoDismissSnackbarCode
    },
    {
        name: 'Positioned Snackbar',
        component: <PositionedSnackbar />,
        code: positionedSnackbarCode
    },
    {
        name: 'Content Snackbar',
        component: <ContentSnackbar />,
        code: contentSnackbarCode
    },
    
]

export default function SnackbarComponent() {
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
                <Typography variant="h6" gutterBottom>Đang tải các page container...</Typography>
                <CircularProgress color="primary" />
            </Box>
            );
        }
    
    // ✅ THÊM HANDLE COPY
    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <Box p={2} mx={10} my={4}>
            <Grid container spacing={8}>
                {snackbarList.map((item, idx) => (
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