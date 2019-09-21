import React, { useState, useEffect } from 'react';
import cardStyles from '../../styles/card.module.css';
import { Button } from '../Button';

import { withFirebase } from '../Firebase';

const CardBase = props => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    // Call to Firebase DB to get initial props
    // console.log(props); // Exercises 136-159 w id, exercise, description
    // props.firebase.fetchExercise(props);
  });

  const onSubmit = event => {
    event.preventDefault();
    // console.log(props.exercise.workout);

    props.firebase.saveExercise(props.exercise.id, props.exercise.workout, props.exercise.exercise, reps, weight);
  }

  return (
    <form
      className={cardStyles.card}
      key={props.exercise.id}
      onSubmit={onSubmit}
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
    </form>
  );
}

const Card = withFirebase(CardBase);

export default Card;
