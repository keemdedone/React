// @ts-nocheck
import React, { useState } from "react";
import {
  FiMoon,
  FiSun,
  FiChevronDown,
  FiChevronUp,
  FiMenu,
  FiHome,
  FiLogOut,
  FiAtSign,
  FiUser,
  FiSmile,
  FiBook,
} from "react-icons/fi";
import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";

import userPhoto from "../assets/img/user-icon.jpg";
import "./Header.scss";

function Header() {
  /* Dark mode click */
  const root = document.documentElement;
  const [darkToggle, setClick] = useState(false);
  const handleDarkModeClick = () => {
    setClick(!darkToggle);
    if (darkToggle === false) {
      root.style.setProperty("--white", "#444", "important");
      root.style.setProperty("--black", "#fff", "important");
    } else {
      root.style.setProperty("--white", "#fff", "important");
      root.style.setProperty("--black", "#000", "important");
    }
  };

  /* User drop down click */
  const [anchorEl, setAnchorEl] = useState(null);
  const openDropDown = Boolean(anchorEl);
  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  /* Modile user drop down click */
  const [openMbDropDown, setOpenMbDropDown] = useState(false);
  const handleMbDropDownClick = () => {
    setOpenMbDropDown(!openMbDropDown);
  };

  /* Modile user drop down click in responsive menu */
  const [openUserMbDropDown, setOpenUserMbDropDown] = useState(false);
  const handleUserMbDropDownClick = () => {
    setOpenUserMbDropDown(!openUserMbDropDown);
  };

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_logo">
          <span>React App</span>

          <div className="menu_mb">
            <ListItemButton onClick={handleMbDropDownClick}>
              {openMbDropDown ? <FiChevronUp /> : <FiMenu />}
            </ListItemButton>
          </div>
        </div>

        <div className="header_menu">
          <div className="_menu_normal">
            <div className="_user">
              <img src={userPhoto} alt="user-img" />
              <Button variant="text" onClick={handleDropdownClick}>
                <span className="_name">Keem</span>
                <FiChevronDown className="_dropMenu" />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={openDropDown}
                onClose={handleDropdownClose}
              >
                <MenuItem onClick={handleDropdownClose}>Profile</MenuItem>
                <MenuItem onClick={handleDropdownClose}>My account</MenuItem>
                <MenuItem onClick={handleDropdownClose}>Logout</MenuItem>
              </Menu>
            </div>
            <ul className="_menu">
              <li className="_mode">
                <Button
                  variant="text"
                  className="_dark react-icon"
                  onClick={handleDarkModeClick}
                >
                  {darkToggle ? <FiSun /> : <FiMoon />}
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse_mb">
          <List disablePadding>
            <Collapse in={openMbDropDown} unmountOnExit>
              <ListItemButton>
                <ListItemIcon className="_collapse_icon">
                  <FiHome />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>

              <ListItemButton
                variant="text"
                onClick={handleUserMbDropDownClick}
              >
                <ListItemIcon className="_collapse_icon">
                  <FiUser />
                </ListItemIcon>
                <ListItemText primary="Keem" />
                <FiChevronDown className="_dropMenu" />
              </ListItemButton>
              <Collapse in={openUserMbDropDown} unmountOnExit sx={{ pl: 4 }}>
                <ListItemButton>
                  <ListItemIcon className="_collapse_icon">
                    <FiSmile />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="_collapse_icon">
                    <FiBook />
                  </ListItemIcon>
                  <ListItemText primary="My account" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="_collapse_icon">
                    <FiLogOut />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </Collapse>

              <ListItemButton onClick={handleDarkModeClick}>
                <ListItemIcon className="_collapse_icon">
                  {darkToggle ? <FiSun /> : <FiMoon />}
                </ListItemIcon>
                <ListItemText
                  primary={darkToggle ? "Ligth mode" : "Dark mode"}
                />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon className="_collapse_icon">
                  <FiAtSign />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </Collapse>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Header;
