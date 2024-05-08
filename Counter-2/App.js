import logo from "./logo.svg";
import AppContextProvider from "./AppContext";
import Profile from "./Profile";
import "./App.css";
import { useState, useEffect, useMemo, useCallback } from "react";
import Parent from "./Parent";
import Refer1 from "./Refer1";
import Counter from "./Counter";
import ReducerCmp1 from "./ReducerCmp1";

function App() {
  //react hooks ---> if you want to use react life cycles in function component

  // useState -- core
  // useEffect -- core => useEffect -> React lifecycles access -> 3 types
  // useRef -- core
  // useId
  // useContext -- core
  // useReducer
  // useLayoutEffect
  // useMemo -- core
  // useCallback -- core

  //js
  // const [user, setUser] = useState("sethu"); // user -> sethu setUser--> setter function
  // const [name, setName] = useState("sethu"); // name -> sethu
  // const [roll, setRoll] = useState(47); // roll -> 47
  // const [isValid, setIsValid] = useState(true); // roll -> 47
  // const [userObj, setUserObj] = useState({}); // roll -> 47
  // const [listOfUser, setListOfUser] = useState([]); // roll -> 47y
  // const [val, setVal] = useState("");
  // const [availableBalance, setAvailableBalance] = useState(0);
  // console.log("App compo test");
  //inital & each and every rerender call
  //only one time should be call. and that one time is first time
  //state var dependencies change means it should be call

  //componentdidmount -> component
  //componentdidupdate ->
  //shouldcomponentupdate ->

  // const calculateBasedOnRollNo = (rno) => {
  //   const user = {
  //     rollno: rno,
  //     value: rno * 3000,
  //   };
  //   return user;
  // };

  //memo memoization => state value cache/ memory

  //deep calculation => 1000*5 => 5000 => every

  // const valueOfRoolNo = useCallback(() => {
  //   return calculateBasedOnRollNo(roll);
  // }, [roll]);

  // valueOfRoolNo = () => {

  //}

  //console.log(valueOfRoolNo);
  //valueOfRoolNo = {
  //   rollno: 47,
  //   value: 141000
  // }

  // valueOfRoolNo();
  return (
    <div className="App">
      {/* <Refer1></Refer1> */}
      {/* <Parent></Parent> */}
      {/* <Counter></Counter> */}
      <ReducerCmp1></ReducerCmp1>
      <Profile></Profile>
    </div>
  );
}

export default App;
