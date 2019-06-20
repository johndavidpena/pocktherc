import React from 'react';
import Barbell from '../BarbellIcon';
import Cardio from '../CardioIcon';
import mainStyles from '../../styles/main.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { useSpring, animated } from 'react-spring';

import { withAuthorization } from '../Session';

const WorkoutPage = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade}>
      <h1 className={mainStyles.mainHeading}>POCKTHERC</h1>
      <Link to={ROUTES.STRENGTH}>
        <Barbell
          fill="#3994C1" // --light-blue-500
          width={200}
          className="barbell"
          style={{ background: 'transparent', width: '100%' }} />
      </Link>

      <Link to={ROUTES.CARDIO}>
        <Cardio
          fill="#D64545" // --red-400
          width={200}
          className="cardio"
          style={{ background: 'transparent', width: '100%' }}
        />
      </Link>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WorkoutPage);
