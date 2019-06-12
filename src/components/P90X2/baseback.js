import React, { useState } from 'react';
import p90xStyles from '../../styles/p90x.module.css';

import { useSprings, animated, interpolate } from 'react-spring';

const cards = [
  'https://res.cloudinary.com/mimas-music/image/upload/v1560367953/pocktherc/card1.jpg',
  'https://res.cloudinary.com/mimas-music/image/upload/v1560367953/pocktherc/card2.jpg',
  'https://res.cloudinary.com/mimas-music/image/upload/v1560367953/pocktherc/card3.jpg',
  'https://res.cloudinary.com/mimas-music/image/upload/v1560367953/pocktherc/card4.jpg'
];

const X2baseback = () => (
  <h1 className='mainHeading'>Base Back</h1>
);

export default X2baseback;
