import React, { useState, useEffect } from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
import Deck from '../Deck';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

const P90XBase = props => {
  const [workout, setWorkout] = useState(null);
  const [lastWorkout, setLastWorkout] = useState([]);

  const click = () => {
    setWorkout(null);
  }

  useEffect(() => {
    const user = props.firebase.auth.currentUser.uid;

    props.firebase.calendar(user).once('value')
      .then(snapshot => {
        if (snapshot.val() !== null) {
          const workoutList = Object.values(snapshot.val());

          setLastWorkout([
            workoutList[workoutList.length - 1].date,
            workoutList[workoutList.length - 1].program,
            workoutList[workoutList.length - 1].workout
          ]);
        }
      })
      .catch(err => console.log(err));
  }, [props.firebase]);

  switch (workout) {
    case 'chestandback':
      return <Deck workout={'chestandback'} click={click} />;
    case 'shouldersandarms':
      return <Deck workout={'shouldersandarms'} click={click} />;
    case 'legsandback':
      return <Deck workout={'legsandback'} click={click} />;
    case 'chestshoulderstris':
      return <Deck workout={'chestshoulderstris'} click={click} />;
    case 'backandbiceps':
      return <Deck workout={'backandbiceps'} click={click} />;
    default:
      return (
        <div className={p90xStyles.container}>
          <h1 className={mainStyles.mainHeading}>P90X</h1>

          <h4>PHASE 1 - 3 wks</h4>
          <div className={p90xStyles.workoutsContainer}>
            <p onClick={() => setWorkout('chestandback')}>Chest<br />Back</p>
            <p onClick={() => setWorkout('shouldersandarms')}>Shoulders<br />Arms</p>
            <p onClick={() => setWorkout('legsandback')}>Legs<br />Back</p>
          </div>

          <h4>PHASE 2 - 3 wks</h4>
          <div className={p90xStyles.workoutsContainer}>
            <p onClick={() => setWorkout('chestshoulderstris')}>Chest Tris<br />Shoulders</p>
            <p onClick={() => setWorkout('backandbiceps')}>Back<br />Biceps</p>
            <p onClick={() => setWorkout('legsandback')}>Legs<br />Back</p>
          </div>

          <h4>PHASE 3 - Odd</h4>
          <div className={p90xStyles.workoutsContainer}>
            <p onClick={() => setWorkout('chestandback')}>Chest<br />Back</p>
            <p onClick={() => setWorkout('shouldersandarms')}>Shoulders<br />Arms</p>
            <p onClick={() => setWorkout('legsandback')}>Legs<br />Back</p>
          </div>

          <h4>PHASE 3 - Even</h4>
          <div className={p90xStyles.workoutsContainer}>
            <p onClick={() => setWorkout('chestshoulderstris')}>Chest Tris<br />Shoulders</p>
            <p onClick={() => setWorkout('backandbiceps')}>Back<br />Biceps</p>
            <p onClick={() => setWorkout('legsandback')}>Legs<br />Back</p>
          </div>

          <div className={p90xStyles.lastWorkoutContainer}>
            <h3>Last Workout:</h3>
            <p>{lastWorkout[0]}</p>
            <p>{lastWorkout[1]}</p>
            <p>{lastWorkout[2]}</p>
          </div>
        </div>
      );
  }
}
const P90X = withFirebase(P90XBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(P90X);
