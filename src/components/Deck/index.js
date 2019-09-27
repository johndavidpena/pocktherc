import React from 'react';
import mainStyles from '../../styles/main.module.css';
import deckStyles from '../../styles/deck.module.css';
import Card from '../Card';
import CalendarButton from '../CalendarButton';

import * as WORKOUTS from '../../constants/workouts';

const Deck = props => {
  switch (props.workout) {
    // Start P90X workouts below
    case 'chestandback':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X</h1>
            <h3>Chest & Back</h3>
          </div>
          {WORKOUTS.XCHESTBACK.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.XCHESTBACK[0].workout}
            program={WORKOUTS.XCHESTBACK[0].program} />
        </div>
      );
    case 'shouldersandarms':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X</h1>
            <h3>Shoulders & Arms</h3>
          </div>
          {WORKOUTS.XSHOULDERSARMS.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.XSHOULDERSARMS[0].workout}
            program={WORKOUTS.XSHOULDERSARMS[0].program} />
        </div>
      );
    case 'legsandback':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X</h1>
            <h3>Legs & Back</h3>
          </div>
          {WORKOUTS.XLEGSBACK.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.XLEGSBACK[0].workout}
            program={WORKOUTS.XLEGSBACK[0].program} />
        </div>
      );
    case 'chestshoulderstris':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X</h1>
            <h3>Chest, Shoulders, Triceps</h3>
          </div>
          {WORKOUTS.XCHESTSHOULDERSTRIS.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.XCHESTSHOULDERSTRIS[0].workout}
            program={WORKOUTS.XCHESTSHOULDERSTRIS[0].program} />
        </div>
      );
    // Start P90X2 workouts below
    case 'totalbody':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>Total Body</h3>
          </div>
          {WORKOUTS.X2TOTALBODY.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2TOTALBODY[0].workout}
            program={WORKOUTS.X2TOTALBODY[0].program} />
        </div>
      );
    case 'balancepower':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>Balance & Power</h3>
          </div>
          {WORKOUTS.X2BALANCEPOWER.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2BALANCEPOWER[0].workout}
            program={WORKOUTS.X2BALANCEPOWER[0].program} />
        </div>
      );
    case 'core':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>Core</h3>
          </div>
          {WORKOUTS.X2CORE.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2CORE[0].workout}
            program={WORKOUTS.X2CORE[0].program} />
        </div>
      );
    case 'chestback':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>Chest & Back</h3>
          </div>
          {WORKOUTS.X2CHESTBACK.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2CHESTBACK[0].workout}
            program={WORKOUTS.X2CHESTBACK[0].program} />
        </div>
      );
    case 'shouldersarms':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>Shoulders & Arms</h3>
          </div>
          {WORKOUTS.X2SHOULDERSARMS.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2SHOULDERSARMS[0].workout}
            program={WORKOUTS.X2SHOULDERSARMS[0].program} />
        </div>
      );
    case 'baseback':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>Base & Back</h3>
          </div>
          {WORKOUTS.X2BASEBACK.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2BASEBACK[0].workout}
            program={WORKOUTS.X2BASEBACK[0].program} />
        </div>
      );
    case 'paplower':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>PAP Lower</h3>
          </div>
          {WORKOUTS.X2PAPLOWER.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2PAPLOWER[0].workout}
            program={WORKOUTS.X2PAPLOWER[0].program} />
        </div>
      );
    case 'chesttris':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>Chest & Triceps</h3>
          </div>
          {WORKOUTS.X2CHESTTRIS.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2CHESTTRIS[0].workout}
            program={WORKOUTS.X2CHESTTRIS[0].program} />
        </div>
      );
    case 'papupper':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>PAP Upper</h3>
          </div>
          {WORKOUTS.X2PAPUPPER.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2PAPUPPER[0].workout}
            program={WORKOUTS.X2PAPUPPER[0].program} />
        </div>
      );
    case 'vsculpt':
      return (
        <div className={deckStyles.deck}>
          <div className={deckStyles.heading}>
            <h1 className={mainStyles.mainHeading}
              onClick={props.click}>P90X2</h1>
            <h3>V Sculpt</h3>
          </div>
          {WORKOUTS.X2VSCULPT.map(exercise => (
            <Card exercise={exercise}
              key={exercise.id} />
          ))}
          <CalendarButton workout={WORKOUTS.X2VSCULPT[0].workout}
            program={WORKOUTS.X2VSCULPT[0].program} />
        </div>
      );
    default:
      return null;
  }
}

export default Deck;
