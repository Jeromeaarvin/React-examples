import React, { useState } from "react";
import AppContextProvider from "./AppContext";
import Profile from "./Profile";

import "./App.css";

const Dashboard = () => {
  //ts
  const [user1, setUser1] = useState<string>("sethu");
  const [isValid1, setIsValid1] = useState<boolean>(true);

  return (
    <div>
      <span>{user1}</span>
    </div>
  );
};

export default Dashboard;
