import React from "react";
import { Pagination, Stack } from "@mui/material";

const PaginationBar = ({ totalPages, currentPage, onPageChange }) => (
  <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(e, page) => onPageChange(page)}
      color="primary"
      size="large"
      variant="outlined"
      shape="rounded"
      sx={{
        "& .MuiPaginationItem-root": {
          fontWeight: "bold",
          fontSize: "1rem",
          border: "2px solid #FF6F00", // Màu viền khi chưa chọn
        },
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "#FF6F00", // Màu nền hover
          color: "#fff",
        },
        "& .Mui-selected": {
          backgroundColor: "#FF6F00 !important", // Màu nền khi được chọn
          color: "#fff !important",
        },
        "& .MuiPaginationItem-ellipsis": {
          display: "none", // Ẩn dấu ba chấm
        },
      }}
    />
  </Stack>
);

export default PaginationBar;
