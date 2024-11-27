import React, { useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";

// Giả lập dữ liệu game
export const getGames = async () => {
  return [
    {
      id: 1,
      image:
        "https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-ue-en@2x-cd66fd0d.jpg",
    },
    {
      id: 2,
      image:
        "https://herogame.vn/ad-min/assets/js/libs/kcfinder/upload/images/Herogame_TW3WHCPEDI_01.jpg",
    },
    {
      id: 3,
      image:
        "https://tamhongame.net/storage/games/minecraft-bedrock-v12121/minecraft-bedrock-v12121-horizontal_photo-zBf2yeECPOATHp9aD4qw.jpeg",
    },
    {
      id: 4,
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/fortnite-keyart-01-en-30nov23?$facebook$",
    },
    {
      id: 5,
      image:
        "https://24hcomputer.vn/img/n/top-pc-choi-game-lol-moi-nhat-thang-12-2022.jpg",
    },
    {
      id: 6,
      image:
        "https://www.phucanh.vn/media/news/0508_valorant-tren-playstation-1.jpg",
    },
    { id: 7, image: "https://i.ytimg.com/vi/BdMP7OZG1DE/maxresdefault.jpg" },
    {
      id: 8,
      image:
        "https://images2.thanhnien.vn/528068263637045248/2023/6/28/among-us-16879157558491830914451.jpg",
    },
    {
      id: 9,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202402/0817/a67ff2a1e39e8c7feca19876ffd27e75c9097a0153f84614.png",
    },
    {
      id: 10,
      image:
        "https://toquoc.mediacdn.vn/280518851207290880/2022/6/27/photo-1-16563188828711113703296-1656320085202-1656320085273505898442.jpg",
    },
    {
      id: 11,
      image:
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/ffbb3e6e82ceb4b3fa219d2e207c98b566a0a33e/capsule_616x353.jpg?t=1730895196",
    },
    {
      id: 12,
      image:
        "https://shoptrongnghia.com/wp-content/uploads/2020/11/Asassin-Valhalla-1.jpg",
    },
  ];
};

const HeroSection = () => {
  const [games, setGames] = useState([]);
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const fetchGames = async () => {
      const gamesData = await getGames();
      setGames(gamesData);
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % games.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [games.length]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${games[currentBackground]?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
        transition: "background-image 1s ease-in-out",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* Tiêu đề */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          letterSpacing: "2px",
          fontSize: "3rem",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        Tải game những gì bạn muốn
      </Typography>

      {/* Mô tả */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "500",
          fontSize: "1.5rem",
          marginBottom: "30px",
          maxWidth: "80%",
          textAlign: "center",
        }}
      >
        Khám phá những trò chơi thú vị và tải về ngay hôm nay.
      </Typography>

      {/* Nút Explore Games */}
      <Button
        variant="contained"
        size="large"
        sx={{
          background: "linear-gradient(90deg, #FF6F00, #FF8E53)",
          color: "#fff",
          padding: "12px 30px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          borderRadius: "50px",
          textTransform: "none",
          "&:hover": {
            background: "linear-gradient(90deg, #FF8E53, #FF6F00)",
          },
        }}
      >
        Khám Phá Trò Chơi
      </Button>
    </Box>
  );
};

export default HeroSection;
