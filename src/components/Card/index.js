import React from 'react';
import cardStyles from '../../styles/card.module.css';

const Card = props => (
  <div className={cardStyles.card} key={props.exercise.id}>
    <h4>{props.exercise.exercise}</h4>
    <p>Reps: {props.exercise.reps}</p>
    <p>Weight: {props.exercise.weight}</p>
  </div>
);

export default Card;
