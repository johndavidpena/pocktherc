import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import WorkoutPage from '../Workout';
import AdminPage from '../Admin';
import AccountPage from '../Account';
import StrengthPage from '../Strength';
import CardioPage from '../Cardio';
import P90X2Page from '../P90X2';
import X2totalbody from '../P90X2/totalbody';
import X2balancepower from '../P90X2/balancepower';
import X2core from '../P90X2/core';
import X2chestback from '../P90X2/chestback';
import X2shouldersarms from '../P90X2/shouldersarms';
import X2baseback from '../P90X2/baseback';
import X2paplower from '../P90X2/paplower';
import X2chesttris from '../P90X2/chesttris';
import X2papupper from '../P90X2/papupper';
import X2vsculpt from '../P90X2/vsculpt';
import InsanityPage from '../Insanity';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.WORKOUT} component={WorkoutPage} />
      <Route path={ROUTES.STRENGTH} component={StrengthPage} />
      <Route path={ROUTES.P90X2} component={P90X2Page} />
      <Route path={ROUTES.X2TOTALBODY} component={X2totalbody} />
      <Route path={ROUTES.X2BALANCEPOWER} component={X2balancepower} />
      <Route path={ROUTES.X2CORE} component={X2core} />
      <Route path={ROUTES.X2CHESTBACK} component={X2chestback} />
      <Route path={ROUTES.X2SHOULDERSARMS} component={X2shouldersarms} />
      <Route path={ROUTES.X2BASEBACK} component={X2baseback} />
      <Route path={ROUTES.X2PAPLOWER} component={X2paplower} />
      <Route path={ROUTES.X2CHESTTRIS} component={X2chesttris} />
      <Route path={ROUTES.X2PAPUPPER} component={X2papupper} />
      <Route path={ROUTES.X2VSCULPT} component={X2vsculpt} />
      <Route path={ROUTES.CARDIO} component={CardioPage} />
      <Route path={ROUTES.INSANITY} component={InsanityPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
