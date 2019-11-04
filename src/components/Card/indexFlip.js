import React, { useState, useEffect } from 'react';
import mainStyles from '../../styles/main.module.css';
import cardStyles from '../../styles/card.module.css';
import { useSpring, animated } from 'react-spring';
import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

const CardBase = props => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [saved, setSaved] = useState('Save');

  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  useEffect(() => {
    const { workout, id } = props.exercise;
    const user = props.firebase.auth.currentUser.uid;

    props.firebase.exercises(workout, id, user).once('value')
      .then(snapshot => {
        if (snapshot.val() !== null && user === snapshot.val().userId) {
          setReps(snapshot.val().reps);
          setWeight(snapshot.val().weight);
        }
      })
      .catch(err => console.log(err));
  }, [props.firebase, props.exercise]);

  const saveExercise = (event, authUser) => {
    event.preventDefault();
    const { workout, exercise, id } = props.exercise;

    props.firebase.exercises(workout, id, authUser.uid).set({
      userId: authUser.uid,
      workout,
      exercise,
      id,
      reps,
      weight,
      createdAt: props.firebase.serverValue.TIMESTAMP,
    });

    setSaved('Saved');
  }

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div className={cardStyles.box} onClick={() => setFlipped(state => !state)}>
          <animated.div className={cardStyles.wrapper} style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
            <div className={cardStyles.container}>
              <form
                className={cardStyles.form}
                onSubmit={event => saveExercise(event, authUser)}
              >
                <h4>{props.exercise.exercise}</h4>

                <label htmlFor="reps">Reps</label>
                <input
                  className={cardStyles.input}
                  name='reps'
                  type='number'
                  onChange={e => setReps(e.target.value)}
                  value={reps} />

                <label htmlFor="weight">Weight</label>
                <input
                  className={cardStyles.input}
                  name='weight'
                  type='number'
                  onChange={e => setWeight(e.target.value)}
                  value={weight} />

                <button type='submit' className={mainStyles.button}>{saved}</button>
              </form>
            </div>
            <ul className={cardStyles.bgBubbles}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </animated.div>

          <animated.div className={cardStyles.wrapper} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
            <div className={cardStyles.descContainer}>
              <h4>{props.exercise.exercise}</h4>
              <p>{props.exercise.description}</p>
            </div>
          </animated.div>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
}

const Card = withFirebase(CardBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Card);
