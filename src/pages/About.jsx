import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import {
  AccountCircle,
  SupportAgent,
  Favorite,
  MailOutline,
} from "@mui/icons-material";

const About = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        padding: "70px 0",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Tiêu đề chính */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "30px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#FFD700",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          Về Chúng Tôi
        </Typography>

        {/* Phần giới thiệu */}
        <Typography
          variant="h6"
          sx={{
            marginBottom: "50px",
            fontSize: "1.2rem",
            color: "#e0e0e0",
            maxWidth: "850px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.8",
          }}
        >
          Tại **GameHub**, chúng tôi cam kết mang đến trải nghiệm giải trí tuyệt
          vời với thư viện trò chơi đa dạng. Sứ mệnh của chúng tôi là kết nối
          mọi người thông qua niềm đam mê game.
        </Typography>

        {/* Grid nội dung */}
        <Grid container spacing={5} justifyContent="center">
          {/* Card: Sứ Mệnh */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={10}
              sx={{
                borderRadius: "20px",
                padding: "40px",
                backgroundColor: "#fff",
                color: "#333",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 15px 50px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <AccountCircle sx={{ fontSize: "80px", color: "#FF5722" }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                Sứ Mệnh
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#666", marginBottom: "20px" }}
              >
                Mang đến cơ hội trải nghiệm game miễn phí và chất lượng cho tất
                cả người chơi, dù là casual hay chuyên nghiệp.
              </Typography>
              <Favorite sx={{ color: "#FF5722" }} />
            </Paper>
          </Grid>

          {/* Card: Liên Hệ */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={10}
              sx={{
                borderRadius: "20px",
                padding: "40px",
                backgroundColor: "#fff",
                color: "#333",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 15px 50px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <SupportAgent sx={{ fontSize: "80px", color: "#FF5722" }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                Hỗ Trợ
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#666", marginBottom: "20px" }}
              >
                Nếu bạn gặp bất kỳ vấn đề nào hoặc cần sự hỗ trợ, đội ngũ của
                chúng tôi luôn sẵn sàng giúp đỡ!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundImage: "linear-gradient(90deg, #FF5722, #FFC107)",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundImage: "linear-gradient(90deg, #FFC107, #FF5722)",
                  },
                }}
              >
                Liên Hệ Hỗ Trợ
              </Button>
            </Paper>
          </Grid>

          {/* Card: Đăng Ký */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={10}
              sx={{
                borderRadius: "20px",
                padding: "40px",
                backgroundColor: "#fff",
                color: "#333",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 15px 50px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <MailOutline sx={{ fontSize: "80px", color: "#FF5722" }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                Đăng Ký
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#666", marginBottom: "20px" }}
              >
                Đăng ký nhận thông báo để không bỏ lỡ những tựa game mới và ưu
                đãi đặc biệt!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundImage: "linear-gradient(90deg, #1f4037, #99f2c8)",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundImage: "linear-gradient(90deg, #99f2c8, #1f4037)",
                  },
                }}
              >
                Đăng Ký Ngay
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box
          sx={{
            marginTop: "60px",
            padding: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#e0e0e0",
          }}
        >
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            © 2024 GameHub. Mọi quyền được bảo lưu.
          </Typography>
          <Box>
            <IconButton sx={{ color: "#FFD700", margin: "0 10px" }}>
              <MailOutline />
            </IconButton>
            <IconButton sx={{ color: "#FFD700", margin: "0 10px" }}>
              <Favorite />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
