//singleton obj or design patterns ===> code structure ==> performance
export const initialState = {
  users: [], //copm1 ['sethu']
  details: [], // comp2
  userName: "",
};

//common state management
const reducerFn = (state, action) => {
  console.log("reducerState");
  console.log(state);
  switch (action.type) {
    case "addUser":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    default:
      return state;
  }
};

export default reducerFn;
