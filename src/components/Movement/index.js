import React from 'react';
import strengthStyles from '../../styles/strength.module.css';
import insanityImg from '../../assets/insanityDuotone.jpg';
import tabataImg from '../../assets/tabataDuotone.jpg';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const MovementPage = () => {
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

      <div className={strengthStyles.links}>
        <Link to={ROUTES.TABATAS}>
          <img src={insanityImg} alt='p90x3' />
          <span>P90X3</span>
        </Link>
      </div>
    </animated.div>
  );
}

export default MovementPage;
