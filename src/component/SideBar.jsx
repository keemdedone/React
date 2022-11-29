import React, { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";

import {
  BiHomeCircle,
  BiMessageRoundedDots,
  BiChevronRight,
  BiCodeAlt,
  BiCommentDots,
  BiChevronLeft,
} from "react-icons/bi";

import Button from "@mui/material/Button";
import "./SideBar.scss";

function SideBar() {
  /* Sidebar menu select toggle */
  const [menu, setSelect] = useState("home");
  const handleChange = (event, nextMenu) => {
    if (nextMenu === null) {
      setSelect(menu);
    } else {
      setSelect(nextMenu);
    }
  };

  /* Open menu sidebar */
  const [open, setSidebarConrol] = useState(false);
  const handleSidebarConrol = () => {
    setSidebarConrol(!open);
  };

  return (
    <div className="sideBar">
      <ToggleButtonGroup
        orientation="vertical"
        className={open ? "sideBar_menu open" : "sideBar_menu"}
        value={menu}
        onChange={handleChange}
        exclusive
      >
        <ToggleButton className="_toggle react-icon" value="home" href="#">
          <BiHomeCircle />
          <span className="_toggle_txt">Home</span>
        </ToggleButton>
        <ToggleButton className="_toggle react-icon" value="about" href="#">
          <BiMessageRoundedDots />
          <span className="_toggle_txt">About</span>
        </ToggleButton>
        <ToggleButton className="_toggle react-icon" value="github" href="#">
          <BiCodeAlt />
          <span className="_toggle_txt">Github</span>
        </ToggleButton>
        <ToggleButton className="_toggle react-icon" value="massage" href="#">
          <BiCommentDots />
          <span className="_toggle_txt">Massage</span>
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="_sidebar_control" onClick={handleSidebarConrol}>
        <Tooltip title={open ? "Close" : "Open"} placement="right">
          <Button variant="contained" className="_control_btn react-icon">
            {open ? <BiChevronLeft /> : <BiChevronRight />}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default SideBar;
