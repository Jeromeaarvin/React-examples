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
   

      case "UPDATE_USER":
        return{
          ...state,
          userList:[...action.payload],
        }
        
      default:
        return state;
  }
};

export default UserReducer;
