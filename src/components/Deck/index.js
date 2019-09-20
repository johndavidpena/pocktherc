import React from 'react';
import mainStyles from '../../styles/main.module.css';
import deckStyles from '../../styles/deck.module.css';
import Card from '../Card';
import CalendarButton from '../CalendarButton';

import * as WORKOUTS from '../../constants/workouts';

const Deck = props => {
  switch (props.workout) {
    // Start P90X2 workouts below
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
          <CalendarButton click={props.saveToCalendar} />
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
          <CalendarButton />
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
          <CalendarButton />
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
          <CalendarButton />
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
          <CalendarButton />
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
          <CalendarButton />
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
          <CalendarButton />
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
          <CalendarButton />
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
          <CalendarButton />
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
          <CalendarButton />
        </div>
      );
    // Start P90X workouts below
    // TODO: Update all to styles used below
    case 'chestandback':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X</h1>
            <h3>Chest and Back</h3>
          </div>
          {WORKOUTS.XCHESTBACK.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton />
        </div>
      );
    case 'shouldersandarms':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X</h1>
          <h3>Shoulders and Arms</h3>
          {WORKOUTS.XSHOULDERSARMS.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton />
        </div>
      );
    case 'legsandback':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X</h1>
          <h3>Legs and Back</h3>
          {WORKOUTS.XLEGSBACK.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton />
        </div>
      );
    case 'chestshoulderstris':
      return (
        <div className={deckStyles.deck}>
          <h1 className={mainStyles.mainHeading}
            onClick={props.click}>P90X</h1>
          <h3>Chest, Shoulders, Triceps</h3>
          {WORKOUTS.XCHESTSHOULDERSTRIS.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton />
        </div>
      );
    default:
      return null;
  }
}

export default Deck;
