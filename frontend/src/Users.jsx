import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { bgBG } from "@mui/material/locale";
import axios from "axios";
import { Phone, Trash2 } from "lucide-react";

const columns = [
  { field: "id", headerName: "UserId", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "address", headerName: "Address", width: 100 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone Number", width: 150 },
  { field: "dateofBirth", headerName: "Date of Birth", width: 200 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "role", headerName: "Role", width: 80 },
  {
    field: "delete",
    headerName: "Delete",
    width: 100,
    renderCell: (params) => (
      <Trash2
        onClick={() => handleDelete(params.id)}
        className="cursor-pointer text-red-500 !m-2 "
      />
    ),
  },
];

const handleDelete = (id) => {
  console.log(`Deleting  user with ID: ${id}`);
};

const MyDataGrid = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user");
        console.log(response.data.data);

        const user = response.data.data;

        const Rows = user.map((user) => ({
          id: user.userId,
          name: user.username,
          address: user.profile?.address,
          email: user.email,
          phone: user.profile?.phoneNumber,
          dateofBirth: user.profile?.dateOfBirth,
          gender: user.profile?.gender,
          role: user.role,
        }));

        setUserData(Rows);
      } catch (error) {
        console.error("Error fetching User:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col h-[100vh] bg-white  items-center !p-8">
      <h2 className="!text-3xl">Users</h2>
      <Box sx={{ height: 600, width: "100%", bgcolor: "white" }}>
        <DataGrid
          rows={userData}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default MyDataGrid;
