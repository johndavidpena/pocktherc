import React, { Component } from 'react';
import mainStyles from '../../styles/main.module.css';
// import calendarStyles from '../../styles/calendar.module.css';

import { Button } from '../Button';

import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';


class CalendarBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toUTCString().replace(/\s/g, ""),
      program: '',
      workout: '',
      dates: []
    }
  }

  async componentDidMount() {
    const calendarRef = this.props.firebase.populateCalendar();
    let dates = [];

    try {
      await calendarRef.once('value', function (snapshot) {
        if (snapshot.val() === null) return;

        dates.push(snapshot.val());
        console.log("TCL: CalendarBase -> componentDidMount -> snapshot", snapshot);
        // console.log("TCL: CalendarBase -> componentDidMount -> dates", dates)
      });

      this.setState({
        dates
      });
    } catch (e) {
      console.log('Error at Calendar componentDidMount', e);
    }
  }

  onSubmit = event => {
    event.preventDefault();

    const { date, program, workout } = this.state;

    this.props.firebase.saveWorkoutDate(date, program, workout);
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

        {/* <p>{this.state.dates}</p> */}
        {/* {this.state.dates[0].map(date => (
          <div>
            <p>{date.program}</p>
            <p>{date.workout}</p>
          </div>
        ))} */}
      </React.Fragment>
    );
  }
}

const condition = authUser => !!authUser;

// const Calendar = withFirebase(CalendarBase);

// export default withAuthorization(condition)(Calendar);

export default compose(
  withAuthorization(condition),
  withFirebase,
)(CalendarBase);