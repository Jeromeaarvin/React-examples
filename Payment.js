import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Payment() {
  const { setnumber } =
    useContext(AppContext);
  return (
    <div>
      Payment 
      <input type="number" placeholder="Enter phone number" onChange={(e) => setnumber(e.target.value)} ></input>
    </div>
  );
}

export default Payment;
