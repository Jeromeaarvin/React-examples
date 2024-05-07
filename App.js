import logo from "./logo.svg";
import AppContextProvider from "./AppContext";
import Profile from "./Profile";
import Details from "./Details";
import "./App.css";
import { useState } from "react";
import Payment from "./Payment";
import Logout from "./Logout";

function App() {
  const [user, setUser] = useState("sethu");
  return (
    <div className="App">
      <AppContextProvider>
        <Profile></Profile>
        <Details></Details>
        <Payment></Payment>
        <Logout></Logout>
      </AppContextProvider>
    </div>
  );
}

export default App;
