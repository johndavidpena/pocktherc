import React from 'react';
import mainStyles from '../../styles/main.module.css';
import p90xStyles from '../../styles/p90x.module.css';
import videoStyles from '../../styles/video.module.css';
import { useSpring, animated } from 'react-spring';
import { withAuthorization } from '../Session';
import cardStyles from '../../styles/card.module.css';

const Hips = () => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className={p90xStyles.container}>
      <h1 className={mainStyles.mainHeading}>Hips</h1>

      <div className={cardStyles.mobility}>
        <div className={cardStyles.box}>
          <div className={cardStyles.wrapperWU}>
            <div className={cardStyles.container}>
              <section className={cardStyles.section}>
                <h4>Glute Medius #1</h4>
                <p>Lay on one side. Raise the top leg up and down 10 times.</p>
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
                <h4>Glute Medius #2</h4>
                <p>On one side, bring the top leg forwards towards the face and back to the starting position 10 times.</p>
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
                <h4>Glute Medius #3</h4>
                <p>On one side, take the top leg backwards along the floor and return to the starting position 10 times.</p>
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
                <h4>Glute Medius #4</h4>
                <p>On one side, take the top leg forwards and then backwards in the full range of motion 10 times.</p>
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
                <h4>Glute Medius #5</h4>
                <p>On one side, circle the top leg clockwise in roughly a 12 inch radius 10 times.</p>
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
                <h4>Glute Medius #6</h4>
                <p>On one side, circle the top leg counter-clockwise in roughly a 12 inch radius 10 times.</p>
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
                <h4>Glute Medius #7</h4>
                <p>On one side, do a bicycle pedalling motion 10 times. Repeat the entire sequence with the other leg.</p>
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

      <div className={videoStyles.videoResponsive}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/O9eOsGM-B6U" frameBorder="0" title='Unity Gym' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className={cardStyles.mobility}>
        <div className={cardStyles.box}>
          <div className={cardStyles.wrapperWU}>
            <div className={cardStyles.container}>
              <section className={cardStyles.section}>
                <h4>Hip Mobility #1</h4>
                <p>Sit on the ground and make an 'S' with your legs. The front leg extends forwards in a pigeon-type position. The back leg extends backwards. Lean forward and to the sides. Optionally, raise the front leg up a couple of minutes.</p>
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
                <h4>Hip Mobility #2</h4>
                <p>Place 2 blocks at the sides, get into a runners lunge with the back knee on the floor. Hold the tops of the blocks with the hands, tilt the pelvis forwards, then push the back heel backwards. Active stretch for 5 to 10 counts.</p>
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
                <h4>Hip Mobility #3</h4>
                <p>Stand on one foot with the opposite foot raised an inch off the ground or resting on the other ankle. Place the tops of the hands at the small of the back. Keep the standing leg straight and bend down and up slowly for a number of times. Hold the final rep for 10 breaths. Optionally, add dumbbells for some resistance.</p>
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

      <div className={videoStyles.videoResponsive}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cwtx6IWZjRg" title='Unity Gym' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className={cardStyles.mobility}>
        <div className={cardStyles.box}>
          <div className={cardStyles.wrapperWU}>
            <div className={cardStyles.container}>
              <section className={cardStyles.section}>
                <h4>Middle Splits #1</h4>
                <p>Cameron Shane 'kung fu stretches' (or Cossack squat) side to side. Do at least 10 reps.</p>
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
                <h4>Middle Splits #2</h4>
                <p>Place each foot on a slider of some sort and place a stool or bench in front of you for support. Tilt the pelvis forwards and engage the core. Slowly go into the splits using gravity, keep everything tight and come back up with the support. Hold the last one for 10 counts.</p>
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
                <h4>Middle Splits #3</h4>
                <p>Do a passive middle splits while sitting on the ground. Use a band or support post to pull with the arms. Move in a cat-cow manner with the spine hunched over to fully extended.</p>
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
                <h4>Middle Splits #4</h4>
                <p>Do a passive middle splits while sitting on the ground. With one hand behind the body and the other in front, lift up and scoot more into the splits. Hold and repeat. Toes pointed and pulled back.</p>
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
                <h4>Middle Splits #5</h4>
                <p>Stand on one leg and hold onto a post with the same arm for balance. Raise the opposite leg up in a high kick position. Slowly extend the knee into a kick position and retract. Repeat 10 to 20 times. Switch legs.</p>
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

export default withAuthorization(condition)(Hips);
