// img
import React, { useEffect, useState } from "react";
import logo from "../../assests/logo-2.png";

// comp
import LoginModal from "../../pages/Login/LoginModal";
import { useLogin } from "../../store/login/useLogin";
import ProfileMenu from "../../components/Card/ProfileMenu";

export default function ButtonAppBar() {
  // =========== STATES===============
  const { isLoggined } = useLogin();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("login");

  // =========== EVENT HANDLERS ===============

  const handleLogin = () => {
    setOpen(!open);
    setName(() => "login");
  };

  const handleSignUp = () => {
    setOpen(!open);
    setName(() => "sign up");
  };

  // =========== USE-EFFECT ===============

  useEffect(() => {
    if (!isLoggined) {
      setOpen(true);
      setName("login");
    } else {
      setOpen(false);
    }
  }, [isLoggined]);

  return (
    <React.Fragment>
      <div className="w-full flex justify-between items-center h-[5rem] shadow-md">
        {/* Title */}
        <div>
          <img src={logo} alt="logo" className="w-[9rem] h-[5rem]" />
        </div>

        {/* Buttons */}
        <div className="flex justify-around w-[14rem] items-center  mr-2">
          {!isLoggined && (
            <>
              <button
                className="bg-blue-300 hover:bg-blue-500 rounded-full py-2 px-4 text-white font-semibold text-lg"
                onClick={handleLogin}
              >
                Log in
              </button>
              <button
                className="bg-slate-200 hover:bg-slate-300 rounded-full py-2 px-4 font-semibold text-lg"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </>
          )}
          {isLoggined && <ProfileMenu />}
        </div>
      </div>
      {/* Modal */}
      <LoginModal
        open={open}
        handleOpen={handleLogin}
        setOpen={() => setOpen(!open)}
        buttonLabel={name}
      />
    </React.Fragment>
  );
}
