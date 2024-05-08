import React, { createContext, useState } from "react";

export const AppContext = createContext({ val: "sethu1", setVal: () => {} });

const AppContextProvider = ({ children }) => {
  const [val, setVal] = useState("sethu");
  const [profilePhoneNumber, setProfilePhoneNumber] = useState(777);
  const [bikeName, setBikeName] = useState("");
  return (
    <AppContext.Provider
      value={{
        val,
        profilePhoneNumber,
        setProfilePhoneNumber,
        bikeName,
        setBikeName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
