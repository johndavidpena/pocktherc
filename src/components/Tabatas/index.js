import React from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
import videoStyles from '../../styles/video.module.css';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';

const Tabatas = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={p90xStyles.container}>
      <h1 className={mainStyles.mainHeading}>Tabatas</h1>

      <div className={videoStyles.videoResponsive}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XIeCMhNWFQQ" frameBorder="0" title='POPSUGAR Fitness' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </animated.div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Tabatas);
