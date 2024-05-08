import React, { useEffect, useState, useRef } from "react";

const Refer1 = () => {
  const inputId = useRef(100);
  const [val, setVal] = useState(1);

  useEffect(() => {
    console.log("render");
  });

  const handleClick = () => {
    inputId.current.value = Math.random() + 1;
  };

  return (
    <div>
      <input type="text" ref={inputId} />
      <div onClick={handleClick}>{inputId.current}</div>
    </div>
  );
};

export default Refer1;
