import React, { useState, useRef, useEffect } from "react";

const Counter = () => {
  const [time, setTime] = useState({ hr: 0, min: 1, sec: 5 });
  const idRef = useRef(); //document.getelementid && state value

  useEffect(() => {
    return clearInterval(idRef.current);
  }, []);
  const handleStart = () => {
    clearInterval(idRef.current);
    idRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev.sec === 0 && prev.min === 0) {
          return { ...prev, hr: prev.hr, min: 59, sec: 60 }; // min decrement
        }
        if (prev.sec === 0) {
          return { ...prev, hr: prev.hr, min: prev.min - 1, sec: 60 };
        }

        return { ...prev, hr: prev.hr, min: prev.min, sec: prev.sec - 1 }; //sec decrement
      });
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(idRef.current);
    setTime((prev) => {
      return { ...prev, hr: prev.hr, min: prev.min, sec: prev.sec };
    });
  };

  const handleReset = () => {
    clearInterval(idRef.current);
    setTime((prev) => {
      return { hr: 0, min: 0, sec: 0 };
    });
  };
  return (
    <div>
      <span>{time.hr.toString().padStart(2, 0)}:</span>
      <span>{time.min.toString().padStart(2, 0)}:</span>
      <span>{time.sec.toString().padStart(2, 0)}</span>
      <br />
      <button onClick={handleStart}>Start</button>
      <br />
      <button onClick={handleStop}>Stop</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
