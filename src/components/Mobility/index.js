import React from 'react';
import strengthStyles from '../../styles/strength.module.css';
import tabataImg from '../../assets/tabataDuotone.jpg';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import * as ROUTES from '../../constants/routes';

const MobilityPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={strengthStyles.container}>
      <div className={strengthStyles.links}>
        <Link to={ROUTES.HIPS}>
          <img src={tabataImg} alt='hips' />
          <span>HIPS</span>
        </Link>
      </div>

      <div className={strengthStyles.links}>
        <Link to={ROUTES.KNEES}>
          <img src={tabataImg} alt='knees' />
          <span>Knees</span>
        </Link>
      </div>

      <div className={strengthStyles.links}>
        <Link to={ROUTES.SHOULDERS}>
          <img src={tabataImg} alt='shoulders' />
          <span>Shoulders</span>
        </Link>
      </div>
    </animated.div>
  );
}

export default MobilityPage;
