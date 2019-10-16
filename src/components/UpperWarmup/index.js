import React from 'react';
import warmupStyles from '../../styles/warmup.module.css';
import mainStyles from '../../styles/main.module.css';
import videoStyles from '../../styles/video.module.css';
import StartButton from '../StartButton';

const UpperWarmupPage = () => {
  return (
    <React.Fragment>
      <h1 className={mainStyles.mainHeading}>Lower Warmup</h1>

      <div className={videoStyles.videoResponsive}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NemlCQ1b-Ew" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title='Unity Gym' allowFullScreen></iframe>
      </div>

      <StartButton />
      <p duration={60} name={'High Intensity Exercise'} />
      <p duration={60} name={'Spinal mobilization'} />
      <p duration={120} name={'Wrist mobilization'} />
      <p duration={120} name={'Shoulder mobilization with band'} />
      <p duration={60} name={'Rings turned out hold'} />
      <p duration={60} name={'Rings hang, arms back'} />
      <p duration={60} name={'Core activation'} />
      <p duration={60} name={'Passive hang'} />
    </React.Fragment>
  );
}

export default UpperWarmupPage;
