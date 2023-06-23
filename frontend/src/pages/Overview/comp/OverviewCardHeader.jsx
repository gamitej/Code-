import React, { useState } from "react";
// mui
import {
  FormControlLabel,
  FormGroup,
  Menu,
  Switch,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
// data
import { filterData } from "./data";

const OverviewCardHeader = ({
  cardType,
  cardTitle,
  filters = {},
  setFilters = () => {},
}) => {
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
  const handleFilterChange = (e) => {
    const name = e.target.name;
    const cardTypeName = filters[cardType];
    setFilters({
      ...filters,
      [cardType]: {
        ...filters[cardType],
        [name]: !cardTypeName[name],
      },
    });
  };

  return (
    <div className="flex justify-between items-center p-3">
      <p className="text-xl  text-slate-700">{cardTitle}</p>
      <Tooltip title="filters" placement="top" onClick={handleClick} arrow>
        <FilterListIcon
          className="text-slate-500 cursor-pointer"
          sx={{ fontSize: "2rem" }}
        />
      </Tooltip>
      <MenuComp
        open={open}
        cardType={cardType}
        anchorEl={anchorEl}
        filters={filters}
        handleClose={handleClose}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

// sub comps
function MenuComp({
  open,
  anchorEl,
  filters = {},
  cardType = "",
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
        <FormGroup sx={{ marginLeft: "12px", userSelect: "none" }}>
          {filterData?.map(({ name, label }, index) => (
            <FormControlLabel
              key={index}
              control={
                <Switch
                  size="small"
                  checked={filters[cardType][name]}
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

export default OverviewCardHeader;
