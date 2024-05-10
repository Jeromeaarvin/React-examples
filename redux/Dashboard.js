import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./Action";

const Dashboard = () => {
  const userList = useSelector((state) => state.userList.userList);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  }

  const handleUpdateName = () => {
  const thirdUser= userList[2];
     dispatch(updateUser({ id: thirdUser.id,newName: newName }));
   
 }

  return (
    <div>
      <div>Dashboard</div>
      <input type="text" value={newName} onChange={handleInputChange}></input>
      <button onClick={handleUpdateName}>Update</button>

      {userList.length >= 3 && (
        <div>
          <p>Name: {userList[2].name}</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard;
