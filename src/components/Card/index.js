import React, { Component } from 'react';
import cardStyles from '../../styles/card.module.css';

import { withFirebase } from '../Firebase';

class CardBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseId: this.props.exercise.id,
      exercise: this.props.exercise.exercise,
      reps: null,
      weight: null
    }
  }

  async componentDidMount() {
    const exerciseRef = this.props.firebase.populateCards(this.state.exerciseId);
    // console.log('[Card.js] componentDidMount', exerciseRef);
    let initialReps;
    let initialWeight;

    try {
      await exerciseRef.once('value', function (snapshot) {
        // console.log(snapshot.val());
        // Handle if no data exists
        if (snapshot.val() === null) return;

        initialReps = snapshot.val().reps;
        initialWeight = snapshot.val().weight;
      });

      this.setState({
        reps: initialReps,
        weight: initialWeight
      });
    } catch (e) {
      console.log(e);
    }
  }

  onSubmit = event => {
    event.preventDefault();

    const { exerciseId, exercise, reps, weight } = this.state;

    this.props.firebase.saveExercise(exerciseId, exercise, reps, weight);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { reps, weight } = this.state;

    return (
      <form
        className={cardStyles.card}
        key={this.props.exercise.id}
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
