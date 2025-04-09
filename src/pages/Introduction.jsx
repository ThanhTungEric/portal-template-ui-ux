import React from "react";
import { Box, Typography,  Chip, Stack, Grid, Card, CardMedia, CardContent, CardActions, Button, IconButton, Divider } from "@mui/material";
import LogoFull05 from "../assets/LOGO/VGU Full Color logo-05.png";
import LogoFull06 from "../assets/LOGO/VGU Full Color logo-06.png";
import LogoWhite from "../assets/LOGO/VGU logo trắng.png";
import LogoHorizontal from "../assets/LOGO/VGU Logo_horizontal-21.png";
import DownloadIcon from '@mui/icons-material/Download';

export default function Introduction() {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>

      <Divider textAlign="left" sx={{ mt: 4 }}>
        <Chip label="Mã màu & nhận diện" color="primary" />
      </Divider>

      <Typography variant="body2" mt={2}>
        Website này sử dụng hệ thống màu sắc dựa trên nhận diện thương hiệu của VGU:
      </Typography>

      {/* Hàng 1: Màu chính */}
      <Stack direction="row" spacing={2} mt={2}>
        <Box sx={{ width: 80, height: 40, bgcolor: "#F28130", borderRadius: 1 }} />
        <Box sx={{ width: 80, height: 40, bgcolor: "#666666", borderRadius: 1 }} />
        <Box sx={{ width: 80, height: 40, bgcolor: "#E2231A", borderRadius: 1 }} />
      </Stack>

      <Typography variant="caption" color="text.secondary" mt={1} display="block">
        Mã màu chính: <b>#F28130</b> (VGU ORANGE), <b>#666666</b> (VGU GREY), <b>#E2231A</b> (FLAG RED)
      </Typography>

      {/* Hàng 2: Màu nền tối */}
      <Stack direction="row" spacing={2} mt={3}>
        <Box sx={{ width: 80, height: 40, bgcolor: "#222222", borderRadius: 1 }} />
        <Box sx={{ width: 80, height: 40, bgcolor: "#1A1A1A", borderRadius: 1 }} />
        <Box sx={{ width: 80, height: 40, bgcolor: "#333333", borderRadius: 1 }} />
      </Stack>

      <Typography variant="caption" color="text.secondary" mt={1} display="block">
        Màu nền tối: <b>#222222</b>, <b>#1A1A1A</b>, <b>#333333</b> (thường dùng cho nền/section tối)
      </Typography>

      {/* Link tải file màu PDF */}
      <Typography variant="body2" mt={4}>
        Bạn có thể tải toàn bộ tài liệu hướng dẫn màu sắc tại đây:
      </Typography>

      <Button
        variant="outlined"
        href="/VGU_Color_Guideline.pdf"
        download
        sx={{ mt: 1 }}
      >
        📄 Tải PDF Hướng dẫn màu sắc
      </Button>

      <Divider textAlign="left" sx={{ mt: 4 }}>
        <Chip label="Logo VGU" color="primary" />
      </Divider>
      <Grid container spacing={2} mt={2}>
        {/* Card 1: Logo Full 05 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined" sx={{ textAlign: 'center', p: 2 }}>
            <CardMedia component="img" image={LogoFull05} alt="Logo 05" sx={{ height: 90, objectFit: 'contain' }} />
            <CardActions sx={{ justifyContent: 'center' }}>
              <IconButton
                component="a"
                href={LogoFull05}
                download="VGU Full Color logo-05.png"
                color="primary"
              >
                <DownloadIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 2: Logo Full 06 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined" sx={{ textAlign: 'center', p: 2 }}>
            <CardMedia component="img" image={LogoFull06} alt="Logo 06" sx={{ height: 60, objectFit: 'contain' }} />
            <CardContent sx={{ p: 1 }}>
              <Typography variant="body2">VGU Full Color 06</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <IconButton
                component="a"
                href={LogoFull06}
                download="VGU Full Color logo-06.png"
                color="primary"
              >
                <DownloadIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 3: Logo trắng */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined" sx={{ textAlign: 'center', p: 2, bgcolor: '#222' }}>
            <CardMedia component="img" image={LogoWhite} alt="Logo trắng" sx={{ height: 90, objectFit: 'contain' }} />
            <CardActions sx={{ justifyContent: 'center' }}>
              <IconButton
                component="a"
                href={LogoWhite}
                download="VGU logo trắng.png"
                color="primary"
              >
                <DownloadIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 4: Logo ngang */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined" sx={{ textAlign: 'center', p: 2, bgcolor: '#222' }}>
            <CardMedia component="img" image={LogoHorizontal} alt="Logo ngang" sx={{ height: 90, objectFit: 'contain' }} />
            <CardActions sx={{ justifyContent: 'center' }}>
              <IconButton
                component="a"
                href={LogoHorizontal}
                download="VGU Logo_horizontal-21.png"
                color="primary"
              >
                <DownloadIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Box>
  );
}
