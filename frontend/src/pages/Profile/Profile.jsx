import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// comp
import {
  BackButton,
  BasicModal,
  BasicTable,
  Dropdown,
  InputTextField,
} from "../../components";
// mui
import { Button } from "@mui/material";
// data
import { dropDownData, inputData } from "./data";
// services
import { getProfileDropdowns, postQuestion } from "../../services";

const Profile = () => {
  // =================== USE-STATE =====================
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropDownData, setDropDownData] = useState([]);
  const [form, setForm] = useState({
    url: "",
    level: "",
    platform: "",
    question: "",
    topic: "",
  });

  // =================== EVENT-HANDLERS ================

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setForm({
      url: "",
      level: "",
      platform: "",
      question: "",
      topic: "",
    });
    setOpen(true);
  };

  const handleChange = (target) => {
    const { value, name } = target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const reset = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postQuestion(form);
    if (res.error) {
      toast.success(res.message, { autoClose: 800 });
      reset();
    } else {
      toast.info(res.message, { autoClose: 800 });
    }
  };

  // ========= CALL ALL PINS API =============
  const callGetProfileDropdownApi = async () => {
    try {
      setLoading(true);
      const { data } = await getProfileDropdowns();
      setDropDownData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callGetProfileDropdownApi();
  }, []);

  return (
    <div className="w-full h-full m-auto">
      <div className="relative h-[5rem] flex justify-center items-center">
        <h1 className="text-3xl font-semibold text-purple-400 underline">
          Amitej Pratap Singh
        </h1>
        <BackButton className="absolute top-4 left-4" color="black" />
        <div className="absolute top-4 right-4">
          <Button variant="contained" onClick={handleOpen}>
            Admin
          </Button>
          <AdminModal
            open={open}
            form={form}
            onClose={handleClose}
            handleOpen={handleOpen}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            dropDownData={dropDownData}
          />
        </div>
      </div>
      <div className="w-[90%] m-auto">
        <BasicTable
          height={"30rem"}
          title="questions"
          enableDowloadCsv
          isLoading={false}
        />
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
  dropDownData = [],
}) {
  return (
    <BasicModal
      height="25rem"
      width="40rem"
      open={open}
      onClose={onClose}
      handleOpen={handleOpen}
    >
      <div className="p-4 flex flex-col justify-center items-center w-full h-full">
        <p className="text-purple-500 font-semibold text-2xl underline select-none mb-8">
          Add Questions
        </p>
        <form
          className="flex flex-col justify-around items-center h-[90%] w-full"
          onSubmit={handleSubmit}
        >
          {inputData?.map(({ name, label, placeholder }, index) => (
            <InputTextField
              size="small"
              key={index}
              name={name}
              label={label}
              value={form[name]}
              placeholder={placeholder}
              onChange={(e) => handleChange(e.target)}
              width="85%"
            />
          ))}
          <div className="w-[90%] flex justify-between items-center">
            {dropDownData?.map(({ options, id, name, label }, index) => (
              <Dropdown
                size="small"
                id={id}
                name={name}
                key={index}
                label={label}
                width="10rem"
                options={options}
                value={form[name]}
                onChange={handleChange}
              />
            ))}
          </div>
          <Button type="submit" variant="contained">
            Add question
          </Button>
        </form>
      </div>
    </BasicModal>
  );
}

export default Profile;
