import React from "react";
import { NavLink } from "react-router-dom";
// mui
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const BackButton = ({ to = "/", title = "Back", className = "" }) => {
  return (
    <NavLink to={to} className={`${className} hover:scale-105 cursor-pointer`}>
      <Button
        sx={{
          fontSize: "1rem",
          color: "whitesmoke",
          textTransform: "lowercase",
        }}
        startIcon={
          <KeyboardBackspaceIcon
            sx={{
              width: "1.5rem",
              height: "1.5rem",
              color: "whitesmoke",
            }}
          />
        }
      >
        {title}
      </Button>
    </NavLink>
  );
};

export default BackButton;
