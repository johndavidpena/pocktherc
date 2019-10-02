import React from 'react';
import strengthStyles from '../../styles/strength.module.css';
import FireImg from '../../assets/warmDuoImage.jpg';
import tabataImg from '../../assets/tabataDuotone.jpg';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import * as ROUTES from '../../constants/routes';

const MobilityPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={strengthStyles.container}>
      <div className={strengthStyles.warmupsContainer}>
        <div className={strengthStyles.warmupContainer}>
          <Link to={ROUTES.UPPERWARMUP}>
            <img src={FireImg} alt='upper warmup' />
            <span>UPPER</span>
          </Link>
        </div>
        <div className={strengthStyles.warmupContainer}>
          <Link to={ROUTES.LOWERWARMUP}>
            <img src={FireImg} alt='lower warmup' />
            <span>LOWER</span>
          </Link>
        </div>
      </div>

      <div className={strengthStyles.links}>
        <Link to={ROUTES.P90X}>
          <img src={tabataImg} alt='tabata' />
          <span>TABATAS</span>
        </Link>
      </div>

      <div className={strengthStyles.links}>
        <Link to={ROUTES.P90X2}>
          <img src={tabataImg} alt='tabata' />
          <span>P90X2</span>
        </Link>
      </div>
    </animated.div>
  );
}

export default MobilityPage;
