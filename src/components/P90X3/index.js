import React from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';

const P90X3 = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={p90xStyles.container}>
      <h1 className={mainStyles.mainHeading}>P90X3</h1>

      <a href='https://drive.google.com/open?id=1fW99hWsCAoT96PRQWyUB39AAMYseaKdy'>Agility X</a>

      <a href='https://drive.google.com/open?id=1zmAqyY-M6KcHnRiH1fhaegvka-1LWmRE'>CVX</a>

      <a href='https://drive.google.com/open?id=1HI3kzd_yovE_xmnjm0tokcS1z1Nq3Tbx'>MMX</a>

      <a href='https://drive.google.com/open?id=1GuIZg89AJPNUOlTGSue_cDAssbWW8BP-'>Triometrics</a>

      <a href='https://drive.google.com/open?id=1feFYm0589IL88JA78xGow3C3ynAVFvKK'>The Warrior</a>

      <a href=''>Accelerator</a>

      <a href=''>Decelerator</a>

      <a href=''>Dynamix</a>

      <a href=''>Isometrix</a>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(P90X3);
