import React, { Component } from 'react';
import cardStyles from '../../styles/card.module.css';
import { Button } from '../Button';

import { withFirebase } from '../Firebase';

// TODO: Convert to functional component

class CardBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseId: this.props.exercise.id,
      exercise: this.props.exercise.exercise,
      reps: 0,
      weight: 0,
    }
  }

  async componentDidMount() {
    const exerciseRef = this.props.firebase.populateCards(this.state.exerciseId);
    let initialReps;
    let initialWeight;

    try {
      await exerciseRef.once('value', function (snapshot) {
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
    // NOTE: Originally only the 1 line of code below
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

        <div className={cardStyles.inputsWrapper}>
          <div className={cardStyles.inputs}>
            <label htmlFor="reps">Reps</label>
            <input
              name='reps'
              type='number'
              onChange={this.onChange}
              value={reps} />
          </div>

          <div className={cardStyles.inputs}>
            <label htmlFor="weight">Weight</label>
            <input
              name='weight'
              type='number'
              onChange={this.onChange}
              value={weight} />
          </div>
        </div>

        <Button type='submit'
          // value='Save'
          element={'Save'} />
      </form>
    );
  }
}

const Card = withFirebase(CardBase);

export default Card;
