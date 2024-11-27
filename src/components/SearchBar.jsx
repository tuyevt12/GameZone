import React, { useState } from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box
      sx={{
        margin: "20px auto",
        textAlign: "center",
        maxWidth: "600px",
      }}
    >
      <form onSubmit={handleSearch}>
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm game..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              backgroundColor: "#f5f5f5",
              paddingRight: "10px",
              transition: "border-color 0.3s",
            },
            "& .MuiOutlinedInput-root:hover": {
              borderColor: "#FF6F00", // Màu hover của viền
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              borderColor: "#FF6F00", // Màu khi ô input được focus
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#FF6F00" }} />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Box>
  );
};

export default SearchBar;
