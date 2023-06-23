import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// mui
import {
  Button,
  Divider,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
  Switch,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { filterData } from "./data";

const Overview = () => {
  const { name } = useParams();
  // ============= USE-STATE ====================
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // ============= EVENT-HANDLERS ====================
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <div className="flex justify-between items-center p-3">
            <p className="text-xl  text-slate-700">Title</p>
            <Tooltip
              title="filters"
              placement="top"
              onClick={handleClick}
              arrow
            >
              <FilterListIcon
                className="text-slate-500 cursor-pointer"
                sx={{ fontSize: "2rem" }}
              />
            </Tooltip>
            <MenuComp
              handleClose={handleClose}
              open={open}
              anchorEl={anchorEl}
            />
          </div>
          <Divider />
          {/* Card Body */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

function MenuComp({
  open,
  anchorEl,
  filter = {},
  handleClose = () => {},
  handleFilterChange = () => {},
}) {
  return (
    <React.Fragment>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <FormGroup sx={{ marginLeft: "12px" }}>
          {filterData?.map(({ name, label }, index) => (
            <FormControlLabel
              key={index}
              control={
                <Switch
                  size="small"
                  checked={filter.sort}
                  onChange={handleFilterChange}
                  name={name}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
      </Menu>
    </React.Fragment>
  );
}

// sub comp
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
