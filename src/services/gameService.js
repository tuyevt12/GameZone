import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

// Your getGames function (simulated for demo purposes)
// gameService.js

// Hàm lấy danh sách các trò chơi
// gameService.js

// Hàm lấy danh sách các trò chơi
export const getGames = async () => {
  return [
    {
      id: 1,
      title: "Cyberpunk 2077",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg?t=1730212296",
      description:
        "Thể loại: Việt Hóa - Hành động, Phiêu lưu, Thế giới mở. Lối chơi bắn súng kết hợp nhập vai với góc nhìn thứ nhất, lấy bối cảnh tương lai đầy công nghệ.",
      genre: "RPG",
      downloadUrl: "https://example.com/cyberpunk2077",
    },
    {
      id: 2,
      title: "The Witcher 3: Wild Hunt",
      image:
        "https://didongviet.vn/dchannel/wp-content/uploads/2022/09/the-witcher-3-wild-hunt-cover.jpg",
      description:
        "Thể loại: Việt Hóa - Hành động, Phiêu lưu, Thế giới mở. Trải nghiệm chặt chém kịch tính và cốt truyện sâu sắc với góc nhìn thứ ba.",
      genre: "Action",
      downloadUrl: "https://example.com/thewitcher3",
    },
    {
      id: 3,
      title: "Minecraft",
      image:
        "https://cellphones.com.vn/sforum/wp-content/uploads/2023/02/minecraft-pe-1.jpg",
      description:
        "Thể loại: Phiêu lưu, Thế giới mở, Nhập vai. Khám phá, sáng tạo, và sinh tồn trong thế giới khối vuông đầy màu sắc với góc nhìn thứ nhất.",
      genre: "Sandbox",
      downloadUrl: "https://example.com/minecraft",
    },
    {
      id: 4,
      title: "Fortnite",
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/fortnite-keyart-01-en-30nov23?$facebook$",
      description:
        "Thể loại: Bắn súng, Nhập vai. Trải nghiệm sinh tồn căng thẳng trong chế độ battle royale với góc nhìn thứ nhất.",
      genre: "Action",
      downloadUrl: "https://example.com/fortnite",
    },
    {
      id: 5,
      title: "League of Legends",
      image:
        "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b",
      description:
        "Thể loại: MOBA. Một tựa game chiến thuật cạnh tranh nhanh với các vị tướng và kỹ năng độc đáo.",
      genre: "Adventure",
      downloadUrl: "https://example.com/leagueoflegends",
    },
    {
      id: 6,
      title: "Valorant",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c6c50b680c5e1846a9c77f86d5aa357d46584ffe-1920x1080.png",
      description:
        "Thể loại: FPS, Tactic. Game bắn súng chiến thuật với các đặc điểm như tựa game CS:GO kết hợp yếu tố đặc biệt từ các đặc vụ.",
      genre: "Shooter",
      downloadUrl: "https://example.com/valorant",
    },
    {
      id: 7,
      title: "Apex Legends",
      image:
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/ffbb3e6e82ceb4b3fa219d2e207c98b566a0a33e/capsule_616x353.jpg?t=1732533158",
      description:
        "Thể loại: Battle Royale. Trải nghiệm bắn súng sinh tồn, chiến đấu với các nhân vật độc đáo và kỹ năng đặc biệt.",
      genre: "Action",
      downloadUrl: "https://example.com/apexlegends",
    },
    {
      id: 8,
      title: "Call of Duty: Warzone",
      image:
        "https://i.ytimg.com/vi/TidXGyzxT8c/maxresdefault.jpg",
      description:
        "Thể loại: Battle Royale. Trải nghiệm chiến đấu sinh tồn trong một bản đồ rộng lớn, hỗ trợ cả chơi đơn và nhóm.",
      genre: "Shooter",
      downloadUrl: "https://example.com/codwarzone",
    },
    {
      id: 9,
      title: "Among Us",
      image:
        "https://viendidong.com/wp-content/uploads/2023/01/among-us-thumb-viendidong.jpg",
      description:
        "Thể loại: Multiplayer, Party Game. Trò chơi xã hội với một nhóm người chơi, nơi bạn cần tìm ra kẻ phản bội trong đội.",
      genre: "Party",
      downloadUrl: "https://example.com/amongus",
    },
    {
      id: 10,
      title: "PUBG: Battlegrounds",
      image:
        "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1e9a7.jpg",
      description:
        "Thể loại: Battle Royale. Tựa game sinh tồn, nơi bạn và những người chơi khác chiến đấu đến cuối cùng để trở thành người sống sót duy nhất.",
      genre: "Shooter",
      downloadUrl: "https://example.com/pubg",
    },
    {
      id: 11,
      title: "Genshin Impact",
      image:
        "https://i.ytimg.com/vi/BdMP7OZG1DE/maxresdefault.jpg",
      description:
        "Thể loại: RPG, Action. Trò chơi nhập vai thế giới mở với đồ họa tuyệt đẹp và cơ chế chiến đấu độc đáo.",
      genre: "RPG",
      downloadUrl: "https://example.com/genshinimpact",
    },
    {
      id: 12,
      title: "Red Dead Redemption 2",
      image:
        "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/11/red-dead-redemption-2-1.jpg",
      description:
        "Thể loại: Hành động, Phiêu lưu. Khám phá thế giới miền Tây hoang dã trong tựa game nhập vai đầy kịch tính và chân thực.",
      genre: "Action",
      downloadUrl: "https://example.com/reddeadredemption2",
    },
    {
      id: 13,
      title: "Minecraft Dungeons",
      image:
        "https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/LuminousNight.jpeg",
      description:
        "Thể loại: Hành động, Phiêu lưu. Khám phá hầm ngục trong thế giới Minecraft với lối chơi hành động nhịp độ nhanh.",
      genre: "Action",
      downloadUrl: "https://example.com/minecraftdungeons",
    },
    {
      id: 14,
      title: "Destiny 2",
      image:
        "https://i.ytimg.com/vi/UchfadQhX7w/maxresdefault.jpg",
      description:
        "Thể loại: MMOFPS. Game bắn súng trực tuyến với các yếu tố nhập vai, nơi bạn vào vai một Guardian chiến đấu chống lại các thế lực ngoài vũ trụ.",
      genre: "Shooter",
      downloadUrl: "https://example.com/destiny2",
    },
    {
      id: 15,
      title: "Hades",
      image:
        "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/10/hades-game.jpg",
      description:
        "Thể loại: Roguelike, Hành động. Trải nghiệm trò chơi nhập vai hành động với câu chuyện lấy cảm hứng từ thần thoại Hy Lạp.",
      genre: "Action",
      downloadUrl: "https://example.com/hades",
    },
    {
      id: 16,
      title: "Assassin's Creed Valhalla",
      image:
        "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg",
      description:
        "Thể loại: Hành động, Phiêu lưu. Trải nghiệm cuộc sống Viking và chiến đấu trong các trận chiến lịch sử.",
      genre: "Action",
      downloadUrl: "https://example.com/assassinscreedvalhalla",
    },
    {
      id: 17,
      title: "Battlefield 2042",
      image:
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_23_638415976878413858_battlefield-2042.jpg",
      description:
        "Thể loại: FPS, chiến tranh. Trải nghiệm các trận chiến quân sự hoành tráng với công nghệ hiện đại.",
      genre: "Shooter",
      downloadUrl: "https://example.com/battlefield2042",
    },
    {
      id: 18,
      title: "Fall Guys: Ultimate Knockout",
      image:
        "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/fall-guys-ultimate-knockout-1-1.jpg",
      description:
        "Thể loại: Party Game. Trò chơi nhiều người với những vòng thi đấu vui nhộn, nơi bạn phải vượt qua các thử thách để trở thành người chiến thắng.",
      genre: "Party",
      downloadUrl: "https://example.com/fallguys",
    },
  ];
};


// Hàm lấy thông tin chi tiết game theo ID
export const getGameById = async (id) => {
  const games = await getGames(); // Lấy tất cả game
  return games.find(game => game.id === parseInt(id)); // Tìm game theo ID
};

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const gameData = await getGames();
      setGames(gameData);
    };
    fetchGames();
  }, []);

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Featured Games
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {games.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 3,
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <CardMedia
                component="img"
                alt={game.title}
                height="200"
                image={game.image}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {game.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginBottom: 2 }}
                >
                  {game.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    fontSize: "0.9rem",
                    "&:hover": {
                      backgroundColor: "#1976d2",
                    },
                  }}
                >
                  Play Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GameList;
