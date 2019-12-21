import React, { useState } from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
import { useSpring, animated } from 'react-spring';
import Deck from '../Deck';
import { withAuthorization } from '../Session';

const P90X2 = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  const [workout, setWorkout] = useState(null);

  const click = () => {
    setWorkout(null);
  }

  switch (workout) {
    case 'totalbodycore':
      return <Deck workout={'totalbodycore'} click={click} />;
    case 'balancepowercore':
      return <Deck workout={'balancepowercore'} click={click} />;
    case 'chestbackbase':
      return <Deck workout={'chestbackbase'} click={click} />;
    case 'shouldersarmsbase':
      return <Deck workout={'shouldersarmsbase'} click={click} />;
    case 'paplowerchesttris':
      return <Deck workout={'paplowerchesttris'} click={click} />;
    case 'papuppervsculpt':
      return <Deck workout={'papuppervsculpt'} click={click} />;
    default:
      return (
        <animated.div style={fade} className={p90xStyles.container}>
          <h1 className={mainStyles.mainHeading}>P90X2</h1>

          <h4>PHASE 1</h4>
          <p onClick={() => setWorkout('totalbodycore')}>Total Body Core</p>
          <p onClick={() => setWorkout('balancepowercore')}>Balance Power Core</p>

          <h4>PHASE 2</h4>
          <p onClick={() => setWorkout('chestbackbase')}>Chest Back Base</p>
          <p onClick={() => setWorkout('shouldersarmsbase')}>Shoulders Arms Base</p>

          <h4>PHASE 3</h4>
          <p onClick={() => setWorkout('paplowerchesttris')}>PAP Lower Chest Tris</p>
          <p onClick={() => setWorkout('papuppervsculpt')}>PAP Upper V Sculpt</p>
        </animated.div>
      );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(P90X2);

// ORIGINAL < code className = "" >switch (workout) {
//   case 'totalbody':
//     return <Deck workout={'totalbody'} click={click} />;
//   case 'balancepower':
//     return <Deck workout={'balancepower'} click={click} />;
//   case 'core':
//     return <Deck workout={'core'} click={click} />;
//   case 'chestback':
//     return <Deck workout={'chestback'} click={click} />;
//   case 'shouldersarms':
//     return <Deck workout={'shouldersarms'} click={click} />;
//   case 'baseback':
//     return <Deck workout={'baseback'} click={click} />;
//   case 'paplower':
//     return <Deck workout={'paplower'} click={click} />;
//   case 'chesttris':
//     return <Deck workout={'chesttris'} click={click} />;
//   case 'papupper':
//     return <Deck workout={'papupper'} click={click} />;
//   case 'vsculpt':
//     return <Deck workout={'vsculpt'} click={click} />;
//   default:
//     return (
//       <animated.div style={fade} className={p90xStyles.container}>
//         <h1 className={mainStyles.mainHeading}>P90X2</h1>

//         <h4>PHASE 1</h4>
//         <p onClick={() => setWorkout('totalbody')}>Total Body</p>
//         <p onClick={() => setWorkout('balancepower')}>Balance Power</p>
//         <p onClick={() => setWorkout('core')}>Core</p>

//         <h4>PHASE 2</h4>
//         <p onClick={() => setWorkout('chestback')}>Chest Back</p>
//         <p onClick={() => setWorkout('shouldersarms')}>Shoulders Arms</p>
//         <p onClick={() => setWorkout('baseback')}>Base Back</p>

//         <h4>PHASE 3</h4>
//         <p onClick={() => setWorkout('paplower')}>PAP Lower</p>
//         <p onClick={() => setWorkout('chesttris')}>Chest Tris</p>
//         <p onClick={() => setWorkout('papupper')}>PAP Upper</p>
//         <p onClick={() => setWorkout('vsculpt')}>V Sculpt</p>
//       </animated.div>
//     );</code>