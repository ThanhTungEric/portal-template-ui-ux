import { Box, Grid, IconButton, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Ví dụ import icon, sau này bạn thay bằng danh sách thật
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import AndroidIcon from '@mui/icons-material/Android';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AppleIcon from '@mui/icons-material/Apple';
import ArchiveIcon from '@mui/icons-material/Archive';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BackupIcon from '@mui/icons-material/Backup';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BuildIcon from '@mui/icons-material/Build';

const icons = [
  { name: 'AccessAlarm', component: <AccessAlarmIcon fontSize="large" />, importPath: "@mui/icons-material/AccessAlarm" },
  { name: 'AccountCircle', component: <AccountCircleIcon fontSize="large" />, importPath: "@mui/icons-material/AccountCircle" },
  { name: 'Add', component: <AddIcon fontSize="large" />, importPath: "@mui/icons-material/Add" },
  { name: 'AddToDrive', component: <AddToDriveIcon fontSize="large" />, importPath: "@mui/icons-material/AddToDrive" },
  { name: 'AddLink', component: <AddLinkIcon fontSize="large" />, importPath: "@mui/icons-material/AddLink" },
  { name: 'AdfScanner', component: <AdfScannerIcon fontSize="large" />, importPath: "@mui/icons-material/AdfScanner" },
  { name: 'Announcement', component: <AnnouncementIcon fontSize="large" />, importPath: "@mui/icons-material/Announcement" },
  { name: 'Apple', component: <AppleIcon fontSize="large" />, importPath: "@mui/icons-material/Apple" },
  { name: 'Android', component: <AndroidIcon fontSize="large" />, importPath: "@mui/icons-material/Android" },
  { name: 'Archive', component: <ArchiveIcon fontSize="large" />, importPath: "@mui/icons-material/Archive" },
  { name: 'ArrowBack', component: <ArrowBackIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowBack" },
  { name: 'ArrowBackIos', component: <ArrowBackIosIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowBackIos" },
  { name: 'ArrowForward', component: <ArrowForwardIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowForward" },
  { name: 'ArrowForwardIos', component: <ArrowForwardIosIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowForwardIos" },
  { name: 'ArrowLeft', component: <ArrowLeftIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowLeft" },
  { name: 'ArrowRight', component: <ArrowRightIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowRight" },
  { name: 'Article', component: <ArticleIcon fontSize="large" />, importPath: "@mui/icons-material/Article" },
  { name: 'Assignment', component: <AssignmentIcon fontSize="large" />, importPath: "@mui/icons-material/Assignment" },
  { name: 'Attachment', component: <AttachmentIcon fontSize="large" />, importPath: "@mui/icons-material/Attachment" },
  { name: 'Backup', component: <BackupIcon fontSize="large" />, importPath: "@mui/icons-material/Backup" },
  { name: 'Autorenew', component: <AutorenewIcon fontSize="large" />, importPath: "@mui/icons-material/Autorenew" },
  { name: 'Bluetooth', component: <BluetoothIcon fontSize="large" />, importPath: "@mui/icons-material/Bluetooth" },
  { name: 'Bookmark', component: <BookmarkIcon fontSize="large" />, importPath: "@mui/icons-material/Bookmark" },
  { name: 'BookmarkBorder', component: <BookmarkBorderIcon fontSize="large" />, importPath: "@mui/icons-material/BookmarkBorder" },
  { name: 'Bookmarks', component: <BookmarksIcon fontSize="large" />, importPath: "@mui/icons-material/Bookmarks" },
  { name: 'Build', component: <BuildIcon fontSize="large" />, importPath: "@mui/icons-material/Build" },
];

export default function IconView() {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleOpen = (icon) => {
    setSelectedIcon(icon);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIcon(null);
  };

  return (
    <Box p={4}>
        <Typography variant="h5" gutterBottom>
          List of Icons
        </Typography>
        <Typography variant="body2" gutterBottom>
          Click on an icon to see its import statement and usage. To change the color of the icon, there are two ways:
          <ul>
            <li>Use the predefined <code>color</code> options supported by MUI in prop: <code>{'<Icon color="primary" />'}</code></li>
            <li>Use <code>sx</code> for a specific color: <code>{'<Icon sx={{ color: "#f50057" }} />'}</code> </li>
          </ul>
        </Typography>
      <Grid container spacing={2}>
        {icons.map((icon, index) => (
          <Grid item xs={3} sm={2} md={1} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <IconButton onClick={() => handleOpen(icon)}>
                {icon.component}
              </IconButton>
              <Typography variant="caption" sx={{ mt: 1, textAlign: 'center' }}>
                {icon.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2,
            minWidth: 300,
          }}
          
        >
          
          {selectedIcon && (
            <>
              <Box display="flex" justifyContent="center" my={2}>
                {selectedIcon.component}
              </Box>
              
              <SyntaxHighlighter language="jsx" style={oneDark}>
                {`import ${selectedIcon.name}Icon from '${selectedIcon.importPath}';`}
              </SyntaxHighlighter>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
