import React, { useEffect, useState } from "react";

const Button = ({ click, children, listOfInputs }) => {
  const [listofTextBox, setListofTextBox] = useState(listOfInputs);
  console.log(`Button clicked ${children}`);
  console.log(listofTextBox);
  return (
    <div>
      <div>
        {listofTextBox.length !== 0 &&
          listofTextBox.map((box, index) => {
            return <input type="text" />;
          })}
      </div>
      <button onClick={click}> {children} </button>
    </div>
  );
};

export default Button;
