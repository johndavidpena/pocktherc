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

      <a href='https://drive.google.com/open?id=1qNIw23PIZaX6bYMwagTm3xvbsZhnRsa8'>Accelerator</a>

      <a href='https://drive.google.com/open?id=1h0Axg1M7CKpAFY0eNi5Ps-AzwIdl22m5'>Decelerator</a>

      <a href='https://drive.google.com/open?id=1KIv-vXpS35exwaICl92TdEiC7vaC1VYP'>Dynamix</a>

      <a href='https://drive.google.com/open?id=1hXX2f8DzCr9xG7NlD1ZIS3LB3UDQ-Zn_'>Isometrix</a>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(P90X3);
