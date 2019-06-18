import React from 'react';
import p90xStyles from '../../styles/p90x.module.css';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const P90X2 = () => (
  <div className={p90xStyles.container}>
    <h1 className='mainHeading'>P90X2</h1>

    <h4>PHASE 1</h4>
    <Link to={ROUTES.X2TOTALBODY}>
      <p>Total Body</p>
    </Link>
    <Link to={ROUTES.X2BALANCEPOWER}>
      <p>Balance Power</p>
    </Link>
    <Link to={ROUTES.X2CORE}>
      <p>Core</p>
    </Link>

    <h4>PHASE 2</h4>
    <Link to={ROUTES.X2CHESTBACK}>
      <p>Chest Back</p>
    </Link>
    <Link to={ROUTES.X2SHOULDERSARMS}>
      <p>Shoulders Arms</p>
    </Link>
    <Link to={ROUTES.X2BASEBACK}>
      <p>Base Back</p>
    </Link>

    <h4>PHASE 3</h4>
    <Link to={ROUTES.X2PAPLOWER}>
      <p>PAP Lower</p>
    </Link>
    <Link to={ROUTES.X2CHESTTRIS}>
      <p>Chest Tris</p>
    </Link>
    <Link to={ROUTES.X2PAPUPPER}>
      <p>PAP Upper</p>
    </Link>
    <Link to={ROUTES.X2VSCULPT}>
      <p>V Sculpt</p>
    </Link>
  </div>
);

export default P90X2;
