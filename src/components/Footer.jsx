import {
    Email,
    Facebook,
    LinkedIn,
    LocationOn,
    Phone,
    Twitter,
    YouTube,
} from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import VGU_Logo_Short from "../assets/LOGO/VGU logo trắng.png";

const Footer = () => {
    return (
        // Bọc toàn bộ nội dung Footer bằng Box để màu nền tràn full width
        <Box sx={{ width: "100%", backgroundColor: "#0A1931", color: "white", py: 5 }}>
            {/* Container giúp nội dung giữ cố định không bị kéo giãn trên màn hình lớn */}
            <Container maxWidth="lg">
                {/* Nội dung Footer */}
                <Grid container spacing={4}>
                    {/* Logo */}
                    <Grid item xs={12} md={4}>
                        <img src={VGU_Logo_Short} alt="VGU Logo" style={{ height: "200px" }} />
                    </Grid>
                    {/* Quick Links */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Typography variant="body2">Programs</Typography>
                        <Typography variant="body2">Admissions</Typography>
                        <Typography variant="body2">Research</Typography>
                        <Typography variant="body2">Student Life</Typography>
                        <Typography variant="body2">News & Events</Typography>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                            Contact Info
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <LocationOn sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                Ring road 4, Quarter 4, Thoi Hoa Ward, Ben Cat City, Binh Duong
                                Province
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography variant="body2">+84 274 222 0990</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Email sx={{ mr: 1 }} />
                            <Typography variant="body2">info@vgu.edu.vn</Typography>
                        </Box>
                        {/* Social Icons */}
                        <Box sx={{ mt: 2 }}>
                            <IconButton sx={{ color: "white" }}>
                                <Facebook />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <Twitter />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <LinkedIn />
                            </IconButton>
                            <IconButton sx={{ color: "white" }}>
                                <YouTube />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Chính sách */}
                <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid gray", pt: 3 }}>
                    <Typography variant="body2">
                        © 2025 Vietnamese-German University. All rights reserved.
                    </Typography>
                    <Typography variant="body2">
                        <span style={{ marginRight: 10 }}>Privacy Policy</span> |{" "}
                        <span style={{ marginLeft: 10, marginRight: 10 }}>Terms of Service</span> |{" "}
                        <span style={{ marginLeft: 10 }}>Cookie Policy</span>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
