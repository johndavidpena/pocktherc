import React from 'react';
import mainStyles from '../../styles/main.module.css';
import deckStyles from '../../styles/deck.module.css';
import Card from '../Card';

import * as WORKOUTS from '../../constants/workouts';

const Deck = props => {
  switch (props.workout) {
    case 'totalbody':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>Total Body</h3>
          {WORKOUTS.X2TOTALBODY.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'balancepower':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>Balance and Power</h3>
          {WORKOUTS.X2BALANCEPOWER.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'core':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>Core</h3>
          {WORKOUTS.X2CORE.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'chestback':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>Chest and Back</h3>
          {WORKOUTS.X2CHESTBACK.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'shouldersarms':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>Shoulders and Arms</h3>
          {WORKOUTS.X2SHOULDERSARMS.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'baseback':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>Base and Back</h3>
          {WORKOUTS.X2BASEBACK.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'paplower':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>PAP Lower</h3>
          {WORKOUTS.X2PAPLOWER.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'chesttris':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>Chest and Triceps</h3>
          {WORKOUTS.X2CHESTTRIS.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'papupper':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>PAP Upper</h3>
          {WORKOUTS.X2PAPUPPER.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    case 'vsculpt':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X2</h1>
          <h3>V Sculpt</h3>
          {WORKOUTS.X2VSCULPT.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default Deck;
