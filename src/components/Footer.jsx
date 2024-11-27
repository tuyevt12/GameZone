import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => (
  <Box
    sx={{
      background: "linear-gradient(90deg, #3E4EAE, #6A82FB)",
      color: "#fff",
      textAlign: "center",
      padding: "40px 20px",
      boxShadow: "0 -5px 20px rgba(0, 0, 0, 0.1)",
    }}
  >
    {/* Logo và tên thương hiệu */}
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
        letterSpacing: "2px",
        marginBottom: "10px",
        color: "#FFD700",
        textTransform: "uppercase",
      }}
    >
      GameZone
    </Typography>

    {/* Mô tả ngắn */}
    <Typography
      variant="body1"
      sx={{
        fontSize: "1rem",
        maxWidth: "600px",
        margin: "10px auto",
        color: "#f3f3f3",
      }}
    >
      Nơi chia sẻ niềm vui và kết nối cộng đồng game thủ. Chúng tôi mang đến
      những trải nghiệm giải trí độc đáo với kho trò chơi phong phú.
    </Typography>

    {/* Đường dẫn mạng xã hội */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        gap: "15px",
      }}
    >
      <IconButton
        href="#"
        target="_blank"
        sx={{
          color: "#fff",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          "&:hover": { backgroundColor: "#FFD700", color: "#3E4EAE" },
        }}
      >
        <Facebook />
      </IconButton>
      <IconButton
        href="#"
        target="_blank"
        sx={{
          color: "#fff",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          "&:hover": { backgroundColor: "#FFD700", color: "#3E4EAE" },
        }}
      >
        <Twitter />
      </IconButton>
      <IconButton
        href="#"
        target="_blank"
        sx={{
          color: "#fff",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          "&:hover": { backgroundColor: "#FFD700", color: "#3E4EAE" },
        }}
      >
        <Instagram />
      </IconButton>
      <IconButton
        href="#"
        target="_blank"
        sx={{
          color: "#fff",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          "&:hover": { backgroundColor: "#FFD700", color: "#3E4EAE" },
        }}
      >
        <YouTube />
      </IconButton>
    </Box>

    {/* Copyright */}
    <Typography
      variant="body2"
      sx={{
        marginTop: "30px",
        fontSize: "0.9rem",
        color: "#ccc",
      }}
    >
      © {new Date().getFullYear()} GameZone. Mọi quyền được bảo lưu.
    </Typography>
  </Box>
);

export default Footer;
