import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Profile() {
  const { setProfilePhoneNumber } =
    useContext(AppContext);
    
  return (
    <div>
      Profile 
      <input placeholder="Enter Name" onChange={(e) => setProfilePhoneNumber(e.target.value)}></input>
      
    </div>
  );
}

export default Profile;
