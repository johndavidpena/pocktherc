import React from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';

import { withAuthorization } from '../Session';

const Insanity = () => (
  <div className={p90xStyles.container}>
    <h1 className={mainStyles.mainHeading}>Insanity</h1>

    <h4>PHASE 1</h4>
    <p>Plyometric Cardio Circuit</p>
    <p>Cardio Power and Resistance</p>
    <p>Pure Cardio</p>

    <h4>PHASE 2</h4>
    <p>Max Interval Circuit</p>
    <p>Max Cardio Conditioning and Cardio</p>
    <p>Max Interval Plyo</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Insanity);
