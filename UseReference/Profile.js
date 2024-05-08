import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Profile() {
  const { val, profilePhoneNumber, setProfilePhoneNumber, bikeName } =
    useContext(AppContext);
  return (
    <div>
      Profile {profilePhoneNumber}
      <input onChange={(e) => setProfilePhoneNumber(e.target.value)}></input>
      {bikeName}
    </div>
  );
}

export default Profile;
