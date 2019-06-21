import React, { Component } from 'react';
import cardStyles from '../../styles/card.module.css';

import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  reps: '',
  weight: '',
  error: null
};

class CardFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { reps, weight } = this.state;

    this.props.firebase
      .doSaveExercise(reps, weight)
      .then((reps, weight) => {
        // Save the exercise reps and weight to Firebase DB
        return this.props.firebase
          .exercise(reps, weight)
          .set({
            reps,
            weight
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      reps,
      weight,
      duration,
      error
    } = this.state;

    return (
      <div className={cardStyles.card} key={this.props.exercise.id}>
        <h4>{this.props.exercise.exercise}</h4>

        <form onSubmit={this.onSubmit}>
          <input
            name='reps'
            value={reps}
            onChange={this.onChange}
            type='number'
            placeholder='Reps' />
          <input
            name='weight'
            value={weight}
            onChange={this.onChange}
            type='number'
            placeholder='Weight' />
          <input
            name='duration'
            value={duration}
            onChange={this.onChange}
            type='number'
            placeholder='Duration' />
          <button type="submit">Save</button>

          {error && <p>{error.message}</p>}
        </form>

        <p>{this.props.exercise.description}</p>
      </div>
    );
  }
}

const CardForm = compose(
  withFirebase,
)(CardFormBase);

export default CardForm;
