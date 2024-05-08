import React, { useState } from "react";
import Button from "./Button";

const Title = ({ text, age }) => {
  console.log("Title Rendering");
  return (
    <div>
      title {text} {age}
    </div>
  );
};

export default React.memo(Title);
