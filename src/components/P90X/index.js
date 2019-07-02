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
    case '':
      return <Deck workout={''} click={click} />;
    case '':
      return <Deck workout={''} click={click} />;
    case '':
      return <Deck workout={''} click={click} />;
    case '':
      return <Deck workout={''} click={click} />;
    case '':
      return <Deck workout={''} click={click} />;
    case '':
      return <Deck workout={''} click={click} />;
    case '':
      return <Deck workout={''} click={click} />;
    default:
      return (
        <div className={p90xStyles.container}>
          <h1 className={mainStyles.mainHeading}>P90X</h1>

          <h4>PHASE 1</h4>
          <p onClick={() => setWorkout('chestandback')}>Chest and Back</p>
          <p onClick={() => setWorkout('shouldersandarms')}>Shoulders and Arms</p>
          <p onClick={() => setWorkout('legsandback')}>Legs and Back</p>

          <h4>PHASE 2</h4>
          <p onClick={() => setWorkout('')}></p>
          <p onClick={() => setWorkout('')}></p>
          <p onClick={() => setWorkout('')}></p>

          <h4>PHASE 3</h4>
          <p onClick={() => setWorkout('')}></p>
          <p onClick={() => setWorkout('')}></p>
          <p onClick={() => setWorkout('')}></p>
          <p onClick={() => setWorkout('')}></p>
        </div>
      );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(P90X);
