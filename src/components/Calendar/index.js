import React, { useState, useEffect } from 'react';
import mainStyles from '../../styles/main.module.css';
import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

const CalendarBase = props => {
  const date = new Date().toISOString().slice(0, 10);

  const [entries, setEntries] = useState([]);
  const [program, setProgram] = useState('');
  const [workout, setWorkout] = useState('');

  // Called on first render only
  // useEffect(() => {
  //   const user = props.firebase.auth.currentUser.uid;

  //   props.firebase.calendar(user).once('value')
  //     .then(snapshot => {
  //       const entriesList = Object.values(snapshot.val());
  //       setEntries(entriesList);
  //     })
  //     .catch(err => console.log(err));
  // }, [props.firebase]);

  // Called on first render AND when a new workout is added
  useEffect(() => {
    const user = props.firebase.auth.currentUser.uid;

    props.firebase.calendar(user).on('value', function (snapshot) {
      if (snapshot.val() !== null) {
        const entriesList = Object.values(snapshot.val());
        setEntries(entriesList);
      }
    });

    return () => {
      props.firebase.calendar(user).off();
    };
  }, [props.firebase]);

  // FIX: Does not work for multiple workouts on same date, overwrites instead
  const addWorkout = (event, authUser) => {
    event.preventDefault();

    props.firebase.calendars(authUser.uid, date).set({
      // userId: authUser.uid,
      timestamp: props.firebase.serverValue.TIMESTAMP,
      workout,
      program,
      date,
    });

    setProgram('');
    setWorkout('');
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
            {/* FIX: input onChange causes data to jump around on screen */}
            <label htmlFor='program'>Strength</label>
            <input
              name='program'
              type='text'
              onChange={e => setProgram(e.target.value)}
              value={program}
              placeholder='Program' />
            <label htmlFor='workout'>Cardio</label>
            <input
              name='workout'
              type='text'
              onChange={e => setWorkout(e.target.value)}
              value={workout}
              placeholder='Workout' />
            <button type='submit'>Save</button>
          </form>

          {entries.reverse().map(entry => (
            <div className={mainStyles.workoutEntries} key={entry.timestamp}>
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
