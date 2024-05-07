import React from "react";

const Dashboard = (props) => {
  console.log(props)

  const check = () => {
    const name='hello from child 1 name';
    props.sendData(name);
  };

  return (
    <div>
      <h2>Child component 1</h2>
      <button onClick={check}>check 1</button>
      <p></p>
    </div>
  );
};

export default Dashboard;