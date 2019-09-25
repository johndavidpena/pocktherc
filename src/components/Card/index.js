import React, { useState, useEffect } from 'react';
import cardStyles from '../../styles/card.module.css';
import { Button } from '../Button';
// import ProgressButton from '../ProgressButton';

import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

const CardBase = props => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    const { workout, id } = props.exercise;
    const user = props.firebase.auth.currentUser.uid;

    props.firebase.exercises(workout, id, user).once('value')
      .then(snapshot => {
        if (snapshot.val() !== null && user === snapshot.val().userId) {
          setReps(snapshot.val().reps);
          setWeight(snapshot.val().weight);
        }
      })
      .catch(err => console.log(err));
  }, [props.firebase, props.exercise]);

  const saveExercise = (event, authUser) => {
    event.preventDefault();
    const { workout, exercise, id } = props.exercise;

    props.firebase.exercises(workout, id, authUser.uid).set({
      userId: authUser.uid,
      workout,
      exercise,
      id,
      reps,
      weight,
      createdAt: props.firebase.serverValue.TIMESTAMP,
    });
  }

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <form
          className={cardStyles.card}
          onSubmit={event => saveExercise(event, authUser)}
        >
          <h4>{props.exercise.exercise}</h4>
          <p>{props.exercise.description}</p>

          <div className={cardStyles.inputsWrapper}>
            <div className={cardStyles.inputs}>
              <label htmlFor="reps">Reps</label>
              <input
                name='reps'
                type='number'
                onChange={e => setReps(e.target.value)}
                value={reps} />
            </div>

            <div className={cardStyles.inputs}>
              <label htmlFor="weight">Weight</label>
              <input
                name='weight'
                type='number'
                onChange={e => setWeight(e.target.value)}
                value={weight} />
            </div>
          </div>

          <Button type='submit' element={'Save'} />
          {/* <ProgressButton type='submit' /> */}
        </form>
      )}
    </AuthUserContext.Consumer>
  );
}

const Card = withFirebase(CardBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Card);
