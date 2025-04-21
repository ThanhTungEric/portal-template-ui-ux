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
import { PageContainer } from '@toolpad/core/PageContainer';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Link, useDemoRouter } from '@toolpad/core/internal';
import { useActivePage } from '@toolpad/core/useActivePage';
import invariant from 'invariant';


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

// // Dynamic Route
const NAVIGATION = [
  {
    segment: 'inbox',
    title: 'Orders',
    pattern: 'inbox/:id',
  },
];

const DynamicRoutes =()=> {
  const router = useDemoRouter('/inbox/123');
  const theme = useTheme();

  function Content({ router }) {
    const id = Number(router.pathname.replace('/inbox/', ''));

    const activePage = useActivePage();
    invariant(activePage, 'No navigation match');

    const title = `Item ${id}`;
    const path = `${activePage.path}/${id}`;
    const breadcrumbs = [...activePage.breadcrumbs, { title, path }];

    return (
      <PageContainer title={title} breadcrumbs={breadcrumbs}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href={`/inbox/${id - 1}`}>previous</Link>
          <Link href={`/inbox/${id + 1}`}>next</Link>
        </Box>
      </PageContainer>
    );
  }

  Content.propTypes = {
    router: PropTypes.shape({
      Link: PropTypes.func,
      navigate: PropTypes.func.isRequired,
      pathname: PropTypes.string.isRequired,
      searchParams: PropTypes.instanceOf(URLSearchParams).isRequired,
    }).isRequired,
  };

  let content = (
    <PageContainer>
      <Link href={`/inbox/123`}>Item 123</Link>
    </PageContainer>
  );

  if (router.pathname.startsWith('/inbox/')) {
    content = <Content router={router} />;
  }

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={theme}>
      <Paper sx={{ width: '100%' }}>{content}</Paper>
    </AppProvider>
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

const dynamicRoutesPageContainerCode = `
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

const pageContainerList = [
    {
        name: 'Basic Page Container',
        component: <BasicPageContainer />,
        code: basicPageContainerCode
    },
    {
        name: 'Dynamic Route Page Container',
        component: <DynamicRoutes />,
        code: dynamicRoutesPageContainerCode
    },
    
]

export default function PageContainerComponent() {
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
    
    // THÊM HANDLE COPY
    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <Box p={2} mx={10} my={4}>
            <Grid container spacing={8}>
                {pageContainerList.map((item, idx) => (
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