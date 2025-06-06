import { Box, CircularProgress, Grid, IconButton, List, ListItem, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Ví dụ import icon, sau này bạn thay bằng danh sách thật
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import AndroidIcon from '@mui/icons-material/Android';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AppleIcon from '@mui/icons-material/Apple';
import AppsIcon from '@mui/icons-material/Apps';
import ArchiveIcon from '@mui/icons-material/Archive';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BackspaceIcon from '@mui/icons-material/Backspace';
import BackupIcon from '@mui/icons-material/Backup';
import BlockIcon from '@mui/icons-material/Block';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import CallIcon from '@mui/icons-material/Call';
import CastIcon from '@mui/icons-material/Cast';
import ChatIcon from '@mui/icons-material/Chat';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CopyrightIcon from '@mui/icons-material/Copyright';
import CreateIcon from '@mui/icons-material/Create';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CropIcon from '@mui/icons-material/Crop';
import DeleteIcon from '@mui/icons-material/Delete';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import DownloadIcon from '@mui/icons-material/Download';
import ErrorIcon from '@mui/icons-material/Error';
import EventIcon from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import GetAppIcon from '@mui/icons-material/GetApp';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import RepeatIcon from '@mui/icons-material/Repeat';
import ReplyIcon from '@mui/icons-material/Reply';

const icons = [
  { name: 'AccessAlarm', component: <AccessAlarmIcon fontSize="large" />, importPath: "@mui/icons-material/AccessAlarm" },
  { name: 'AccessTimeFilled', component: <AccessTimeFilledIcon fontSize="large" />, importPath: "@mui/icons-material/AccessTimeFilled" },
  { name: 'AccountCircle', component: <AccountCircleIcon fontSize="large" />, importPath: "@mui/icons-material/AccountCircle" },
  { name: 'Add', component: <AddIcon fontSize="large" />, importPath: "@mui/icons-material/Add" },
  { name: 'AddLink', component: <AddLinkIcon fontSize="large" />, importPath: "@mui/icons-material/AddLink" },
  { name: 'AddToDrive', component: <AddToDriveIcon fontSize="large" />, importPath: "@mui/icons-material/AddToDrive" },
  { name: 'AddToPhotos', component: <AddToPhotosIcon fontSize="large" />, importPath: "@mui/icons-material/AddToPhotos" },
  { name: 'AdfScanner', component: <AdfScannerIcon fontSize="large" />, importPath: "@mui/icons-material/AdfScanner" },
  { name: 'Android', component: <AndroidIcon fontSize="large" />, importPath: "@mui/icons-material/Android" },
  { name: 'Announcement', component: <AnnouncementIcon fontSize="large" />, importPath: "@mui/icons-material/Announcement" },
  { name: 'Apple', component: <AppleIcon fontSize="large" />, importPath: "@mui/icons-material/Apple" },
  { name: 'Apps', component: <AppsIcon fontSize="large" />, importPath: "@mui/icons-material/Apps" },
  { name: 'Archive', component: <ArchiveIcon fontSize="large" />, importPath: "@mui/icons-material/Archive" },
  { name: 'ArrowBack', component: <ArrowBackIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowBack" },
  { name: 'ArrowBackIos', component: <ArrowBackIosIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowBackIos" },
  { name: 'ArrowCircleDown', component: <ArrowCircleDownIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowCircleDown" },
  { name: 'ArrowCircleLeft', component: <ArrowCircleLeftIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowCircleLeft" },
  { name: 'ArrowCircleRight', component: <ArrowCircleRightIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowCircleRight" },
  { name: 'ArrowCircleUp', component: <ArrowCircleUpIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowCircleUp" },
  { name: 'ArrowForward', component: <ArrowForwardIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowForward" },
  { name: 'ArrowForwardIos', component: <ArrowForwardIosIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowForwardIos" },
  { name: 'ArrowLeft', component: <ArrowLeftIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowLeft" },
  { name: 'ArrowRight', component: <ArrowRightIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowRight" },
  { name: 'Article', component: <ArticleIcon fontSize="large" />, importPath: "@mui/icons-material/Article" },
  { name: 'Assignment', component: <AssignmentIcon fontSize="large" />, importPath: "@mui/icons-material/Assignment" },
  { name: 'Attachment', component: <AttachmentIcon fontSize="large" />, importPath: "@mui/icons-material/Attachment" },
  { name: 'AudioFile', component: <AudioFileIcon fontSize="large" />, importPath: "@mui/icons-material/AudioFile" },
  { name: 'Autorenew', component: <AutorenewIcon fontSize="large" />, importPath: "@mui/icons-material/Autorenew" },
  { name: 'Backspace', component: <BackspaceIcon fontSize="large" />, importPath: "@mui/icons-material/Backspace" },
  { name: 'Backup', component: <BackupIcon fontSize="large" />, importPath: "@mui/icons-material/Backup" },
  { name: 'Block', component: <BlockIcon fontSize="large" />, importPath: "@mui/icons-material/Block" },
  { name: 'Bluetooth', component: <BluetoothIcon fontSize="large" />, importPath: "@mui/icons-material/Bluetooth" },
  { name: 'Bookmark', component: <BookmarkIcon fontSize="large" />, importPath: "@mui/icons-material/Bookmark" },
  { name: 'BookmarkAdd', component: <BookmarkAddIcon fontSize="large" />, importPath: "@mui/icons-material/BookmarkAdd" },
  { name: 'BookmarkAdded', component: <BookmarkAddedIcon fontSize="large" />, importPath: "@mui/icons-material/BookmarkAdded" },
  { name: 'BookmarkBorder', component: <BookmarkBorderIcon fontSize="large" />, importPath: "@mui/icons-material/BookmarkBorder" },
  { name: 'BookmarkRemove', component: <BookmarkRemoveIcon fontSize="large" />, importPath: "@mui/icons-material/BookmarkRemove" },
  { name: 'Call', component: <CallIcon fontSize="large" />, importPath: "@mui/icons-material/Call" },
  { name: 'Cast', component: <CastIcon fontSize="large" />, importPath: "@mui/icons-material/Cast" },
  { name: 'Chat', component: <ChatIcon fontSize="large" />, importPath: "@mui/icons-material/Chat" },
  { name: 'CheckBox', component: <CheckBoxIcon fontSize="large" />, importPath: "@mui/icons-material/CheckBox" },
  { name: 'CheckCircle', component: <CheckCircleIcon fontSize="large" />, importPath: "@mui/icons-material/CheckCircle" },
  { name: 'CircleNotifications', component: <CircleNotificationsIcon fontSize="large" />, importPath: "@mui/icons-material/CircleNotifications" },
  { name: 'CloudUpload', component: <CloudUploadIcon fontSize="large" />, importPath: "@mui/icons-material/CloudUpload" },
  { name: 'Collections', component: <CollectionsIcon fontSize="large" />, importPath: "@mui/icons-material/Collections" },
  { name: 'ContentCopy', component: <ContentCopyIcon fontSize="large" />, importPath: "@mui/icons-material/ContentCopy" },
  { name: 'ContentCut', component: <ContentCutIcon fontSize="large" />, importPath: "@mui/icons-material/ContentCut" },
  { name: 'ContentPaste', component: <ContentPasteIcon fontSize="large" />, importPath: "@mui/icons-material/ContentPaste" },
  { name: 'Copyright', component: <CopyrightIcon fontSize="large" />, importPath: "@mui/icons-material/Copyright" },
  { name: 'Create', component: <CreateIcon fontSize="large" />, importPath: "@mui/icons-material/Create" },
  { name: 'CreateNewFolder', component: <CreateNewFolderIcon fontSize="large" />, importPath: "@mui/icons-material/CreateNewFolder" },
  { name: 'Crop', component: <CropIcon fontSize="large" />, importPath: "@mui/icons-material/Crop" },
  { name: 'Delete', component: <DeleteIcon fontSize="large" />, importPath: "@mui/icons-material/Delete" },
  { name: 'DoDisturb', component: <DoDisturbIcon fontSize="large" />, importPath: "@mui/icons-material/DoDisturb" },
  { name: 'Download', component: <DownloadIcon fontSize="large" />, importPath: "@mui/icons-material/Download" },
  { name: 'Error', component: <ErrorIcon fontSize="large" />, importPath: "@mui/icons-material/Error" },
  { name: 'Event', component: <EventIcon fontSize="large" />, importPath: "@mui/icons-material/Event" },
  { name: 'Favorite', component: <FavoriteIcon fontSize="large" />, importPath: "@mui/icons-material/Favorite" },
  { name: 'FavoriteBorder', component: <FavoriteBorderIcon fontSize="large" />, importPath: "@mui/icons-material/FavoriteBorder" },
  { name: 'FilterAlt', component: <FilterAltIcon fontSize="large" />, importPath: "@mui/icons-material/FilterAlt" },
  { name: 'GetApp', component: <GetAppIcon fontSize="large" />, importPath: "@mui/icons-material/GetApp" },
  { name: 'InsertLink', component: <InsertLinkIcon fontSize="large" />, importPath: "@mui/icons-material/InsertLink" },
  { name: 'Repeat', component: <RepeatIcon fontSize="large" />, importPath: "@mui/icons-material/Repeat" },
  { name: 'Reply', component: <ReplyIcon fontSize="large" />, importPath: "@mui/icons-material/Reply" },
];


export default function IconView() {
    const [open, setOpen] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800); // mô phỏng tải dữ liệu
        return () => clearTimeout(timer);
    }, []);

    const handleOpen = (icon) => {
      setSelectedIcon(icon);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      setSelectedIcon(null);
    };

    if (loading) {
        return (
        <Box p={4} textAlign="center">
            <Typography variant="h6" gutterBottom>Đang tải các icon...</Typography>
            <CircularProgress color="primary" />
        </Box>
        );
    }

    return (
      <Box p={4}>
          <Typography variant="h4" gutterBottom>
            List of Icons
          </Typography>
          <Typography variant="body1" gutterBottom>
            Click on an icon to see its import statement and usage. To change the color of the icon, there are two ways:
            <List>
              <ListItem>Use the predefined color options supported by MUI in prop: <SyntaxHighlighter language="jsx" customStyle={{ padding: "2px", marginLeft: "2px"}}>
              {'<Icon color="primary" />'}
            </SyntaxHighlighter></ListItem>
              <ListItem>Use sx for a specific color: <SyntaxHighlighter language="jsx" customStyle={{ padding: "2px", marginLeft: "2px"}}>
              {'<Icon sx={{color:"#f50057"}} />'}
            </SyntaxHighlighter>
              </ListItem>
            </List>
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
