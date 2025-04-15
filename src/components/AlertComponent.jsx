import React, { useState, useEffect } from 'react';
import {
  Button,
  IconButton,
  Typography,
  Grid,
  Box,
  Paper,
  Divider,
  Stack,
  CircularProgress
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Alert from '@mui/material/Alert';


const alertVariants = [
  {
    label: 'Severity',
    variant: 'severity',
    code: `import Alert from '@mui/material/Alert';

<Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="success">This is a success Alert.</Alert>
    <Alert severity="info">This is an info Alert.</Alert>
    <Alert severity="warning">This is a warning Alert.</Alert>
    <Alert severity="error">This is an error Alert.</Alert>
</Stack>`
  },
  {
    label: 'Contained',
    variant: 'contained',
    code: `import { Button } from '@mui/material';

<Button variant="contained">
  Contained
</Button>`
  },
  {
    label: 'Outlined',
    variant: 'outlined',
    code: `import { Button } from '@mui/material';

<Button variant="outlined">
  Outlined
</Button>`
  },
  {
    label: 'Disabled',
    variant: 'outlined',
    disabled: true,
    code: `import { Button } from '@mui/material';

<Button variant="outlined" disabled>
  Disabled
</Button>`
  },
  {
    label: 'Outlined w/ Icon',
    customRender: (
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    ),
    code: `import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

<Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>`
  },
  {
    label: 'Contained w/ Icon',
    customRender: (
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    ),
    code: `import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>`
  },
  {
    label: 'Upload Button',
    customRender: (
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <input
          type="file"
          multiple
          hidden
          onChange={(event) => console.log(event.target.files)}
        />
      </Button>
    ),
    code: `import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

<Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload files
  <input
    type="file"
    multiple
    hidden
    onChange={(event) => console.log(event.target.files)}
  />
</Button>`
  },
  {
    label: 'Save',
    customRender: (
      <Button variant="contained" color="secondary" startIcon={<SaveIcon />}>
        Save
      </Button>
    ),
    code: `import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
  
<Button variant="contained" color="secondary" startIcon={<SaveIcon />}>
  Save
</Button>`
  }
];

export default function AlertComponent() {
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
        <Typography variant="h6" gutterBottom>Đang tải các button...</Typography>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Grid container spacing={4}>
        {alertVariants.map((btn, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}
            >
              <Box sx={{ mb: 2, textAlign: 'center' }}>
                {btn.customRender ? (
                  <Stack direction="row" justifyContent="center">
                    {btn.customRender}
                  </Stack>
                ) : (
                  <Button
                    variant={btn.variant}
                    disabled={btn.disabled}
                    sx={{
                      color: btn.variant === 'severity' || btn.variant === 'outlined' ? '#F28130' : '#fff',
                      backgroundColor: btn.variant === 'contained' ? '#F28130' : 'transparent',
                      borderColor: btn.variant === 'outlined' ? '#F28130' : undefined
                    }}
                  >
                    {btn.label}
                  </Button>
                )}
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="subtitle2"></Typography>
                <Button
                  onClick={() => handleCopy(btn.code, index)}
                  startIcon={<ContentCopyIcon />}
                  size="small"
                >
                  {copiedIndex === index ? 'Đã copy!' : 'Copy code'}
                </Button>
              </Box>

              <Box sx={{ flexGrow: 1 }} />
              <SyntaxHighlighter language="jsx" style={oneDark} wrapLongLines>
                {btn.code}
              </SyntaxHighlighter>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
