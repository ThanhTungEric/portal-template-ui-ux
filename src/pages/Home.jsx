import { Typography, Box, Divider, Chip } from '@mui/material';
import VGUFullLogo from "../assets/LOGO/VGU Full Color logo-06.png";

export default function Home() {
  return (
    <Box p={2}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <img src={VGUFullLogo} alt="VGU Logo" style={{ height: 80 }} />
        <GermanColorBarSVG />
        <Typography variant="h5" fontWeight="bold" mt={2}>
          Welcome to the Component Library Showcase
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Dự án nội bộ - Thư viện các component UI tái sử dụng v3
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
const GermanColorBarSVG = () => {
  const height = 8;
  const slant = 8;
  const width = 660;

  const preShapes = [
    {
      color: '#FF0000', // Đỏ đầu
      x0: 0,
      width: 120,
      leftSlant: false,
      rightSlant: true,
    },
    {
      color: '#FFD700', // Vàng
      x0: 120,
      width: 60,
      leftSlant: true,
      rightSlant: true,
    },
    {
      color: '#FF0000', // Đỏ
      x0: 180,
      width: 120,
      leftSlant: true,
      rightSlant: true,
    },
  ];

  // 2. Giữa: Đen / Đỏ /
  const middleShapes = [
    {
      color: '#000000', // Đen
      x0: 300,
      width: 120,
      leftSlant: true,
      rightSlant: true,
    },
    {
      color: '#FF0000', // Đỏ
      x0: 420,
      width: 120,
      leftSlant: true,
      rightSlant: true,
    },
  ];

  // 3. Cuối: Vàng kết thúc
  const postShapes = [
    {
      color: '#FFD700', // Vàng
      x0: 540,
      width: 120,
      leftSlant: true,
      rightSlant: false,
    },
  ];

  const allShapes = [...preShapes, ...middleShapes, ...postShapes];

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      {/* Nền đỏ toàn bộ phía sau */}
      <rect x="0" y="0" width={width} height={height} fill="#FF0000" />

      {allShapes.map((shape, index) => {
        const { color, x0, width, leftSlant, rightSlant } = shape;
        const x1 = x0 + width;

        const topLeft = leftSlant ? x0 + slant : x0;
        const topRight = rightSlant ? x1 - slant : x1;
        const bottomLeft = leftSlant ? x0 : x0;
        const bottomRight = rightSlant ? x1 : x1;

        return (
          <polygon
            key={index}
            points={`${topLeft},0 ${topRight},0 ${bottomRight},${height} ${bottomLeft},${height}`}
            fill={color}
          />
        );
      })}
    </svg>
  );
};
