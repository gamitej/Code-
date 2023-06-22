const userlabel = "user";

export const getUser = () => {
  const user = window.sessionStorage.getItem(userlabel);
  if (user) {
    return true;
  }
  return false;
};

export const setUser = (name) => {
  window.sessionStorage.setItem(userlabel, name);
};

export const removeUser = () => {
  window.sessionStorage.removeItem(userlabel);
};
