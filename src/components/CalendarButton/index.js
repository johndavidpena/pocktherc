import React from 'react';
import calendarStyles from '../../styles/calendar.module.css';
import { Button } from '../Button';

const CalendarButton = props => (
  <div className={calendarStyles.container}>
    <Button
      element={'Add to Calendar'}
    // click={props.}
    />
  </div>
);

export default CalendarButton;