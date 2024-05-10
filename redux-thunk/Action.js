import { ADDUSER } from "./Action-type";

//redux is synchronous and it will be always return an object i.e action object
//redux need asynchronous => middleware(redux saga and redux thunk) => should contains an action
//but this action should retun async functions instead of action object
// redux without middleware
//action creator
// const addUser = (user) => {
//   return {
//     type: ADDUSER,
//     payload: user,
//   };
// };

//redux with middleware
const addUser = () => {
  return async (dispatch, state) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    dispatch({
      type: "addUser",
      payload: result,
    });
  };
};
export default addUser;


export const updateUser =(id,newName)=>{
  return async (dispatch, state) => {
    const userList = state().userList.userList;

    const updatedUserList = userList.map((user, index) => {
      if (user.id === id) {
        return { ...user, name: newName };
      }
      return user;
    });
    dispatch({
      type: "UPDATE_USER",
      payload: updatedUserList,
    });
  };
}

 
