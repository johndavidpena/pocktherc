import React from 'react';
import StartButton from '../StartButton';
import TimedCard from '../TimedCard';

// TODO: Add a link to the actual video (iframe?)
// https://www.youtube.com/watch?v=NemlCQ1b-Ew&list=PL8cSNvg8iPO6PMeCQEVCbnE9TUFpye0W1&index=4&t=809s
const UpperWarmupPage = () => {
  return (
    <React.Fragment>
      <h1>Upper Warmup</h1>

      <StartButton />
      <TimedCard duration={60} name={'High Intensity Exercise'} />
      <TimedCard duration={60} name={'Spinal mobilization'} />
      <TimedCard duration={120} name={'Wrist mobilization'} />
      <TimedCard duration={120} name={'Shoulder mobilization with band'} />
      <TimedCard duration={60} name={'Rings turned out hold'} />
      <TimedCard duration={60} name={'Rings hang, arms back'} />
      <TimedCard duration={60} name={'Core activation'} />
      <TimedCard duration={60} name={'Passive hang'} />
    </React.Fragment>
  );
}

export default UpperWarmupPage;
