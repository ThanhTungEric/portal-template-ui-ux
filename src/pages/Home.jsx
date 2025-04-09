import { Typography, Box, Divider, Chip } from '@mui/material';
import VGUFullLogo from "../assets/LOGO/VGU Full Color logo-06.png";

export default function Home() {
  return (
    <Box p={2}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <img src={VGUFullLogo} alt="VGU Logo" style={{ height: 80 }} />
        <Typography variant="h5" fontWeight="bold" mt={2}>
          Welcome to the Component Library Showcase
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Dự án nội bộ - Thư viện các component UI tái sử dụng
        </Typography>
        <Typography variant="caption" color="error" display="block" mt={1}>
          ⚠️ Lưu ý: Hệ thống này chỉ áp dụng cho dự án sử dụng ReactJS.
        </Typography>
      </Box>

      <Divider textAlign="left">
        <Chip label="Giới thiệu" color="primary" />
      </Divider>

      <Typography variant="body1" mt={2}>
        Đây là hệ thống trình bày các thành phần giao diện người dùng (UI Component) thường dùng trong dự án phát triển website nội bộ của VGU.
        Mục tiêu là cung cấp một nơi tập trung để:
      </Typography>

      <ul style={{ marginTop: 8, paddingLeft: 20 }}>
        <li>✅ Dùng lại component có sẵn (login form, menu, button, tree view...)</li>
        <li>✅ Hiển thị demo trực tiếp</li>
        <li>✅ Copy code nhanh chóng</li>
      </ul>
    </Box>
  );
}
