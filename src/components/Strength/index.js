import React from 'react';
import mainStyles from '../../styles/main.module.css';
import strengthStyles from './strength.module.css';
import P90X2 from '../P90X2Icon';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { withAuthorization } from '../Session';

const StrengthPage = () => (
  <React.Fragment>
    <h1 className={mainStyles.mainHeading}>Strength</h1>

    <div className={strengthStyles.link}>
      <Link to={ROUTES.P90X2}>
        <P90X2
          fill="#3994C1" // --light-blue-500
          width={100}
          className="p90x2"
          style={{ background: 'transparent', width: '100%' }} />
      </Link>
    </div>

    <div className={strengthStyles.link}>
      <Link to={ROUTES.P90X2}>
        <P90X2
          fill="#3994C1" // --light-blue-500
          width={100}
          className="p90x2"
          style={{ background: 'transparent', width: '100%' }} />
      </Link>
    </div>

    <div className={strengthStyles.link}>
      <Link to={ROUTES.P90X2}>
        <P90X2
          fill="#3994C1" // --light-blue-500
          width={100}
          className="p90x2"
          style={{ background: 'transparent', width: '100%' }} />
      </Link>
    </div>
  </React.Fragment>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(StrengthPage);
