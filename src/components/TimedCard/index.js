import React, { useState, useRef, useEffect } from 'react';
import timedStyles from '../../styles/timed.module.css';

const TimedCard = props => {

  return (
    <h1>Timed Card Here</h1>
  );
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function Counter() {
  let [count, setCount] = useState(10);

  useInterval(() => {
    if (count === 0) return; // I inserted this
    setCount(count - 1);
  }, 1000);

  return <h3>{count}</h3>;
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

export default TimedCard;

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// function Counter() {
//   let [count, setCount] = useState(10);

//   useInterval(() => {
//     if (count === 0) return; // I inserted this
//     setCount(count - 1);
//   }, 1000);

//   return <h3 className={warmupStyles.counter}>{count}</h3>;
// }

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the last callback
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }