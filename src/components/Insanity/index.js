import React from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';

const Insanity = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={p90xStyles.container}>
      <h1 className={mainStyles.mainHeading}>Insanity</h1>

      <h4>PHASE 1</h4>
      <p>Plyometric Cardio Circuit</p>
      <p>Cardio Power and Resistance</p>
      <p>Pure Cardio</p>

      <h4>PHASE 2</h4>
      <p>Max Interval Circuit</p>
      <p>Max Cardio Conditioning and Cardio</p>
      <p>Max Interval Plyo</p>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Insanity);
