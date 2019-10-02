import React from 'react';
import workoutStyles from '../../styles/workout.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { useSpring, animated } from 'react-spring';
import strengthImg from '../../assets/strengthDuoImage.jpg';
import runImg from '../../assets/runDuoImage.jpg';
import mobilityImg from '../../assets/mobilityDuoImage.jpg';
import { withAuthorization } from '../Session';

const WorkoutPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={workoutStyles.container}>
      <div className={workoutStyles.links}>
        <Link to={ROUTES.STRENGTH}>
          <img src={strengthImg} alt='dumbbells' />
          <span>STRENGTH</span>
        </Link>
      </div>

      <div className={workoutStyles.links}>
        <Link to={ROUTES.CARDIO}>
          <img src={runImg} alt='running shoes' />
          <span>CARDIO</span>
        </Link>
      </div>

      <div className={workoutStyles.links}>
        <Link to={ROUTES.MOBILITY}>
          <img src={mobilityImg} alt='man jumping' />
          <span>MOBILITY</span>
        </Link>
      </div>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WorkoutPage);
