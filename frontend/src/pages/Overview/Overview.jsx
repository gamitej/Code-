import React from "react";
import { NavLink, useParams } from "react-router-dom";
// mui
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Overview = () => {
  const { name } = useParams();
  return (
    <div>
      <div className="relative bg-blue-300 flex justify-center items-center h-[10rem]">
        <h2 className="text-4xl font-semibold text-white capitalize">{name}</h2>
        <BackButton />
      </div>
    </div>
  );
};

function BackButton() {
  return (
    <NavLink
      to="/"
      className="absolute top-2 left-4 hover:scale-105 cursor-pointer"
    >
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
        Back to explore
      </Button>
    </NavLink>
  );
}

export default Overview;
