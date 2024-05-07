import React, { useState } from "react";

import Button from "./Button";
const Count = ({ text, count }) => {
  console.log("Count rendering");
  const [listOfInputs, setListOfInputs] = useState(["username", "password"]);
  const countClick = () => {
    console.log("count click");
  };

  return (
    <div>
     <select name="Dropdown_2" id="cars">
    <option value="volvo">Value 1</option>
    <option value="saab">Value 2</option>
    <option value="opel">Value 3</option>
    <option value="audi">Value 4</option>
  </select>
    </div>
  );
};

export default Count;
