import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../utils/Transition";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import UserAvatar from "../../images/user-avatar-32.png";
function Help() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // close on click outside

  return (
    <div className="relative inline-flex">
      <div>
        <Button
          id="basic-button"
          onClick={handleClick}
          className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
            dropdownOpen && "bg-slate-200"
          }`}
        >
          <img
            className="w-8 h-8 rounded-full"
            src={UserAvatar}
            width="32"
            height="32"
            alt="User"
          />
          <div className="flex items-center truncate">
            <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">
              Acme Inc.
            </span>
            <svg
              className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <MenuItem onClick={handleClose} id="basic-menu">
            <li className="flex">
              <Link
                className=" flex font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/home"
                onClick={() => {
                  localStorage.removeItem("User");
                }}
              >
                Log Out
              </Link>
            </li>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Help;
