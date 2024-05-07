import React from "react";
import Dashboard from "./dashboard";
import Sucesses from "./sucesses";

function Login() {
  const fromLogin =(message)=>{
     console.log(`Message from child component:${message}`);
  };

  return (
    <div className="App">
      <Dashboard sendData={fromLogin}/>
      <Sucesses sendData={fromLogin}/>
    </div>
  );
}

export default Login;
