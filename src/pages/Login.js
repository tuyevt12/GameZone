import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const Login = ({ onLoginSuccess, users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      onLoginSuccess(user.email);
      localStorage.setItem("userEmail", user.email); // Lưu email người dùng vào localStorage
      navigate("/"); // Chuyển hướng về trang Home sau khi đăng nhập thành công
    } else {
      setError("Email hoặc mật khẩu không hợp lệ!");
    }
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
          boxShadow: 3,
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
            Đăng Nhập
          </Typography>
          <form onSubmit={handleLogin}>
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
              Đăng Nhập
            </Button>
          </form>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: 2, color: "#555" }}
          >
            Chưa có tài khoản?{" "}
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "#1976d2",
                fontWeight: "500",
              }}
            >
              Đăng ký
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
