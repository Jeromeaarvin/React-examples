import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateUser } from "./Action";
import { useState } from "react";

const Dashboard = () => {
  const userList = useSelector((state) => state.userList.userList);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const handleInputChange = (e) => {
    setNewName(e.target.value);
  }

  const handleUpdateName = () => {
    
       dispatch(updateUser(userList[2].id,newName));
     }

  // console.log(userList);
  return (
  <div>Dashboard
    <input type="text" value={newName} onChange={handleInputChange}></input>
      <button onClick={handleUpdateName}>Update</button>

      {userList.length >= 3 && (
        <div>
          <p>Name: {userList[2].name}</p>
        </div>
      )}
  </div>
  )
};

export default Dashboard;
