import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import VGUFullLogo from '../assets/LOGO/VGU Full Color logo-06.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const codeString = `
import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VGUFullLogo from '../assets/LOGO/VGU Full Color logo-06.png';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

<TextField label="Username" fullWidth variant="outlined" margin="normal" />

<TextField
  label="Password"
  type="password"
  fullWidth
  variant="outlined"
  margin="normal"
/>

<Button variant="contained" fullWidth sx={{ backgroundColor: '#d35400' }}>
  Log in
</Button>;

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', bgcolor: '#f4f4f4'}}>
      <Grid container maxWidth="lg" spacing={4}>
        {/* Login Form */}
        <Grid item xs={12} md={6} sx={{ maxWidth: 400 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
          <Box component="img" src={VGUFullLogo} alt="VGU Logo" sx={{ height: 40, mb: 1 }} />

            <TextField label="Username" fullWidth variant="outlined" margin="normal" />

            <Box position="relative">
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{ position: 'absolute', top: 25, right: 10 }}
              >
                <VisibilityIcon />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: '#d35400', '&:hover': { backgroundColor: '#b94300' } }}
            >
              Log in
            </Button>

            <Typography variant="body2" sx={{ mt: 1, color: '#d35400', cursor: 'pointer' }}>
              Lost password?
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
 `;

  // ✅ THÊM HANDLE COPY
  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', bgcolor: '#f4f4f4' }}>
      <Grid container maxWidth="lg" spacing={4}>
        <Grid item xs={12} md={6} sx={{ maxWidth: 400 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
            <Box component="img" src={VGUFullLogo} alt="VGU Logo" sx={{ height: 40, mb: 1 }} />
            <TextField label="Username" fullWidth variant="outlined" margin="normal" />

            <Box position="relative">
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{ position: 'absolute', top: 25, right: 10 }}
              >
                <VisibilityIcon />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#d35400',
                '&:hover': { backgroundColor: '#b94300' },
                px: 5,
                textTransform: 'none',
              }}
            >
              Log in
            </Button>

            <Typography variant="body2" sx={{ mt: 1, color: '#d35400', cursor: 'pointer' }}>
              Lost password?
            </Typography>


          </Paper>
          <Button variant="outlined" size="small" sx={{ mt: 3 }} onClick={handleOpen}>
            Code
          </Button>
        </Grid>
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
    </Grid>
  );
}
