import PropTypes from "prop-types";
import React from "react";
// mui comp
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

// mui icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Password({
  width = "80%",
  onChange = () => {},
  value = "",
  name = "password",
  placeholder = "Enter your password",
}) {
  // =========== USE_STATE HOOK ===============
  const [showPassword, setShowPassword] = React.useState(false);

  // =========== EVENT HANDLERS ===============
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <FormControl sx={{ m: 1, width }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id={name}
        label="Password"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

Password.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
};

export default Password;
