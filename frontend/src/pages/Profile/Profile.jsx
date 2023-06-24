import React, { useState } from "react";
// comp
import {
  BackButton,
  BasicModal,
  Dropdown,
  InputTextField,
} from "../../components";
// mui
import { Button } from "@mui/material";
// data
import { dropDownData, inputData } from "./data";

const Profile = () => {
  // =================== USE-STATE =====================
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    url: "",
    level: "",
    platform: "",
    question: "",
  });

  // =================== EVENT-HANDLERS ================

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (target) => {
    const { value, name } = target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-[95%] h-full m-auto">
      <div className="relative h-[5rem] flex justify-center items-center">
        <h1 className="text-3xl font-semibold text-purple-300">
          Amitej Pratap Singh
        </h1>
        <BackButton className="absolute top-2 left-2" color="black" />
        <div className="absolute top-2 right-2">
          <Button variant="outlined" onClick={handleOpen}>
            Admin
          </Button>
          <AdminModal
            open={open}
            form={form}
            onClose={handleClose}
            handleOpen={handleOpen}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

function AdminModal({
  form,
  open,
  onClose,
  handleOpen,
  handleChange,
  handleSubmit,
}) {
  return (
    <BasicModal
      height="60%"
      width="40%"
      open={open}
      onClose={onClose}
      handleOpen={handleOpen}
    >
      <div className="p-4 flex flex-col justify-center items-center w-full h-full">
        <p className="text-purple-300 font-semibold text-2xl underline select-none mb-8">
          Add Questions
        </p>
        <form
          className="flex flex-col justify-around items-center h-[80%] w-full"
          onSubmit={handleSubmit}
        >
          {inputData?.map(({ name, label, placeholder }, index) => (
            <InputTextField
              key={index}
              name={name}
              label={label}
              value={form[name]}
              placeholder={placeholder}
              onChange={(e) => handleChange(e.target)}
              width="80%"
            />
          ))}
          {dropDownData?.map(({ options, id, name, label }, index) => (
            <Dropdown
              id={id}
              name={name}
              key={index}
              label={label}
              minWidth={150}
              options={options}
              value={form[name]}
              onChange={handleChange}
            />
          ))}
          <Button type="submit" variant="contained">
            Add question
          </Button>
        </form>
      </div>
    </BasicModal>
  );
}

export default Profile;
