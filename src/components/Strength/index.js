import React from 'react';
import mainStyles from '../../styles/main.module.css';
import strengthStyles from './strength.module.css';
import P90Ximg from '../../assets/p90x.png';
import P90X2img from '../../assets/p90x2.png';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { withAuthorization } from '../Session';

const StrengthPage = () => (
  <React.Fragment>
    <h1 className={mainStyles.mainHeading}>Strength</h1>

    <div className={strengthStyles.link}>
      <Link to={ROUTES.P90X}>
        <img src={P90Ximg} alt="P90X icon" />
      </Link>
    </div>

    <div className={strengthStyles.link}>
      <Link to={ROUTES.P90X2}>
        <img src={P90X2img} alt="P90X2 icon" />
      </Link>
    </div>
  </React.Fragment>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(StrengthPage);
