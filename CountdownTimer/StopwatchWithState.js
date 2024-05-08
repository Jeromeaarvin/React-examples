import React, { useState, useRef } from 'react';

function StopwatchWithState() {
  const [timeWithState1, setTimeWithState1] = useState(0);
  const [timeWithState2, setTimeWithState2] = useState(0);
  const intervalRef1 = useRef(null);
  const intervalRef2 = useRef(null);
  const [isRunning1, setIsRunning1] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);

  const startStopwatch1 = () => {
    setIsRunning1(true);
    intervalRef1.current = setInterval(() => {
      setTimeWithState1(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopStopwatch1 = () => {
    setIsRunning1(false);
    clearInterval(intervalRef1.current);
  };

  const startStopwatch2 = () => {
    setIsRunning2(true);
    intervalRef2.current = setInterval(() => {
      setTimeWithState2(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopStopwatch2 = () => {
    setIsRunning2(false);
    clearInterval(intervalRef2.current);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:
    ${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Stopwatch with useState</h2>
      <p>{formatTime(timeWithState1)}</p>
      <button onClick={startStopwatch1}>Start</button>
      <button onClick={stopStopwatch1}>Stop</button>
      <h2>Stopwatch with useReff</h2>
      <p>{formatTime(timeWithState2)}</p>
      <button onClick={startStopwatch2}>Start</button>
      <button onClick={stopStopwatch2}>Stop</button>
    </div>
  );
}

export default StopwatchWithState;
