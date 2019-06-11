import React from 'react';
import { FiUserX } from "react-icons/fi";

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button
    className='signOutButton'
    type="button"
    onClick={firebase.doSignOut}>
    <FiUserX />
  </button>
);

export default withFirebase(SignOutButton);
