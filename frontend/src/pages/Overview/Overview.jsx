import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// comp
import OverviewCardBody from "./comp/OverviewCardBody";
// mui
import { Button, Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import OverviewCardHeader from "./comp/OverviewCardHeader";
// data
import { cardData, stateObj, cardColor } from "./comp/data";

const Overview = () => {
  const { name } = useParams();
  // ============= USE-STATE ====================
  const [filters, setFilters] = useState(stateObj || {});

  // ============= EVENT-HANDLERS ====================

  return (
    <div className="bg-slate-100 h-[calc(100vh-5rem)]">
      <div className="relative bg-blue-300 flex justify-center items-center h-[10rem]">
        <h2 className="text-4xl font-semibold text-white capitalize">{name}</h2>
        <BackButton />
      </div>
      <div className="w-[95%] mt-10 m-auto grid grid-cols-3 lg:grid-cols-9 md:grid-cols-6 gap-4">
        {/* Card */}
        {cardData?.map(({ title, value, body }, index) => (
          <div
            key={index}
            className="col-span-3 shadow-md rounded-xl min-w-[20rem] h-[20rem] bg-white"
          >
            {/* Card Header */}
            <OverviewCardHeader
              cardType={value}
              cardTitle={title}
              filters={filters}
              setFilters={setFilters}
              color={cardColor[value]}
            />
            <Divider />
            {/* Card Body */}
            <OverviewCardBody cardBodyData={body} />
          </div>
        ))}
      </div>
    </div>
  );
};

// sub-comps
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
