import React, { useState } from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';

import Deck from '../Deck';

import { withAuthorization } from '../Session';

const P90X = () => {
  const [workout, setWorkout] = useState(null);

  const click = () => {
    setWorkout(null);
  }

  switch (workout) {
    case 'chestandback':
      return <Deck workout={'chestandback'} click={click} />;
    case 'shouldersandarms':
      return <Deck workout={'shouldersandarms'} click={click} />;
    case 'legsandback':
      return <Deck workout={'legsandback'} click={click} />;
    case 'chestshoulderstris':
      return <Deck workout={'chestshoulderstris'} click={click} />;
    case 'backandbiceps':
      return <Deck workout={'backandbiceps'} click={click} />;
    default:
      return (
        <div className={p90xStyles.container}>
          <h1 className={mainStyles.mainHeading}>P90X</h1>

          <h4>PHASE 1 - 3 wks</h4>
          <p onClick={() => setWorkout('chestandback')}>Chest and Back</p>
          <p onClick={() => setWorkout('shouldersandarms')}>Shoulders and Arms</p>
          <p onClick={() => setWorkout('legsandback')}>Legs and Back</p>

          <h4>PHASE 2 - 3 wks</h4>
          <p onClick={() => setWorkout('chestshoulderstris')}>Chest, Shoulders, Triceps</p>
          <p onClick={() => setWorkout('backandbiceps')}>Back and Biceps</p>
          <p onClick={() => setWorkout('legsandback')}>Legs and Back</p>

          <h4>PHASE 3 - Odd</h4>
          <p onClick={() => setWorkout('chestandback')}>Chest and Back</p>
          <p onClick={() => setWorkout('shouldersandarms')}>Shoulders and Arms</p>
          <p onClick={() => setWorkout('legsandback')}>Legs and Back</p>

          <h4>PHASE 3 - Even</h4>
          <p onClick={() => setWorkout('chestshoulderstris')}>Chest, Shoulders, Triceps</p>
          <p onClick={() => setWorkout('backandbiceps')}>Back and Biceps</p>
          <p onClick={() => setWorkout('legsandback')}>Legs and Back</p>
        </div>
      );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(P90X);
