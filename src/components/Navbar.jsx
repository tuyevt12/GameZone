import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by looking for userEmail in localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail); // If found, set userEmail state
    }
  }, []);

  const handleLogout = () => {
    // Remove userEmail from localStorage and reset state on logout
    localStorage.removeItem("userEmail");
    setUserEmail("");
    navigate("/login"); // Navigate to login page after logout
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #1CB5E0, #000046)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
            "&:hover": { color: "#FFD700", transition: "color 0.3s ease" },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            GameZone
          </Link>
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <Button
            sx={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "capitalize",
              margin: "0 10px",
              "&:hover": {
                color: "#FFD700",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Trang Chủ
            </Link>
          </Button>
          <Button
            sx={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "capitalize",
              margin: "0 10px",
              "&:hover": {
                color: "#FFD700",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Chăm sóc khách hàng
            </Link>
          </Button>

          {/* Display user email and logout button if user is logged in */}
          {userEmail ? (
            <>
              <Button
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  margin: "0 10px",
                  "&:hover": {
                    color: "#FFD700",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {userEmail} {/* Display the user's email */}
              </Button>
              <Button
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  margin: "0 10px",
                  border: "1px solid white",
                  borderRadius: "20px",
                  padding: "5px 15px",
                  "&:hover": {
                    color: "#000046",
                    background: "white",
                  },
                }}
                onClick={handleLogout} // Log out the user
              >
                Đăng Xuất
              </Button>
            </>
          ) : (
            // Show login button if not logged in
            <Button
              sx={{
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                margin: "0 10px",
                border: "1px solid white",
                borderRadius: "20px",
                padding: "5px 15px",
                "&:hover": {
                  color: "#000046",
                  background: "white",
                },
              }}
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Đăng Nhập
              </Link>
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
