import React from 'react';
import navStyles from './nav.module.css';
import { FiHome, FiSettings, FiUser, FiUserPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <React.Fragment>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
            <NavigationNonAuth />
          )
      }
    </AuthUserContext.Consumer>
  </React.Fragment>
);

const NavigationAuth = ({ authUser }) => (
  <ul className={navStyles.ul}>
    {/* <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li> */}
    <li>
      <Link to={ROUTES.WORKOUT}><FiHome /></Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}><FiUser /></Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}><FiSettings /></Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className={navStyles.ul}>
    {/* <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li> */}
    <li>
      <Link to={ROUTES.SIGN_IN}><FiUserPlus /></Link>
    </li>
  </ul>
);

export default Navigation;
