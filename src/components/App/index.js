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
import P90X2totalbodyPage from '../P90X2/totalbody';
import P90X2chestbackPage from '../P90X2/chestback';
import P90X2shouldersarmsPage from '../P90X2/shouldersarms';
import P90X2basebackPage from '../P90X2/baseback';
import P90X2paplowerPage from '../P90X2/paplower';
import P90X2chestPage from '../P90X2/chest';
import P90X2papupperPage from '../P90X2/papupper';
import P90X2vsculptPage from '../P90X2/vsculpt';
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
      <Route path={ROUTES.P90X2TOTALBODY} component={P90X2totalbodyPage} />
      <Route path={ROUTES.P90X2CHESTBACK} component={P90X2chestbackPage} />
      <Route path={ROUTES.P90X2SHOULDERSARMS} component={P90X2shouldersarmsPage} />
      <Route path={ROUTES.P90X2BASEBACK} component={P90X2basebackPage} />
      <Route path={ROUTES.P90X2PAPLOWER} component={P90X2paplowerPage} />
      <Route path={ROUTES.P90X2CHEST} component={P90X2chestPage} />
      <Route path={ROUTES.P90X2PAPUPPER} component={P90X2papupperPage} />
      <Route path={ROUTES.P90X2VSCULPT} component={P90X2vsculptPage} />
      <Route path={ROUTES.CARDIO} component={CardioPage} />
      <Route path={ROUTES.INSANITY} component={InsanityPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
