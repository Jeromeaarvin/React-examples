import React, { useState } from "react";
import Button from "./Button";

const Title = () => {
  console.log("Title Rendering");
  const [listOfInputs, setListOfInputs] = useState([
    "username",
    "name",
    "email",
    "password",
  ]);
  const btnClick = () => {
    console.log("title click");
  };
  return (
    <div>
      <select name="Dropdown_1" id="cars">
    <option value="volvo">Value 1</option>
    <option value="saab">Value 2</option>
    <option value="opel">Value 3</option>
    <option value="audi">Value 4</option>
  </select>
    </div>
  );
};

export default Title;
