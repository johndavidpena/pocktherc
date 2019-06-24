import React, { useState } from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';

import Deck from '../Deck';

import { withAuthorization } from '../Session';

const P90X2 = () => {
  const [workout, setWorkout] = useState(null);

  const click = () => {
    setWorkout(null);
  }

  switch (workout) {
    case 'totalbody':
      return <Deck workout={'totalbody'} click={click} />;
    case 'balancepower':
      return <Deck workout={'balancepower'} click={click} />;
    case 'core':
      return <Deck workout={'core'} click={click} />;
    case 'chestback':
      return <Deck workout={'chestback'} click={click} />;
    case 'shouldersarms':
      return <Deck workout={'shouldersarms'} click={click} />;
    case 'baseback':
      return <Deck workout={'baseback'} click={click} />;
    case 'paplower':
      return <Deck workout={'paplower'} click={click} />;
    case 'chesttris':
      return <Deck workout={'chesttris'} click={click} />;
    case 'papupper':
      return <Deck workout={'papupper'} click={click} />;
    case 'vsculpt':
      return <Deck workout={'vsculpt'} click={click} />;
    default:
      return (
        <div className={p90xStyles.container}>
          <h1 className={mainStyles.mainHeading}>P90X2</h1>

          <h4>PHASE 1</h4>
          <p onClick={() => setWorkout('totalbody')}>Total Body</p>
          <p onClick={() => setWorkout('balancepower')}>Balance Power</p>
          <p onClick={() => setWorkout('core')}>Core</p>

          <h4>PHASE 2</h4>
          <p onClick={() => setWorkout('chestback')}>Chest Back</p>
          <p onClick={() => setWorkout('shouldersarms')}>Shoulders Arms</p>
          <p onClick={() => setWorkout('baseback')}>Base Back</p>

          <h4>PHASE 3</h4>
          <p onClick={() => setWorkout('paplower')}>PAP Lower</p>
          <p onClick={() => setWorkout('chesttris')}>Chest Tris</p>
          <p onClick={() => setWorkout('papupper')}>PAP Upper</p>
          <p onClick={() => setWorkout('vsculpt')}>V Sculpt</p>
        </div>
      );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(P90X2);
