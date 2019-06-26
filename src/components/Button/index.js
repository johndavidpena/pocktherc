import React, { useState } from 'react';
import buttonStyles from '../../styles/button.module.css';
import { useSpring, animated } from 'react-spring';

export const Button = props => {
  const [clicked, set] = useState(false);
  const { scale } = useSpring({ scale: clicked ? 0.8 : 1 });

  return (
    <React.Fragment>
      <animated.button
        onMouseDown={() => set(true)}
        onMouseUp={() => set(false)}
        style={{ transform: scale.interpolate(s => `scale(${s})`) }}
        className={buttonStyles.button}
        onClick={props.click}
        value={props.value}
        children={props.element}
      />
    </React.Fragment>
  );
}
