import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

require('dotenv').config();

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** Read and populate calendar ***
  // populateCalendar = (date) => {
  populateCalendar = () => {
    // FIX: For some reason, cant find auth on page reload
    // console.log('Firebase.js, populateCalendar, this.auth.currentuser...', this.auth.currentUser);
    const calendarRef = this.db.ref(`calendars/${this.auth.currentUser.uid}`);

    return calendarRef;
  }
  // *** Save the date of a workout to the calendar ***
  saveWorkoutDate = (date, program, workout) => {
    // console.log('Saved date to calendar for user...', this.auth.currentUser.uid);

    this.db.ref(`calendars/${this.auth.currentUser.uid}/${date}`)
      .set({
        program,
        workout
      });
  }

  // *** Read and populate reps and weight ***
  populateCards = (exerciseId) => {
    // console.log(this.auth.currentUser);

    const exerciseRef = this.db.ref(`exercises/${this.auth.currentUser.uid}/${exerciseId}`);

    return exerciseRef;
  }

  // *** Save the reps and weight of a single exercise ***
  saveExercise = (exerciseId, exercise, reps, weight) => {
    // console.log('Saved to user', this.auth.currentUser.uid);

    this.db.ref(`exercises/${this.auth.currentUser.uid}/${exerciseId}`)
      .set({
        exercise,
        reps,
        weight
      });
  }

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');

  // *** Exercises API ***
  // exercises = uid => this.db.ref(`exercises/${uid}`);
}

export default Firebase;
