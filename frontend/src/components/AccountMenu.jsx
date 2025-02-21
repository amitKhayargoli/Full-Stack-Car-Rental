import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import axios from "axios";
import { useEffect, useState } from "react";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function AccountMenu() {
  const [image, setImage] = useState("");
  const [User, setUserData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");

    if (storedUserId) {
      fetchUserProfile(storedUserId);
    }
  }, []);

  const fetchUserProfile = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/userProfile/${userId}`
      );

      console.log("Response:", response.data.data);

      localStorage.setItem(
        "profilePicURL",
        response.data.data.profilePictureURL
      );

      setUserData(response.data.data.user);

      if (response.data.data.profilePictureURL) {
        setImage(response.data.data.profilePictureURL);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");

    setImage("");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{ width: 32, height: 32, bgcolor: "#7366ff" }}
                src={image}
                alt="Profile"
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              bgcolor: "background.default",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                bgcolor: "primary.main",
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ bgcolor: "#7366ff" }} src={image} alt="Profile" />

            {User.email}
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/login");
            }}
          >
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("settings");
            }}
          >
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handleLogout();
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    </ThemeProvider>
  );
}
