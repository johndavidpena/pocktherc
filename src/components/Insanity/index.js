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
      <a href='https://drive.google.com/open?id=1xuv7cmzS07R0n0P4GrPZ5Y1CQutfRHex'>Plyometric Cardio Circuit</a>

      <a href='https://drive.google.com/open?id=1CIRFgQNpAZIHc07M0x98ZOC91Bivzh3p'>Cardio Power and Resistance</a>

      <a href='https://drive.google.com/open?id=1qT6ituRY0UzgF9qKuJz34TXcWn1Ugi1t'>Pure Cardio</a>

      <h4>PHASE 2</h4>
      <a href='https://drive.google.com/open?id=1yVLP3tlRN9ZwuzKqSDvm9U9vCeM9CNTM'>Max Interval Circuit</a>
      <a href='https://drive.google.com/open?id=1ygFkaMZbc3jXnbEYjGOAsLBJDLO-sDF-'>Max Cardio Conditioning</a>
      <a href='https://drive.google.com/open?id=1u9AxC5h_lSUK1ZD3wq1DijCj3tl6mcbr'>Max Interval Plyo</a>

      <h4>REST</h4>
      <a href='https://drive.google.com/open?id=1QI7P8Sd2AG7P6Un0qStOnHApx9wdzeVJ'>Core Cardio and Balance</a>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Insanity);
