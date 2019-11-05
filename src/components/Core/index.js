import React from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
// import videoStyles from '../../styles/video.module.css';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';
import cardStyles from '../../styles/card.module.css';

const Core = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={p90xStyles.container}>
      <h1 className={mainStyles.mainHeading}>Core</h1>

      <div className={cardStyles.mobility}>
        <div className={cardStyles.box}>
          <div className={cardStyles.wrapperWU}>
            <div className={cardStyles.container}>
              <section className={cardStyles.section}>
                <h4>Laird Hamilton #1</h4>
                <p></p>
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
                <h4>Laird Hamilton #2</h4>
                <p></p>
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
                <h4>Laird Hamilton #3</h4>
                <p></p>
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
                <h4>Laird Hamilton #4</h4>
                <p></p>
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
                <h4>Laird Hamilton #5</h4>
                <p></p>
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
                <h4>Laird Hamilton #6</h4>
                <p></p>
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
                <h4>Laird Hamilton #7</h4>
                <p></p>
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

export default withAuthorization(condition)(Core);
