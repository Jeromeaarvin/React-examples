import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Details() {
  const { number } =
    useContext(AppContext);
  return (
    <div>
      Details<br></br>
      {"Ph no:"+" "+number}
      
    </div>
  );
}

export default Details;
