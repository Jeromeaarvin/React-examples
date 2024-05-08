import React, { useEffect, useState } from "react";

const Button = ({ click, children }) => {
  console.log(`Button clicked ${children}`);

  return (
    <div>
      <div></div>
      <button onClick={click}> {children} </button>
    </div>
  );
};

export default React.memo(Button);
