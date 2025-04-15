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
  // Severity alert
  {
    label: 'Severity', 
    customRender: (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">This is a success Alert.</Alert>
        <Alert severity="info">This is an info Alert.</Alert>
        <Alert severity="warning">This is a warning Alert.</Alert>
        <Alert severity="error">This is an error Alert.</Alert>
      </Stack>
    ),
    code: `import Alert from '@mui/material/Alert';

<Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="success">This is a success Alert.</Alert>
    <Alert severity="info">This is an info Alert.</Alert>
    <Alert severity="warning">This is a warning Alert.</Alert>
    <Alert severity="error">This is an error Alert.</Alert>
</Stack>`
  },
  // Filled Alert
  {
    label: 'Filled',
    customRender: (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
        <Alert variant="filled" severity="info">
          This is a filled info Alert.
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
      </Stack>
    ),
    code: `import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

<Stack sx={{ width: '100%' }} spacing={2}>
  <Alert variant="filled" severity="success">
    This is a filled success Alert.
  </Alert>
  <Alert variant="filled" severity="info">
    This is a filled info Alert.
  </Alert>
  <Alert variant="filled" severity="warning">
    This is a filled warning Alert.
  </Alert>
  <Alert variant="filled" severity="error">
    This is a filled error Alert.
  </Alert>
</Stack>`
  },
  // Outlined Alert
  {
    label: 'Outlined',
    customRender: (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="outlined" severity="success">
          This is an outlined success Alert.
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an outlined info Alert.
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an outlined warning Alert.
        </Alert>
        <Alert variant="outlined" severity="error">
          This is an outlined error Alert.
        </Alert>
      </Stack>
    ),
    code: `import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

<Stack sx={{ width: '100%' }} spacing={2}>
  <Alert variant="outlined" severity="success">
    This is an outlined success Alert.
  </Alert>
  <Alert variant="outlined" severity="info">
    This is an outlined info Alert.
  </Alert>
  <Alert variant="outlined" severity="warning">
    This is an outlined warning Alert.
  </Alert>
  <Alert variant="outlined" severity="error">
    This is an outlined error Alert.
  </Alert>
</Stack>`
  },
  // Outlined Alert
  {
    label: 'Outlined',
    customRender: (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="outlined" severity="success">
          This is an outlined success Alert.
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an outlined info Alert.
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an outlined warning Alert.
        </Alert>
        <Alert variant="outlined" severity="error">
          This is an outlined error Alert.
        </Alert>
      </Stack>
    ),
    code: `import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

<Stack sx={{ width: '100%' }} spacing={2}>
  <Alert variant="outlined" severity="success">
    This is an outlined success Alert.
  </Alert>
  <Alert variant="outlined" severity="info">
    This is an outlined info Alert.
  </Alert>
  <Alert variant="outlined" severity="warning">
    This is an outlined warning Alert.
  </Alert>
  <Alert variant="outlined" severity="error">
    This is an outlined error Alert.
  </Alert>
</Stack>`
  },
  // Color Alert
  {
    label: 'Color',
    customRender: (
    <Alert severity="success" color="warning">
      This is a success Alert with warning colors.
    </Alert>
    ),
    code: `import Alert from '@mui/material/Alert';

<Alert severity="success" color="warning">
      This is a success Alert with warning colors.
    </Alert>`
  },
];

export default function AlertComponent() {
 const [copiedIndex, setCopiedIndex] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const timer = setTimeout(() => setLoading(false), 800); // mô phỏng tải dữ liệu (loading action)
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
       <Typography variant="h6" gutterBottom>Đang tải các alert...</Typography> {/* Loading action with text */}
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
               flexGrow: 1,
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

