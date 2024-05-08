import React, { useContext, useReducer } from "react";
import { AppContext } from "./AppContext";
import reducerFn, { initialState } from "./stateManage";

function Profile() {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  console.log(state);
  const readReducer = () => {
    console.log(state);
  };
  return (
    <div>
      <span onClick={readReducer}>Profile</span>
    </div>
  );
}

export default Profile;
