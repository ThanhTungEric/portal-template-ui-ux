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

import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';



// Simple Dialog demo display fuction
function SimpleDialogCard() {
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const SimpleDialog = ({ onClose, selectedValue, open }) => {
    const handleCloseInner = () => {
      onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
      onClose(value);
    };

    return (
      <Dialog onClose={handleCloseInner} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem disablePadding key={email}>
              <ListItemButton onClick={() => handleListItemClick(email)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick('addAccount')}
            >
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    );
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

// Transition Dialog demo display fuction
function TransitionDialogCard() {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
// Form Dialog demo display fuction
function FormDialogCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
const dialogVariants = [
  // Simple Dialog 
    {
      label: 'Simple',
      customRender: <SimpleDialogCard />, // Render the demo display function
      code: `import * as React from 'react';
    import PropTypes from 'prop-types';
    import Button from '@mui/material/Button';
    import Avatar from '@mui/material/Avatar';
    import List from '@mui/material/List';
    import ListItem from '@mui/material/ListItem';
    import ListItemAvatar from '@mui/material/ListItemAvatar';
    import ListItemButton from '@mui/material/ListItemButton';
    import ListItemText from '@mui/material/ListItemText';
    import DialogTitle from '@mui/material/DialogTitle';
    import Dialog from '@mui/material/Dialog';
    import PersonIcon from '@mui/icons-material/Person';
    import AddIcon from '@mui/icons-material/Add';
    import Typography from '@mui/material/Typography';
    import { blue } from '@mui/material/colors';
    
    const emails = ['username@gmail.com', 'user02@gmail.com'];
    
    function SimpleDialog(props) {
      const { onClose, selectedValue, open } = props;
    
      const handleClose = () => {
        onClose(selectedValue);
      };
    
      const handleListItemClick = (value) => {
        onClose(value);
      };
    
      return (
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Set backup account</DialogTitle>
          <List sx={{ pt: 0 }}>
            {emails.map((email) => (
              <ListItem disablePadding key={email}>
                <ListItemButton onClick={() => handleListItemClick(email)}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                autoFocus
                onClick={() => handleListItemClick('addAccount')}
              >
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Add account" />
              </ListItemButton>
            </ListItem>
          </List>
        </Dialog>
      );
    }
    
    SimpleDialog.propTypes = {
      onClose: PropTypes.func.isRequired,
      open: PropTypes.bool.isRequired,
      selectedValue: PropTypes.string.isRequired,
    };
    
    export default function SimpleDialogDemo() {
      const [open, setOpen] = React.useState(false);
      const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
      };
    
      return (
        <div>
          <Typography variant="subtitle1" component="div">
            Selected: {selectedValue}
          </Typography>
          <br />
          <Button variant="outlined" onClick={handleClickOpen}>
            Open simple dialog
          </Button>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </div>
      );
    }`
    },
  // Transition Dialog 
  {
    label: 'Transition',
    customRender: <TransitionDialogCard />, //Render the demo display function
    code: `import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}`
  },
  // Form Dialog 
  {
    label: 'Form',
    customRender: <FormDialogCard />, //Render the demo display function
    code: `import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}`
  },
]; 

export default function DialogComponent() {
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
       <Typography variant="h6" gutterBottom>Đang tải các dialog...</Typography> {/* Loading action with text */}
       <CircularProgress color="primary" />
     </Box>
   );
 }

 return (
   <Box p={2}>
     <Grid container spacing={4}>
       {dialogVariants.map((btn, index) => (
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

