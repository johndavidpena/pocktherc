import React from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
import videoStyles from '../../styles/video.module.css';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';

const Shoulders = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={p90xStyles.container}>
      <h1 className={mainStyles.mainHeading}>Shoulders</h1>

      <div className={videoStyles.videoResponsive}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LVN5ZmjSvwE" frameBorder="0" title='Unity Gym' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <h4>Unity Shoulders</h4>
      <p>1. Lay perpendicular over a foam roller at the middle of the back. With hands behind the head, slowly stretch over the foam roller and then crunch forward. Repeat the motion 3 times and then move the foam roller up 1 inch. There are 12 vertebrae in the back, try to get each one. Avoid the neck.</p>
      <p>2. Do the above exercise with a double ball. Extend both arms straight out, deep breath in and out. Arms extended above the head, breath in and out. Bear hug the arms across the chest, breath in and out. Readjust the position of the ball and repeat.</p>
      <p>3. To stretch the bicep, lay on the stomach and outstretch 1 arm above the head at a 45 degree angle. Shoulder tight to the floor and arm tight to the floor with the index finger flat to the floor. Bring the opposite arm to the floor and the opposite foot as well. Push up from the opposite side of the body with the hand and foot to stretch the extended bicep.</p>
      <p>4. Roll the pectoral muscle over a ball while laying on the stomach. The point from the collar bone directly down to the bottom of the chest muscle.</p>
      <p>5. Lay parallel over a foam roller at the spine. With or without a weight in each hand, slowly outstretch the arms above the head and then back down to the sides of the shoulders.</p>
      <p>6. Requires a ring.</p>
      <p>6. Requires a pull up bar.</p>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Shoulders);
