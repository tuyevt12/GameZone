import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DownloadPage from "./pages/DownloadPage";
import GameDetail from "./pages/GameDetail"; // Import trang chi tiết
import { getGames } from "./services/gameService"; // Dịch vụ để lấy game

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [users, setUsers] = useState([]); // Danh sách người dùng đã đăng ký
  const [userEmail, setUserEmail] = useState(""); // Email người dùng
  const [games, setGames] = useState([]); // Danh sách game

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getGames(); // Lấy danh sách game từ dịch vụ
      setGames(data);
    };
    fetchGames();
  }, []);

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email); // Lưu email của người dùng
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(""); // Xóa email khi đăng xuất
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* Home chỉ truy cập khi đã đăng nhập */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home userEmail={userEmail} games={games} /> // Truyền games vào Home
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* About chỉ truy cập khi đã đăng nhập */}
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
        {/* Trang login */}
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLogin} users={users} />}
        />
        {/* Trang đăng ký */}
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        {/* Trang tải game */}
        <Route
          path="/download/:gameId"
          element={<DownloadPage games={games} />}
        />
        {/* Trang chi tiết game */}
        <Route
          path="/game/:id"
          element={<GameDetail games={games} />} // Truyền danh sách game vào GameDetail
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
