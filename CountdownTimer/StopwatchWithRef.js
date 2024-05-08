import React, { useRef } from 'react';

const StopwatchWithRef = () => {
  const isRunningRef = useRef(false);
  const timeRef = useRef(0);
  const timerRef = useRef(null);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}
    :${seconds.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    isRunningRef.current = !isRunningRef.current;

    if (isRunningRef.current) {
      timerRef.current = setInterval(() => {
        timeRef.current += 1;
        forceUpdate();
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
  };

//   const handleReset = () => {
//     isRunningRef.current = false;
//     timeRef.current = 0;
//     clearInterval(timerRef.current);
//     forceUpdate();
//   };

  
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  return (
    <div>
      <h2>Stopwatch with usereff 2</h2>
      <p>{formatTime(timeRef.current)}</p>
      {/* <button onClick={handleStartStop}>{isRunningRef.current ? 'Stop' : 'Start'}</button> */}
      <button onClick={handleStartStop}>Start</button>
      <button onClick={handleStartStop}>Stop</button>
    </div>
  );
};

export default StopwatchWithRef;