import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const DownloadPage = ({ games }) => {
  const { gameId } = useParams();
  const game = games.find((g) => g.id.toString() === gameId); // Tìm game theo ID

  if (!game) {
    return (
      <Box textAlign="center" p={4}>
        <Typography variant="h4" color="error">
          Game not found!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      style={{
        background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      <Typography variant="h3" gutterBottom>
        {game.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {game.description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => window.open(game.downloadUrl, "_blank")}
        sx={{
          background: "linear-gradient(to right, #FF512F, #F09819)",
          fontWeight: "bold",
          "&:hover": {
            background: "#FF5722",
          },
        }}
      >
        Tải ngay
      </Button>
    </Box>
  );
};

export default DownloadPage;
