import Check from '@mui/icons-material/Check';
import Cloud from '@mui/icons-material/Cloud';
import { default as ContentCopy, default as ContentCopyIcon } from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


// const SimpleTreeView = () => {
//   return (
//     <Box sx={{ minHeight: 350, minWidth: 250 }}>
//       <SimpleTreeView>
//         <TreeItem itemId="grid" label="Data Grid">
//           <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
//           <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
//           <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
//         </TreeItem>
//         <TreeItem itemId="pickers" label="Date and Time Pickers">
//           <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
//           <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
//         </TreeItem>
//         <TreeItem itemId="charts" label="Charts">
//           <TreeItem itemId="charts-community" label="@mui/x-charts" />
//         </TreeItem>
//         <TreeItem itemId="tree-view" label="Tree View">
//           <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
//         </TreeItem>
//       </SimpleTreeView>
//     </Box>
//   );
// };

// const simpleTreeViewCode = `import * as React from 'react';
// import Box from '@mui/material/Box';
// import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
// import { TreeItem } from '@mui/x-tree-view/TreeItem';

// export default function BasicSimpleTreeView() {
//   return (
//     <Box sx={{ minHeight: 352, minWidth: 250 }}>
//       <SimpleTreeView>
//         <TreeItem itemId="grid" label="Data Grid">
//           <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
//           <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
//           <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
//         </TreeItem>
//         <TreeItem itemId="pickers" label="Date and Time Pickers">
//           <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
//           <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
//         </TreeItem>
//         <TreeItem itemId="charts" label="Charts">
//           <TreeItem itemId="charts-community" label="@mui/x-charts" />
//         </TreeItem>
//         <TreeItem itemId="tree-view" label="Tree View">
//           <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
//         </TreeItem>
//       </SimpleTreeView>
//     </Box>
//   );
// }
// `;

// Icon Menu
const IconMenu = () => {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

// Dense Menu
const DenseMenu = () => {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

// // Selected Menu
const SelectedMenu = () => {
  const options = [
    'Show some love to MUI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="When device is locked"
            secondary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const iconMenuCode = `import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`;

const denseMenuCode = `import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`;


// const selectedMenuCode = `import * as React from 'react';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';

// const options = [
//   'Show some love to MUI',
//   'Show all notification content',
//   'Hide sensitive notification content',
//   'Hide all notification content',
// ];

// export default function SimpleListMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(1);
//   const open = Boolean(anchorEl);
//   const handleClickListItem = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setAnchorEl(null);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <List
//         component="nav"
//         aria-label="Device settings"
//         sx={{ bgcolor: 'background.paper' }}
//       >
//         <ListItemButton
//           id="lock-button"
//           aria-haspopup="listbox"
//           aria-controls="lock-menu"
//           aria-label="when device is locked"
//           aria-expanded={open ? 'true' : undefined}
//           onClick={handleClickListItem}
//         >
//           <ListItemText
//             primary="When device is locked"
//             secondary={options[selectedIndex]}
//           />
//         </ListItemButton>
//       </List>
//       <Menu
//         id="lock-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'lock-button',
//           role: 'listbox',
//         }}
//       >
//         {options.map((option, index) => (
//           <MenuItem
//             key={option}
//             disabled={index === 0}
//             selected={index === selectedIndex}
//             onClick={(event) => handleMenuItemClick(event, index)}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }
// `;

const menuVariants = [
  {
    name: 'Icon Menu',
    component: <IconMenu />,
    code: iconMenuCode
  },
  {
    name: 'Dense Menu',
    component: <DenseMenu />,
    code: denseMenuCode
  },
  // {
  //   name: 'Selected Menu',
  //   component: <SelectedMenu />,
  //   code: '0',
  // }
]

export default function Menu() {
      const [open, setOpen] = React.useState(false);
      const [copied, setCopied] = React.useState(false);
      const [codeString, setCodeString] = React.useState('');
  
      const handleOpen = (code) => {
          setCodeString(code);
          setOpen(true);
      };
  
      const handleClose = () => {
          setOpen(false);
      };
  
  
      // ✅ THÊM HANDLE COPY
      const handleCopy = () => {
          navigator.clipboard.writeText(codeString);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
      };
    
      return (
          <Box p={2} mx={4} my={2}>
              <Typography variant="h4" gutterBottom>
                  Menu
              </Typography>
              <Typography variant="body1" gutterBottom>
                  List of Menu
              </Typography>
              <Grid container spacing={8}>
                  {menuVariants.map((item, idx) => (
                      <Grid item xs={12} md={6} key={idx}>
                      <Paper elevation={3} sx={{ p: 3, mt: 2, width: 320, height: 380 }}>
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