import React from 'react';
import mainStyles from '../../styles/main.module.css';
import cardioStyles from './cardio.module.css';
import Insanity from '../InsanityIcon';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const CardioPage = () => (
  <React.Fragment>
    <h1 className={mainStyles.mainHeading}>Cardio</h1>

    <div className={cardioStyles.link}>
      <Link to={ROUTES.INSANITY}>
        <Insanity
          fill="#D64545" // --red-400
          width={100}
          className="insanity"
          style={{ background: 'transparent', width: '100%' }} />
      </Link>
    </div>

    <div className={cardioStyles.link}>
      <Link to={ROUTES.INSANITY}>
        <Insanity
          fill="#D64545" // --red-400
          width={100}
          className="insanity"
          style={{ background: 'transparent', width: '100%' }} />
      </Link>
    </div>
  </React.Fragment>
);

export default CardioPage;
