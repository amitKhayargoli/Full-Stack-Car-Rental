import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { bgBG } from "@mui/material/locale";

const columns = [
  { field: "id", headerName: "UserId", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "address", headerName: "Address", width: 100 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone Number", width: 200 },
  { field: "gender", headerName: "Gender", width: 200 },
];

const rows = [
  { id: 1, name: "Amit", age: 24, email: "amit@example.com" },
  { id: 2, name: "John", age: 30, email: "john@example.com" },
  { id: 3, name: "Alice", age: 27, email: "alice@example.com" },
];

const MyDataGrid = () => {
  return (
    <div className="flex flex-col bg-white justify-between items-center !p-8">
      <h2 className="!text-3xl">Users</h2>
      <Box sx={{ height: 400, width: "100%", bgcolor: "white" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default MyDataGrid;
