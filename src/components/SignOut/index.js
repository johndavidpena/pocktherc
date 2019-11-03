import React from 'react';
import mainStyles from '../../styles/main.module.css';
import { FiUserX } from "react-icons/fi";
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button
    className={mainStyles.signOutButton}
    type="button"
    onClick={firebase.doSignOut}>
    <FiUserX />
  </button>
);

export default withFirebase(SignOutButton);
