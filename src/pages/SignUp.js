import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const newUser = { email, password };
    onSignUp(newUser);
    navigate("/login"); // Chuyển tới trang Login sau khi đăng ký thành công
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          padding: 4,
          boxShadow: 5,
          borderRadius: "16px",
          backgroundColor: "#fff",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              marginBottom: 2,
              fontWeight: "bold",
              color: "#333",
              letterSpacing: "0.5px",
            }}
          >
            Đăng ký
          </Typography>
          <form onSubmit={handleSignUp}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "1rem",
                },
                "& .MuiInputBase-root": {
                  fontSize: "1rem",
                },
              }}
            />
            <TextField
              label="Mật khẩu"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              label="Xác nhận mật khẩu"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: 2,
                borderRadius: "8px",
                background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                "&:hover": {
                  background: "linear-gradient(45deg, #FF8E53, #FF6F00)",
                },
              }}
            >
              Đăng ký
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
