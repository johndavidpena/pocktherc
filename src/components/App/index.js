import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import WorkoutPage from '../Workout';
import AccountPage from '../Account';
import CalendarPage from '../Calendar';
import StrengthPage from '../Strength';
import UpperWarmupPage from '../UpperWarmup';
import LowerWarmupPage from '../LowerWarmup';
import CardioPage from '../Cardio';
import MovementPage from '../Movement';
import MobilityPage from '../Mobility';
import P90XPage from '../P90X';
import P90X2Page from '../P90X2';
import InsanityPage from '../Insanity';
import HipsPage from '../Hips';
import KneesPage from '../Knees';
import ShouldersPage from '../Shoulders';
import CorePage from '../Core';
import TabatasPage from '../Tabatas';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <Navigation />

    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.WORKOUT} component={WorkoutPage} />
    <Route path={ROUTES.CALENDAR} component={CalendarPage} />
    <Route path={ROUTES.STRENGTH} component={StrengthPage} />
    <Route path={ROUTES.UPPERWARMUP} component={UpperWarmupPage} />
    <Route path={ROUTES.LOWERWARMUP} component={LowerWarmupPage} />
    <Route path={ROUTES.P90X} component={P90XPage} />
    <Route path={ROUTES.P90X2} component={P90X2Page} />
    <Route path={ROUTES.CARDIO} component={CardioPage} />
    <Route path={ROUTES.MOVEMENT} component={MovementPage} />
    <Route path={ROUTES.INSANITY} component={InsanityPage} />
    <Route path={ROUTES.MOBILITY} component={MobilityPage} />
    <Route path={ROUTES.HIPS} component={HipsPage} />
    <Route path={ROUTES.KNEES} component={KneesPage} />
    <Route path={ROUTES.SHOULDERS} component={ShouldersPage} />
    <Route path={ROUTES.CORE} component={CorePage} />
    <Route path={ROUTES.TABATAS} component={TabatasPage} />
  </Router>
);

export default withAuthentication(App);
