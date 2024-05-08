import React, { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";

const Parent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title text="From Title" age={age}></Title>
      <Button click={incrementAge}>Age {age}</Button>
      <Count text="From Count"></Count>
      <Button click={incrementSalary}>Salary {salary}</Button>
    </div>
  );
};

export default Parent;
