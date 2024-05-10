import { ADDUSER, UPDATE_USER } from "./Action-type";

export const addUser = (user) => {
  return {
    type: "addUser",
    payload: user,
  };
};

export const updateUser = ({ id, newName }) => {
  return {
    type: UPDATE_USER,
    payload: { id, newName },
  };
};
