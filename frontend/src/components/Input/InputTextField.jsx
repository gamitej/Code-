import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const InputTextField = ({
  value = "",
  width = "80%",
  size = "medium",
  name = "username",
  label = "Username",
  variant = "outlined",
  onChange = () => {},
  placeholder = "",
  required = true,
}) => {
  return (
    <>
      <TextField
        size={size}
        value={value}
        id={name}
        name={name}
        label={label}
        variant={variant}
        onChange={onChange}
        sx={{ width }}
        placeholder={placeholder}
        required={required}
        spellCheck={false}
        autoComplete="off"
      />
    </>
  );
};

InputTextField.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
};

export default InputTextField;
