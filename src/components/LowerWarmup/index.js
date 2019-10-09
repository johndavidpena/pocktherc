import React, { useState, useEffect, useRef } from 'react';
import warmupStyles from '../../styles/warmup.module.css';

const LowerWarmupPage = () => {
  return (
    <React.Fragment>
      <h1>Lower Warmup</h1>
      <Counter />
      <p>1 minute - High Intensity Exercise</p>
      <p>1 minute - Spinal mobilization</p>
      <p>2 minutes - Test the water</p>
      <p>1 minute - Ankle/calf/feet mobilization</p>
      <p>1 minute - Hip mobilization/squat</p>
      <p>1 minute - 360 hip mobility/side lunge</p>
      <p>1 minute - Rotation to low bridge</p>
      <p>1 minute - Core activation (back, sides, belly)</p>
      <p>1 minute - Passive hang</p>
    </React.Fragment>
  );
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function Counter() {
  let [count, setCount] = useState(10);

  useInterval(() => {
    if (count === 0) return; // I inserted this
    setCount(count - 1);
  }, 1000);

  return <h3 className={warmupStyles.counter}>{count}</h3>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the last callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default LowerWarmupPage;
