import React, { useState, useReducer, useId } from "react";
import reducerFn, { initialState } from "./stateManage";

const ReducerCmp1 = () => {
  // const [userName, setUserName] = useState("");
  const [user, setUser] = useState({ name: "", no: "" });
  const [consumer, setConsumer] = useState({ name: "", no: "" });
  const id = useId(); // generating the random id's

  console.log(initialState);
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleAddUser = () => {
    console.log(id);
    console.log(user);
    // dispatch({ type: "addUser", user: userName });
  };

  const readUseReducer = () => {
    console.log(state);
  };
  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />{" "}
      <button onClick={handleAddUser}>Add user</button>
      <button onClick={readUseReducer}>Read UseReducer</button>
      <span id="userId">{state.users[1]}</span>
    </div>
  );
};

export default ReducerCmp1;
