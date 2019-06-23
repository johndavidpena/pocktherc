import React from 'react';
import cardStyles from '../../styles/card.module.css';

const Card = props => (
  <div className={cardStyles.card} key={props.exercise.id}>
    <h4>{props.exercise.exercise}</h4>
    <p>{props.exercise.description}</p>
    <p>Reps: {}</p>
    <p>Weight: {}</p>
  </div>
);

export default Card;
