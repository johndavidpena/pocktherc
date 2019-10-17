import React from 'react';
import strengthStyles from '../../styles/strength.module.css';
import insanityImg from '../../assets/insanityDuotone.jpg';
import tabataImg from '../../assets/tabataDuotone.jpg';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const CardioPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={strengthStyles.container}>
      <div className={strengthStyles.links}>
        <Link to={ROUTES.INSANITY}>
          <img src={insanityImg} alt='insanity' />
          <span>Insanity</span>
        </Link>
      </div>

      <div className={strengthStyles.links}>
        <Link to={ROUTES.TABATAS}>
          <img src={tabataImg} alt='tabatas' />
          <span>Tabatas</span>
        </Link>
      </div>
    </animated.div>
  );
}

export default CardioPage;
