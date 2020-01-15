import React from 'react';
import strengthStyles from '../../styles/strength.module.css';
// import FireImg from '../../assets/warmDuoImage.jpg';
import p90xImg from '../../assets/p90xDuotone.jpg';
import p90x2Img from '../../assets/p90x2Duotone.jpg';
// import p90x2Img from '../../assets/db2Duotone.jpg';
// import bjj4Img from '../../assets/bjj4Duotone.jpg';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import * as ROUTES from '../../constants/routes';
import { withAuthorization } from '../Session';

const StrengthPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={strengthStyles.container}>
      <div className={strengthStyles.links}>
        <Link to={ROUTES.P90X}>
          <img src={p90xImg} alt='p90x' />
          {/* <span>P90X</span> */}
        </Link>
      </div>

      <div className={strengthStyles.links}>
        <Link to={ROUTES.P90X2}>
          <img src={p90x2Img} alt='p90x2' />
          {/* <span>P90X2</span> */}
        </Link>
      </div>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(StrengthPage);

// Original code...
// <animated.div style={fade} className={strengthStyles.container}>
//   <div className={strengthStyles.warmupsContainer}>
//     <div className={strengthStyles.warmupContainer}>
//       <Link to={ROUTES.UPPERWARMUP}>
//         <img src={FireImg} alt='upper warmup' />
//         <span>UPPER</span>
//       </Link>
//     </div>
//     <div className={strengthStyles.warmupContainer}>
//       <Link to={ROUTES.LOWERWARMUP}>
//         <img src={FireImg} alt='lower warmup' />
//         <span>LOWER</span>
//       </Link>
//     </div>
//   </div>

//   <div className={strengthStyles.links}>
//     <Link to={ROUTES.P90X}>
//       <img src={p90xImg} alt='upper warmup' />
//       <span>P90X</span>
//     </Link>
//   </div>

//   <div className={strengthStyles.links}>
//     <Link to={ROUTES.P90X2}>
//       <img src={p90x2Img} alt='upper warmup' />
//       <span>P90X2</span>
//     </Link>
//   </div>
// </animated.div>