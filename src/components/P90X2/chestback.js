import React, { useState } from 'react';
import deckStyles from '../../styles/deck.module.css';

import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import Card from '../Card';
import { X2CHESTBACK } from '../../constants/workouts';

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck(props) {
  // The set flags all the cards that are flicked out
  const [gone] = useState(() => new Set());
  // Create a bunch of springs using the helpers above
  const [values, set] = useSprings(X2CHESTBACK.length, i => ({ ...to(i), from: from(i) }));
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    // If you flick hard enough it should trigger the card to fly out
    const trigger = velocity > 0.2;
    // Direction should either point left or right
    const dir = xDir < 0 ? -1 : 1;

    // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    if (!down && trigger) gone.add(index);

    set(i => {
      // We're only interested in changing spring-data for the current spring
      if (index !== i) return;

      const isGone = gone.has(index);
      // When a card is gone it flys out left or right, otherwise goes back to zero
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
      // How much the card tilts, flicking it harder makes it rotate faster
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
      // Active cards lift up a bit
      const scale = down ? 1.1 : 1;

      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    });

    if (!down && gone.size === X2CHESTBACK.length) setTimeout(() => gone.clear() || set(i => to(i)), 600);
  });
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return values.map(({ x, y, rot, scale }, i) => (
    <animated.div className={deckStyles.deck} key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }}>
        <Card exercise={props.workout[i]} />
      </animated.div>
    </animated.div>
  ));
}

const chestback = () => (
  <Deck workout={X2CHESTBACK} />
);

export default chestback;
