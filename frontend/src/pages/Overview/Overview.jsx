import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// mui
import { Button, Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import OverviewCardHeader from "./comp/OverviewCardHeader";

const Overview = () => {
  const { name } = useParams();
  // ============= USE-STATE ====================
  const [filters, setFilters] = useState({
    sorted: false,
    unsolved: true,
    solved: true,
  });

  // ============= EVENT-HANDLERS ====================

  return (
    <div className="bg-slate-100 h-[calc(100vh-5rem)]">
      <div className="relative bg-blue-300 flex justify-center items-center h-[10rem]">
        <h2 className="text-4xl font-semibold text-white capitalize">{name}</h2>
        <BackButton />
      </div>
      <div className="w-[90%] mt-10 m-auto">
        {/* Card */}
        <div className="shadow-md rounded-xl w-[35rem] h-[20rem] bg-white">
          {/* Card Header */}
          <OverviewCardHeader filters={filters} setFilters={setFilters} />
          <Divider />
          {/* Card Body */}
          <div></div>
        </div>
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
