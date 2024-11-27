import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import PaginationBar from "../components/PaginationBar";
import { getGames } from "../services/gameService";
import {
  Download as DownloadIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

const Home = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const gamesPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getGames();
      setGames(data);
      setFilteredGames(data);
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const searchResults = games.filter((game) => {
      return (
        game.title &&
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredGames(searchResults);
    setCurrentPage(1);
  }, [searchQuery, games]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setUserEmail(userEmail);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setCurrentPage(1);
    if (newValue === "All") {
      setFilteredGames(games);
    } else {
      const filtered = games.filter((game) => game.genre === newValue);
      setFilteredGames(filtered);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const currentGames = filteredGames.slice(
    startIndex,
    startIndex + gamesPerPage
  );

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail("");
    navigate("/login");
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Search Bar */}
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#FAF9F6",
          borderRadius: "40px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          margin: "20px 0",
        }}
      >
        <TextField
          placeholder="Tìm kiếm trò chơi yêu thích..."
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "50px",
            paddingLeft: "25px",
            "& .MuiOutlinedInput-root": {
              padding: "12px 25px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              color: "#444",
              fontSize: "1.1rem",
            },
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0 0 10px rgba(0,0,0,0.15)",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#FF5722" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Tabs */}
      <Box
        sx={{
          width: "100%",
          padding: "20px 0",
          background: "linear-gradient(to right, #8E2DE2, #4A00E0)",
          borderRadius: "30px",
          marginBottom: "40px",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="game categories"
          centered
          sx={{
            "& .MuiTab-root": {
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "1.1rem",
              color: "#fff",
              padding: "12px 24px",
              transition: "0.3s",
              "&:hover": {
                color: "#FFD700",
                transform: "scale(1.1)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              },
            },
            "& .Mui-selected": {
              color: "#FFD700",
              fontSize: "1.3rem",
              background: "rgba(255, 215, 0, 0.3)",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            },
          }}
        >
          <Tab label="All" value="All" />
          <Tab label="Action" value="Action" />
          <Tab label="RPG" value="RPG" />
          <Tab label="Sandbox" value="Sandbox" />
          <Tab label="Adventure" value="Adventure" />
          <Tab label="Shooter" value="Shooter" />
        </Tabs>
      </Box>

      {/* Game Cards */}
      <Grid
        container
        spacing={4}
        sx={{
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {currentGames.map((game) => (
          <Grid
            item
            key={game.id}
            xs={12} // Full width on small screens
            sm={6} // Two items per row on small screens
            md={4} // Three items per row on medium and larger screens
          >
            <Card
              sx={{
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                borderRadius: "20px",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={game.image}
                alt={game.title}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {game.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    margin: "10px 0",
                    color: "#777",
                    lineHeight: 1.6,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {game.description}
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate(`/game/${game.id}`)}
                    sx={{
                      marginTop: "10px",
                      background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                      "&:hover": { background: "#ff5722" },
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Xem chi tiết
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => window.open(game.downloadUrl, "_blank")}
                    sx={{
                      marginTop: "10px",
                      background: "linear-gradient(to right, #6a11cb, #2575fc)",
                      "&:hover": { background: "#4a91f2" },
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Tải xuống
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <PaginationBar
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
