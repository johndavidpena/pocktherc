import React from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
import videoStyles from '../../styles/video.module.css';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';
import cardStyles from '../../styles/card.module.css';

const Knees = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={p90xStyles.container}>
      <h1 className={mainStyles.mainHeading}>Knees</h1>

      <div className={videoStyles.videoResponsive}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_dE_awk1CUs" frameBorder="0" title='Strength Side' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className={cardStyles.mobility}>
        <div className={cardStyles.box}>
          <div className={cardStyles.wrapperWU}>
            <div className={cardStyles.container}>
              <section className={cardStyles.section}>
                <h4>Bulletproof Knees #1</h4>
                <p>Foam roll the lateral, outside top of the leg. Move to mid thigh and then outside of the knee.</p>
              </section>
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
          </div>
        </div>
        <div className={cardStyles.box}>
          <div className={cardStyles.wrapperWU}>
            <div className={cardStyles.container}>
              <section className={cardStyles.section}>
                <h4>Bulletproof Knees #2</h4>
                <p>Poloquin/Peterson Step Up. Stand on one foot with the heel elevated several inches and the toes on the ground. Keep the other foot off the ground. Press the ball of the foot into the ground and raise up to a straight leg. Keep the toes of the non-working leg curled.</p>
              </section>
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
          </div>
        </div>
        <div className={cardStyles.box}>
          <div className={cardStyles.wrapperWU}>
            <div className={cardStyles.container}>
              <section className={cardStyles.section}>
                <h4>Bulletproof Knees #3</h4>
                <p>Single leg calf raise. Stand on a step of some sort and do calf raises while squeezing the entire leg.</p>
              </section>
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
          </div>
        </div>
        <div className={cardStyles.box}>
          <div className={cardStyles.wrapperWU}>
            <div className={cardStyles.container}>
              <section className={cardStyles.section}>
                <h4>Bulletproof Knees #4</h4>
                <p>Knee circles. Stand with the knees together and hands on the knees. Slight bend and rotate both knees in both directions in a circular manner.</p>
              </section>
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
          </div>
        </div>
      </div>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Knees);
