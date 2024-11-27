import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

const GameCard = ({ game }) => (
  <Card
    sx={{
      margin: "20px auto",
      maxWidth: 340,
      borderRadius: "15px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      },
    }}
  >
    {/* Hình ảnh trò chơi */}
    <CardMedia
      component="img"
      height="200"
      image={game.image}
      alt={game.title}
      sx={{
        borderRadius: "15px 15px 0 0",
        filter: "brightness(0.95)",
        transition: "filter 0.3s ease",
        "&:hover": { filter: "brightness(1)" },
      }}
    />

    {/* Nội dung thông tin trò chơi */}
    <CardContent
      sx={{
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(180deg, #f9f9f9, #ffffff)",
      }}
    >
      {/* Tiêu đề trò chơi */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        {game.title}
      </Typography>

      {/* Mô tả trò chơi */}
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          fontSize: "0.9rem",
          marginBottom: "20px",
          height: "50px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {game.description || "Không có mô tả cho trò chơi này."}
      </Typography>

      {/* Nút tải xuống */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          sx={{
            background: "linear-gradient(90deg, #2196F3, #21CBF3)",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            padding: "8px 20px",
            borderRadius: "25px",
            "&:hover": {
              background: "linear-gradient(90deg, #1976D2, #1E88E5)",
            },
          }}
          onClick={() => window.open(game.downloadUrl, "_blank")}
        >
          Tải xuống
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default GameCard;
