import { postLogin } from "../../services/ApiServices/Login/loginService";
import { postSignup } from "../../services/ApiServices/Signup/signupService";
import { create } from "zustand";
import { getUser, removeUser, setUser } from "./events";

export const useLogin = create((set) => ({
  user: "",
  loading: false,
  isLoggined: getUser() || false,

  // logout
  setLogout: () => {
    removeUser();
    set((state) => ({ ...state, isLoggined: false }));
  },
  // login api call
  callLoginApi: async (req) => {
    set((state) => ({ ...state, loading: true }));
    const data = await postLogin(req);
    if (data.msg === "success") {
      setUser(req.username);
      set((state) => ({
        ...state,
        isLoggined: true,
        loading: false,
        user: req.username,
      }));
      return true;
    } else {
      set((state) => ({ ...state, loading: false }));
      return false;
    }
  },
  // signup api call
  callSignupApi: async (req) => {
    set((state) => ({ ...state, loading: true }));
    const data = await postSignup(req);
    if (data.msg === "success") {
      set((state) => ({
        ...state,
        loading: false,
      }));
      return true;
    } else {
      set((state) => ({ ...state, loading: false }));
      return false;
    }
  },
}));
