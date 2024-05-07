import React, { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";

const Parent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);
  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };
  return (
    <div>
      <Title />                     <Count text="salary" count={salary} />     
         {" "}
    </div>
  );
};

export default Parent;
