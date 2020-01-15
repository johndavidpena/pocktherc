import React from 'react';
import strengthStyles from '../../styles/strength.module.css';
// import insanityImg from '../../assets/insanityDuotone.jpg';
import insanity2Img from '../../assets/insanity2Duotone.jpg';
import tabataImg from '../../assets/tabataDuotone.jpg';
import p90x3Img from '../../assets/p90x3Duotone.jpg';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const CardioPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={strengthStyles.container}>
      <div className={strengthStyles.links}>
        <Link to={ROUTES.INSANITY}>
          <img src={insanity2Img} alt='insanity' />
          {/* <span>Insanity</span> */}
        </Link>
      </div>

      <div className={strengthStyles.links}>
        <Link to={ROUTES.P90X3}>
          <img src={p90x3Img} alt='p90x3' />
          {/* <span>P90X3</span> */}
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
