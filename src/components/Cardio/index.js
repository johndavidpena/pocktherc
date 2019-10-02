import React from 'react';
import strengthStyles from '../../styles/strength.module.css';
import insanityImg from '../../assets/insanityDuotone.jpg';
import FireImg from '../../assets/warmDuoImage.jpg';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const CardioPage = () => {
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
        <Link to={ROUTES.INSANITY}>
          <img src={insanityImg} alt='insanity' />
          <span>Insanity</span>
        </Link>
      </div>

      {/* <div className={strengthStyles.links}>
        <Link to={ROUTES.}>
          <img src={p90x2Img} alt='upper warmup' />
          <span>P90X2</span>
        </Link>
      </div> */}
    </animated.div>
  );
}

export default CardioPage;
