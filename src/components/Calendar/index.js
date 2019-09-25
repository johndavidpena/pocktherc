import React, { useState, useEffect } from 'react';
import mainStyles from '../../styles/main.module.css';
import calendarStyles from '../../styles/calendar.module.css';
import { Button } from '../Button';

import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

// Step 2: Add 'Save to Calendar' function to CalendarButton

// export const CalendarButton = () => (
//   <div className={calendarStyles.container}>
//     <Button
//       element={'Add to Calendar'}
//        click={addWorkout}
//     />
//   </div>
// );

const CalendarBase = props => {
  const date = new Date().toISOString().slice(0, 10);

  const [entries, setEntries] = useState([]);
  const [program, setProgram] = useState('');
  const [workout, setWorkout] = useState('');

  useEffect(() => {
    const user = props.firebase.auth.currentUser.uid;

    // TODO: Change once to on so new data gets updated on save
    // TODO: Order by most recent date
    props.firebase.calendar(user).once('value')
      .then(snapshot => {
        // console.log('snapshot.val() is', snapshot.val());
        const entriesList = Object.values(snapshot.val());
        console.log("TCL: entriesList", entriesList);
        setEntries(entriesList);
      })
      .catch(err => console.log(err));
  }, [props.firebase]);

  // FIX: Does not work for multiple workouts on same date, overwrites instead
  const addWorkout = (event, authUser) => {
    event.preventDefault();

    props.firebase.calendars(authUser.uid, date).set({
      // userId: authUser.uid,
      workout,
      program,
      date,
    });
  }

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <React.Fragment>
          <h1 className={mainStyles.mainHeading}>Calendar</h1>
          <h3 className={mainStyles.subHeading}>Add Workout Below</h3>
          <form
            className={mainStyles.form}
            onSubmit={event => addWorkout(event, authUser)}>
            <input
              name='program'
              type='text'
              onChange={e => setProgram(e.target.value)}
              value={program}
              placeholder='Program' />
            <input
              name='workout'
              type='text'
              onChange={e => setWorkout(e.target.value)}
              value={workout}
              placeholder='Workout' />
            <Button type='submit'
              element={'Save'} />
          </form>

          {entries.map(entry => (
            <div className={mainStyles.workoutEntries} key={entry.date}>
              <p>{entry.date}</p>
              <p>{entry.program} - {entry.workout}</p>
            </div>
          ))}
        </React.Fragment>
      )}
    </AuthUserContext.Consumer>
  );
}

const Calendar = withFirebase(CalendarBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Calendar);
