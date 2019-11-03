import React, { useState, useEffect, useRef } from 'react';
import warmupStyles from '../../styles/warmup.module.css';
import mainStyles from '../../styles/main.module.css';
import videoStyles from '../../styles/video.module.css';

const lowerWarmups = [
  {
    name: 'High Intensity Exercise',
    duration: 60
  },
  {
    name: 'Spinal mobilization',
    duration: 60
  },
  {
    name: 'Test the water',
    duration: 120
  },
  {
    name: 'Ankle/calf/feet mobilization',
    duration: 60
  },
  {
    name: 'Hip mobilization/squat',
    duration: 60
  },
  {
    name: '360 hip mobility/side lunge',
    duration: 60
  },
  {
    name: 'Rotation to low bridge',
    duration: 60
  },
  {
    name: 'Core activation',
    duration: 60
  },
  {
    name: 'Passive Hang',
    duration: 60
  },
];

const LowerWarmupPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [warmupDone, setWarmupDone] = useState(false);
  const [index, setIndex] = useState(0);

  const startWarmup = () => {
    setIsRunning(!isRunning);
  }

  // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  //   in Counter(at LowerWarmup / index.js: 85)
  //   in div(at LowerWarmup / index.js: 83)
  useEffect(() => {
    const wd = warmupDone;
    if (wd) {
      setIndex(index + 1);
      setWarmupDone(false);
      console.log('index', index, ' - warmupDone', warmupDone);

      if (index === 8) {
        setIsRunning(false);
        setWarmupDone(true);
        setIndex(0);
      }
    }
    return () => {
      console.log('Clean up this hook somehow');
    }
  }, [warmupDone, index]);

  return (
    <React.Fragment>
      <h1 className={mainStyles.mainHeading}>Lower Warmup</h1>

      <div className={videoStyles.videoResponsive}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CR3L0VYEHqo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title='unity gym' allowFullScreen></iframe>
      </div>

      <div className={warmupStyles.startBtn}>
        <button onClick={startWarmup} className={mainStyles.button}>Start</button>
      </div>

      {isRunning &&
        <div className={warmupStyles.timedCard}>
          <p>{lowerWarmups[index].name}</p>
          <Counter duration={lowerWarmups[index].duration} warmupDone={setWarmupDone} />
        </div>
      }
    </React.Fragment>
  );
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const Counter = props => {
  let [count, setCount] = useState(0);
  const [percentage, setPercentage] = useState(0); // 0 - 100

  const initialCount = props.duration;

  useInterval(() => {
    if (count === props.duration) {
      props.warmupDone(true);
      setCount(0);
      setPercentage(0);
      return;
    }

    setCount(count + 1);
    setPercentage(((count + 1) / initialCount) * 100);
  }, 1000);

  return (
    <div className={warmupStyles.progressBar}>
      <Filler percentage={percentage} />
    </div>
  );
}

const Filler = props => {
  return <div className={warmupStyles.filler} style={{ width: `${props.percentage}%` }} />
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
