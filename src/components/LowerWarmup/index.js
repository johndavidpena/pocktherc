import React, { useState, useEffect, useRef } from 'react';
import warmupStyles from '../../styles/warmup.module.css';
import mainStyles from '../../styles/main.module.css';
import videoStyles from '../../styles/video.module.css';
import { Button } from '../Button';

const lowerWarmups = [
  {
    name: 'High Intensity Exercise',
    duration: 3
  },
  {
    name: 'Spinal mobilization',
    duration: 10
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

  const startWarmup = () => {
    setIsRunning(!isRunning);
  }

  let index = 0;
  // If warmupDone, increase the index by 1 and render with next warmup
  useEffect(() => {
    const wd = warmupDone;
    console.log('warmupDone', wd);
    if (wd) index++;
    console.log('index', index);
  }, [warmupDone, index]);

  return (
    <React.Fragment>
      <h1 className={mainStyles.mainHeading}>Lower Warmup</h1>

      <div className={videoStyles.videoResponsive}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CR3L0VYEHqo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title='unity gym' allowFullScreen></iframe>
      </div>

      <div className={warmupStyles.startBtn}>
        <Button click={startWarmup} element={'Start'} />
      </div>

      {isRunning &&
        <div className={warmupStyles.timedCard}>
          <p>{lowerWarmups[index].name} - {lowerWarmups[index].duration}</p>
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
      return;
    }

    setCount(count + 1);
    setPercentage(((count + 1) / initialCount) * 100);
    // props.warmupDone(false);
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
