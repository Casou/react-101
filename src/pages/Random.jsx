import React, {Fragment} from 'react';
import PersonCard from '../components/person-card/PersonCard';
import {Button} from "@material-ui/core/es/index";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personIndex: 0
    };
  }

  _updatePeople = () => {
    const {people} = this.props;
    this.setState({personIndex: Math.floor(Math.random() * people.length)});
  };

  render() {
    const {people} = this.props;
    const {personIndex} = this.state;

    return (
      <Fragment>
        <PersonCard person={people[personIndex]}/>
        <Button variant="contained" onClick={this._updatePeople}>Next</Button>
      </Fragment>
    );
  };
}

export default Random;