import * as React from 'react';
import {
  Box,
  FormControlLabel,
  Switch,
  Paper,
  Typography,
  Divider,
  CircularProgress
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { LoadingButton } from '@mui/lab';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function LoadingButtonsShowcase() {
  const [loading, setLoading] = React.useState(true);
  const [copied, setCopied] = React.useState(false);
  const [delayed, setDelayed] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    setLoading(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const codeString = `import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(true);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton loading variant="outlined" disabled>
          Disabled
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>
        <LoadingButton
          color="secondary"
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>
    </>
  );
}`;

  if (delayed) {
    return (
      <Box p={4} textAlign="center">
        <Typography variant="h6" gutterBottom>Đang tải</Typography>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Button Loading States
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Toggle Loading"
        sx={{ mb: 2 }}
      />

      <Box sx={{ '& > button': { m: 1 }, mb: 2 }}>
        <LoadingButton size="small" loading variant="outlined" disabled>
          Disabled
        </LoadingButton>
        <LoadingButton size="small" loading loadingIndicator="Loading…" variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton
          size="small"
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="subtitle2">Mã nguồn</Typography>
        <LoadingButton
          size="small"
          onClick={handleCopy}
          startIcon={<ContentCopyIcon />}
          loading={false}
        >
          {copied ? 'Đã copy!' : 'Copy code'}
        </LoadingButton>
      </Box>

      <SyntaxHighlighter language="jsx" style={oneDark} wrapLongLines>
        {codeString}
      </SyntaxHighlighter>
    </Paper>
  );
}
