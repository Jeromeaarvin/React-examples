import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Logout() {
  const { profilePhoneNumber } =
    useContext(AppContext);
  return (
    <div>
      Logout <br></br>
      {"Name is:"+" "+profilePhoneNumber}
      
    </div>
  );
}

export default Logout;
