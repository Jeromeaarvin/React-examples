import React, { useReducer, useState } from "react";
import AppContextProvider from "./AppContext";
import Profile from "./Profile";
import reducerFn, { initialState } from "./stateManage";

import "./App.css";

const Dashboard = () => {
  //ts
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div>
      
    </div>
  );
};

export default Dashboard;
