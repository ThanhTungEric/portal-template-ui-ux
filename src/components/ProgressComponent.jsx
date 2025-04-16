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
import LinearProgress from '@mui/material/LinearProgress';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';

// Interactive integration demo display fuction
function InteractiveintegrationCard() {
    const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef(undefined);

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
// Circular w label demo display fuction
function CircularwLabelCard() {
    const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

  return <CircularProgressWithLabel value={progress} />;
}

const progressVariants = [
  // Circular color
    {
      label: 'Circular color', 
      customRender: (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
        </Stack>
      ),
      code: `import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}`
    },
  // Circular size
  {
    label: 'Circular size',
    customRender: (
        <Stack spacing={2} direction="row" alignItems="center">
        <CircularProgress size="30px" />
        <CircularProgress size={40} />
        <CircularProgress size="3rem" />
      </Stack>
    ),
    code: `import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularSize() {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <CircularProgress size="30px" />
      <CircularProgress size={40} />
      <CircularProgress size="3rem" />
    </Stack>
  );
}`
  },
// Interactive integration 
{
    label: 'Interactive integration',
    customRender: <InteractiveintegrationCard />, // Render the demo display function
    code: `import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

export default function CircularIntegration() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef(undefined);

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}`
  },
// Circular with label
{
    label: 'Interactive integrationCircular with label',
    customRender: <CircularwLabelCard />, // Render the demo display function
    code: `import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >
          {\`\${Math.round(props.value)}%\`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}`  
},
  // Linear Color
  {
    label: 'Linear Color',
    customRender: (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
    ),
    code: `import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearColor() {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}`
  },
]; 

export default function ProgressComponent() {
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
       <Typography variant="h6" gutterBottom>Đang tải...</Typography> {/* Loading action with text */}
       <CircularProgress color="primary" />
     </Box>
   );
 }

 return (
   <Box p={2}>
     <Grid container spacing={4}>
       {progressVariants.map((btn, index) => (
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
                     color: btn.variant === 'text' || btn.variant === 'outlined' ? '#F28130' : '#fff',
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

