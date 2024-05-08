import React, { useState, useEffect } from 'react';
import StopwatchWithRef from './StopwatchWithRef';            

function StopwatchUseState() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000); 
    }

    return () => clearInterval(interval); 
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Stopwatch with useState 2</h2>
      <p>{formatTime(time)}</p>
      <button onClick={handleStartStop}>Start</button>
      <button onClick={handleStartStop}>Stop</button>
      <StopwatchWithRef></StopwatchWithRef>
    </div>
  );
}

export default StopwatchUseState;
