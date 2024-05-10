import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addUser from "./Action";

const User = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = () => {
      dispatch(addUser());
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/users"
      // );
      // const result = await response.json();
      // console.log(result);
      // setUsers(result);
      // dispatch(addUser(result));
    };
    getUsers();
  }, []);
  return <div>
    User
    <>
   
  </>
  </div>;
};

export default User;
