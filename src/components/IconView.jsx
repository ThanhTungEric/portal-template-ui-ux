import React, { useState } from 'react';
import { Modal, Box, Grid, IconButton } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Ví dụ import icon, sau này bạn thay bằng danh sách thật
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const icons = [
  { name: 'AccessAlarm', component: <AccessAlarmIcon fontSize="large" />, importPath: "@mui/icons-material/AccessAlarm" },
  { name: 'AccountCircle', component: <AccountCircleIcon fontSize="large" />, importPath: "@mui/icons-material/AccountCircle" },
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
