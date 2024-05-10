import { UPDATE_USER } from "./Action-type"; 

const INITIAL_STATE = {
  userList: [],
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "addUser":
      return {
        ...state,
        userList: [...action.payload],
      };

    case UPDATE_USER:
      const { id, newName } = action.payload;

  const updatedUserList = state.userList.map(user => {
    if (user.id === id) {
      return {
        id: user.id,name: newName
      };
    } else {
      return user;
    }
  });
  return {
    ...state,
    userList: updatedUserList
  };

    default:
      return state;
  }
};

export default UserReducer;
