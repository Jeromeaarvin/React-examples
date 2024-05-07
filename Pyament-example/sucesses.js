import React from "react";

const Sucesses = (props) => {
  console.log(props)

  const checkinfo = () => {
    const payment='hello from child 2 Payment';
    props.sendData(payment);
  };

  return (
    <div>
      <h2>child component 2</h2>
      <button onClick={checkinfo}>check 2</button>
    </div>
  );
};

export default Sucesses;
