import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';

// display Dashboard demo
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function SourceCodeDialog() {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
    setCopied(false);
  };

  const sourceCode = `import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
// ...rest of the code here (abbreviated to keep it short for view)
`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sourceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<CodeIcon />}
        onClick={handleToggle}
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1300 }}
      >
        Code
      </Button>

      <Dialog open={open} onClose={handleToggle} maxWidth="md" fullWidth>
        <DialogTitle>
          Source Code
          <IconButton
            aria-label="close"
            onClick={handleToggle}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Button
            onClick={handleCopy}
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </Button>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            fontSize: 12,
            backgroundColor: '#f5f5f5',
            padding: 16,
            borderRadius: 8,
            overflow: 'auto',
            maxHeight: '70vh',
          }}>
            {sourceCode}
          </pre>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid item xs={5} />
            <Grid item xs={12}><Skeleton height={14} /></Grid>
            <Grid item xs={12}><Skeleton height={14} /></Grid>
            <Grid item xs={4}><Skeleton height={100} /></Grid>
            <Grid item xs={8}><Skeleton height={100} /></Grid>
            <Grid item xs={12}><Skeleton height={150} /></Grid>
            <Grid item xs={12}><Skeleton height={14} /></Grid>
            <Grid item xs={3}><Skeleton height={100} /></Grid>
            <Grid item xs={3}><Skeleton height={100} /></Grid>
            <Grid item xs={3}><Skeleton height={100} /></Grid>
            <Grid item xs={3}><Skeleton height={100} /></Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
      <SourceCodeDialog />
    </AppProvider>
  );
}
