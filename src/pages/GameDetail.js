// GameDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { getGameById } from "../services/gameService"; // Import hàm lấy game theo ID

const GameDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null); // Trạng thái lỗi
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const data = await getGameById(id); // Gọi API để lấy thông tin game
        if (data) {
          setGame(data);
        } else {
          setError("Không tìm thấy trò chơi. Vui lòng thử lại."); // Xử lý lỗi nếu không tìm thấy game
        }
      } catch (err) {
        setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
      }
    };
    fetchGame();
  }, [id]);

  // Nếu có lỗi
  if (error) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h4" color="error">
          {error}
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            background: "#ff5722",
            "&:hover": { background: "#d84315" },
          }}
          onClick={() => navigate(-1)} // Quay lại trang trước
        >
          Quay lại
        </Button>
      </Box>
    );
  }

  // Nếu game chưa được tải
  if (!game) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h4">Đang tải...</Typography>
      </Box>
    );
  }

  // Nếu game đã có thông tin
  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
        {game.title}
      </Typography>
      <Box
        component="img"
        src={game.image}
        alt={game.title}
        sx={{
          width: "100%",
          height: "auto",
          margin: "20px 0",
          borderRadius: "10px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        }}
      />
      <Typography
        variant="body1"
        sx={{ lineHeight: 1.8, marginBottom: "20px" }}
      >
        {game.description || "Không có mô tả cho trò chơi này."}
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #ff7e5f, #feb47b)",
          "&:hover": { background: "#ff5722" },
          color: "#fff",
          fontWeight: "bold",
          marginRight: "10px",
        }}
        onClick={() => navigate(-1)} // Quay lại trang trước
      >
        Quay lại
      </Button>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          "&:hover": { background: "#4a91f2" },
          color: "#fff",
          fontWeight: "bold",
        }}
        onClick={() => window.open(game.downloadUrl, "_blank")} // Mở link tải
      >
        Tải xuống
      </Button>
    </Box>
  );
};

export default GameDetail;
