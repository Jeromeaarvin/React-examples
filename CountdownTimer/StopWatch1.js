import React, { useState, useRef } from 'react';

const StopWatch1 = () => {
  const [time,setTime] = useState(0);
  const interval = useRef(null);

  const [time2,setTime2] = useState(0);
  const interval2 = useRef(null);

  const startStopwatch = () => {
    if (!interval.current) {
      interval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); 
      }, 10);
    }
  };

  const stopStopwatch = () => {
    clearInterval(interval.current);
  };

  const startStopwatch2 = () => {
    if (!interval2.current) {
      interval2.current = setInterval(() => {
        setTime2((prevTime) => prevTime + 10); 
      }, 10);
    }
  };

  const stopStopwatch2 = () => {
    clearInterval(interval2.current);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`;
  };

  const formatTime2 = ( time2) => {
    const hours = Math.floor(time2 / 3600000);
    const minutes = Math.floor(time2 / 60000);
    const seconds = Math.floor((time2 % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div> 
      <h1>UseState Stopwatch</h1>
      <div>{formatTime(time)}</div>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>

      <div> 
      <h1>Usereff Stopwatch</h1>
      <div>{formatTime2(time2)}</div>
      <button onClick={startStopwatch2}>Start</button>
      <button onClick={stopStopwatch2}>Stop</button>
    </div>
    </div>
  );
};

export default StopWatch1;
