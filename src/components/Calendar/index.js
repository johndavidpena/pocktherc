import React, { Component } from 'react';
import mainStyles from '../../styles/main.module.css';

import { Button } from '../Button';

import { withFirebase } from '../Firebase';

// TODO: Sort workouts by latest date
class CalendarBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toUTCString().replace(/\s/g, ""),
      program: '',
      workout: '',
      workoutEntries: []
    }
  }

  async componentDidMount() {
    const calendarRef = this.props.firebase.populateCalendar();
    let workoutEntries;

    try {
      // calendarRef.on won't work for some reason
      await calendarRef.once('value', function (snapshot) {
        if (snapshot.val() === null) return;

        workoutEntries = Object.entries(snapshot.val());
      });

      this.setState({
        workoutEntries
      });
    } catch (e) {
      console.log('Error at Calendar componentDidMount', e);
    }
  }

  onSubmit = event => {
    event.preventDefault();

    const { date, program, workout } = this.state;

    this.props.firebase.saveWorkoutDate(date, program, workout);
    // TODO:On saving a new workout, the list should update
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className={mainStyles.mainHeading}>Calendar</h1>
        <h3 className={mainStyles.subHeading}>Add Workout Below</h3>
        <form
          className={mainStyles.form}
          onSubmit={this.onSubmit}>
          <input
            name='program'
            type='text'
            onChange={this.onChange}
            value={this.state.program}
            placeholder='Program' />
          <input
            name='workout'
            type='text'
            onChange={this.onChange}
            value={this.state.workout}
            placeholder='Workout' />
          <Button type='submit'
            element={'Save'} />
        </form>

        {this.state.workoutEntries.map(item => (
          <div className={mainStyles.workoutEntries} key={item[0]}>
            <p>{item[0].slice(0, 13)}</p>
            <p>{item[1].program} - {item[1].workout}</p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

// FIX: With either option...on page reload, can't find uid of null
// const condition = authUser => !!authUser;

// export default compose(
//   withAuthorization(condition),
//   withFirebase,
// )(CalendarBase);

const Calendar = withFirebase(CalendarBase);

export default Calendar;
