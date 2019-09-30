import React from 'react';
import calendarStyles from '../../styles/calendar.module.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

const CalendarButtonBase = props => {
  const date = new Date().toISOString().slice(0, 10);

  const saveWorkout = (program, workout, authUser) => {

    props.firebase.calendars(authUser.uid, date).set({
      // userId: authUser.uid,
      timestamp: props.firebase.serverValue.TIMESTAMP,
      workout,
      program,
      date,
    });
  }

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div className={calendarStyles.container}>
          <Link to={ROUTES.CALENDAR}>
            <Button
              element={'Add to Calendar'}
              click={() => saveWorkout(props.program, props.workout, authUser)}
            />
          </Link>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
}

const CalendarButton = withFirebase(CalendarButtonBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(CalendarButton);
