import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./Action"; 

const User = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList.userList);
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      console.log(result);
      dispatch(addUser(result))

      setUsers(result);
    };
    getUsers();
  }, []);
  

  return <div>User

  </div>;
};

export default User;
