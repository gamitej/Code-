import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Dropdown = ({
  name = "",
  label,
  value,
  options = [],
  minWidth = 120,
  onChange = () => {},
}) => {
  const handleChange = (e, name) => {
    const value = e.target.value;
    const target = { value, name };
    onChange(target);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth }} size="small">
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId={name}
          id={name}
          value={value}
          label={label}
          onChange={(e) => handleChange(e, name)}
        >
          {options?.map(({ value, label, id }) => (
            <MenuItem key={id} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
