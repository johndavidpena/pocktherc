import React from 'react';
import workoutStyles from './workout.module.css';
import Barbell from '../BarbellIcon';
import Cardio from '../CardioIcon';

import { withAuthorization } from '../Session';

const WorkoutPage = () => (
  <div className={workoutStyles.wrapper}>
    <h1 className='mainHeading'>POCKTHERC</h1>
    <Barbell
      fill="#3994C1" // --light-blue-500
      width={200}
      className="barbell"
      style={{ background: 'transparent', width: '100%' }} />
    <Cardio
      fill="#D64545" // --red-400
      width={200}
      className="cardio"
      style={{ background: 'transparent', width: '100%' }}
    />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WorkoutPage);
