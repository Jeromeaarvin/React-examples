import React, { createContext, useState } from "react";

export const AppContext = createContext({ val: "sethu1", setVal: () => {} });

const AppContextProvider = ({ children }) => {
  // const [val, setVal] = useState("sethu");
  const [profilePhoneNumber, setProfilePhoneNumber] = useState("sethu");
  const [bikeName, setBikeName] = useState("");
  const[number,setnumber]=useState("");
  return (
    <AppContext.Provider
      value={{
        profilePhoneNumber,
        setProfilePhoneNumber,
        bikeName,
        setBikeName,
        number,
        setnumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
