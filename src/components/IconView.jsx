import React, { useState } from 'react';
import { Modal, Box, Grid, IconButton } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Ví dụ import icon, sau này bạn thay bằng danh sách thật
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddIcon from '@mui/icons-material/Add';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BackspaceIcon from '@mui/icons-material/Backspace';
import BackupIcon from '@mui/icons-material/Backup';
import BlockIcon from '@mui/icons-material/Block';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
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
import CropIcon from '@mui/icons-material/Crop';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CreateIcon from '@mui/icons-material/Create';
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
  { name: 'AccountCircle', component: <AccountCircleIcon fontSize="large" />, importPath: "@mui/icons-material/AccountCircle" },
  { name: 'AccessTimeFilled', component: <AccessTimeFilledIcon fontSize="large" />, importPath: "@mui/icons-material/AccessTimeFilled" },
  { name: 'Add', component: <AddIcon fontSize="large" />, importPath: "@mui/icons-material/Add" },
  { name: 'AddLink', component: <AddLinkIcon fontSize="large" />, importPath: "@mui/icons-material/AddLink" },
  { name: 'AddToPhotos', component: <AddToPhotosIcon fontSize="large" />, importPath: "@mui/icons-material/AddToPhotos" },
  { name: 'Apps', component: <AppsIcon fontSize="large" />, importPath: "@mui/icons-material/Apps" },
  { name: 'Announcement', component: <AnnouncementIcon fontSize="large" />, importPath: "@mui/icons-material/Announcement" },
  { name: 'ArrowCircleDown', component: <ArrowCircleDownIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowCircleDown" },
  { name: 'ArrowCircleLeft', component: <ArrowCircleLeftIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowCircleLeft" },
  { name: 'ArrowCircleRight', component: <ArrowCircleRightIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowCircleRight" },
  { name: 'ArrowCircleUp', component: <ArrowCircleUpIcon fontSize="large" />, importPath: "@mui/icons-material/ArrowCircleUp" },
  { name: 'Attachment', component: <AttachmentIcon fontSize="large" />, importPath: "@mui/icons-material/Attachment" },
  { name: 'AudioFile', component: <AudioFileIcon fontSize="large" />, importPath: "@mui/icons-material/AudioFile" },
  { name: 'Autorenew', component: <AutorenewIcon fontSize="large" />, importPath: "@mui/icons-material/Autorenew" },
  { name: 'Backspace', component: <BackspaceIcon fontSize="large" />, importPath: "@mui/icons-material/Backspace" },
  { name: 'Backup', component: <BackupIcon fontSize="large" />, importPath: "@mui/icons-material/Backup" },
  { name: 'Block', component: <BlockIcon fontSize="large" />, importPath: "@mui/icons-material/Block" },
  { name: 'Bluetooth', component: <BluetoothIcon fontSize="large" />, importPath: "@mui/icons-material/Bluetooth" },
  { name: 'Bookmark', component: <BookmarkIcon fontSize="large" />, importPath: "@mui/icons-material/Bookmark" },
  { name: 'BookmarkBorder', component: <BookmarkBorderIcon fontSize="large" />, importPath: "@mui/icons-material/BookmarkBorder" },
  { name: 'BookmarkAdd', component: <BookmarkAddIcon fontSize="large" />, importPath: "@mui/icons-material/BookmarkAdd" },
  { name: 'BookmarkAdded', component: <BookmarkAddedIcon fontSize="large" />, importPath: "@mui/icons-material/BookmarkAdded" },
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
  { name: 'Crop', component: <CropIcon fontSize="large" />, importPath: "@mui/icons-material/Crop" },
  { name: 'CreateNewFolder', component: <CreateNewFolderIcon fontSize="large" />, importPath: "@mui/icons-material/CreateNewFolder" },
  { name: 'Create', component: <CreateIcon fontSize="large" />, importPath: "@mui/icons-material/Create" },
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
  // { name: '', component: <Icon fontSize="large" />, importPath: "@mui/icons-material/" },
  // ← Thêm icon khác tại đây
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
      <Grid container spacing={2}>
        {icons.map((icon, index) => (
          <Grid item xs={3} sm={2} md={1} key={index}>
            <IconButton onClick={() => handleOpen(icon)}>
              {icon.component}
            </IconButton>
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
