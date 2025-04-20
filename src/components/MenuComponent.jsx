import Check from '@mui/icons-material/Check';
import Cloud from '@mui/icons-material/Cloud';
import { default as ContentCopy, default as ContentCopyIcon } from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    Grid,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Paper,
    Tooltip,
    Typography,
} from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Icon Menu component
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
};

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
    };

// Positioned Menu
const PositionedMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Dashboard
        </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </div>
    );
}

// Account Menu
const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
    <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
            <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
        </Tooltip>
        </Box>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
            paper: {
                elevation: 0,
                sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                },
                '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
            <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Settings fontSize="small" />
            </ListItemIcon>
            Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Logout
            </MenuItem>
        </Menu>
        </React.Fragment>
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

const positionedMenuCode = `import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Dashboard
        </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </div>
    );
}
`;

const accountMenuCode = `import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Typography sx={{ minWidth: 100 }}>Contact</Typography>
            <Typography sx={{ minWidth: 100 }}>Profile</Typography>
            <Tooltip title="Account settings">
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
            </Tooltip>
        </Box>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
            paper: {
                elevation: 0,
                sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                },
                '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
            <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Settings fontSize="small" />
            </ListItemIcon>
            Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Logout
            </MenuItem>
        </Menu>
        </React.Fragment>
    );
}
`;

// BasicSimpleTreeView
const BasicSimpleTreeView = () => {
    return (
        <Box sx={{ minHeight: 200, minWidth: 250 }}>
        <SimpleTreeView>
            <TreeItem itemId="grid" label="Data Grid">
            <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
            <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
            <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
            </TreeItem>
            <TreeItem itemId="pickers" label="Date and Time Pickers">
            <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
            <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
            </TreeItem>
            <TreeItem itemId="charts" label="Charts">
            <TreeItem itemId="charts-community" label="@mui/x-charts" />
            </TreeItem>
            <TreeItem itemId="tree-view" label="Tree View">
            <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
            </TreeItem>
        </SimpleTreeView>
        </Box>
    );
}

const menuList = [
    {
        name: 'Icon Menu',
        component: <IconMenu />,
        code: iconMenuCode,
    },
    {
        name: 'Dense Menu',
        component: <DenseMenu />,
        code: denseMenuCode,
    },
    {
        name: 'Positioned Menu',
        component: <PositionedMenu />,
        code: positionedMenuCode,
    },
    {
        name: 'Account Menu',
        component: <AccountMenu />,
        code: accountMenuCode,
    },
    
];

const treeList = [
    {
        name: 'Basic Simple Tree View',
        component: <BasicSimpleTreeView />,
        code: `0`
    }
]

export default function MenuComponent() {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [codeString, setCodeString] = useState('');
    
    const handleOpen = (code) => {
        setCodeString(code);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <>
            <Box p={2} mx={10} my={4}>
            <Typography variant="h4" gutterBottom>
                Menu Component
            </Typography>
        
            <Grid container spacing={8}>
                {menuList.map((item, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                    <Paper elevation={3} sx={{ p: 4, minWidth: 330, minHeight: 280 }}>
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
        
            <Typography variant="h4" gutterBottom mt={6}>
                Tree Component
            </Typography>
        
            <Grid container spacing={8}>
                {treeList.map((item, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                    <Paper elevation={3} sx={{ p: 4, minWidth: 330, minHeight: 280 }}>
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
        
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogContent dividers>
                <SyntaxHighlighter
                    language="jsx"
                    style={oneDark}
                    wrapLongLines
                    showLineNumbers
                >
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
        </>
    );
}
