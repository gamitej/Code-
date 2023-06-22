import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// img
import logo from "../../assests/logo-2.png";
// comp
import BasicModal from "../../components/Modal/BasicModal";
import Password from "../../components/Input/Password";
import InputTextField from "../../components/Input/InputTextField";
import { useLogin } from "../../store/login/useLogin";
import { toast } from "react-toastify";

const LoginModal = ({ open, setOpen, handleOpen, buttonLabel = "login" }) => {
  // =========== STATES ===============
  const { callLoginApi, callSignupApi } = useLogin();
  const [form, setForm] = useState({ username: "", password: "" });

  // =========== EVENT HANDLERS ===============
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (buttonLabel === "login") {
      const isLogin = await callLoginApi(form);
      if (isLogin) {
        setForm({ username: "", password: "" });
        toast.success("login Successfull", { autoClose: 800 });
        setOpen(false);
      } else {
        toast.info("Wrong username / password", { autoClose: 1200 });
      }
    } else {
      const isSignUp = await callSignupApi(form);
      if (isSignUp) {
        setForm({ username: "", password: "" });
        toast.success("Sign-Up Successfull", { autoClose: 800 });
        setOpen(false);
      } else {
        toast.info("Some error occurred", { autoClose: 1200 });
      }
    }
  };

  const handleClose = () => {
    setOpen(!open);
    setForm((prevState) => ({ ...prevState, username: "", password: "" }));
  };

  return (
    <React.Fragment>
      <BasicModal
        open={open}
        handleOpen={handleOpen}
        onClose={handleClose}
        height="30rem"
        width="30rem"
      >
        <form
          className="flex flex-col justify-around items-center w-full h-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img alt="" src={logo} className="h-[5rem] w-[8rem]" />
            <h2 className="text-3xl font-semibold">Welcome to code</h2>
          </div>
          <InputTextField
            name="username"
            label="Username"
            placeholder="Enter username"
            onChange={handleChange}
            value={form.username}
          />
          <Password value={form.password} onChange={handleChange} />
          <button
            className="bg-red-500 hover:bg-red-600 rounded-full py-1 px-3 text-white font-semibold text-lg w-[80%]"
            type="submit"
          >
            {buttonLabel}
          </button>
          <br />
        </form>
      </BasicModal>
    </React.Fragment>
  );
};

LoginModal.propTypes = {
  buttonLabel: PropTypes.string,
  handleOpen: PropTypes.any,
  onClose: PropTypes.any,
  open: PropTypes.any,
};

export default LoginModal;
