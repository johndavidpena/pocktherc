import React, { Component } from 'react';
import cardStyles from '../../styles/card.module.css';

import { withFirebase } from '../Firebase';

class CardBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseId: this.props.exercise.id,
      reps: '',
      weight: ''
    }
  }

  onSubmit = event => {
    event.preventDefault();

    const { exerciseId, reps, weight } = this.state;

    this.props.firebase.saveExercise(exerciseId, reps, weight)
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { exerciseId, reps, weight } = this.state;

    return (
      <form
        className={cardStyles.card}
        key={exerciseId}
        onSubmit={this.onSubmit}
      >
        <h4>{this.props.exercise.exercise}</h4>
        <p>{this.props.exercise.description}</p>
        <input
          name='reps'
          type='number'
          onChange={this.onChange}
          value={reps}
          placeholder='Reps' />
        <input
          name='weight'
          type='number'
          onChange={this.onChange}
          value={weight}
          placeholder='Weight' />
        <button type='submit'>Save</button>
      </form>

    );
  }
}

const Card = withFirebase(CardBase);

export default Card;
