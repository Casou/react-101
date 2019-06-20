import React from 'react';
import PersonCard from './PersonCard';

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this._randomPeople()
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.setState({ 
            person: this._randomPeople()
        }), 2000);
    }

    _randomPeople() {
        return this.props.people[Math.floor(Math.random() * this.props.people.length)];
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { person } = this.state;
        return (
            <PersonCard person={person} />
        );
    };
}

export default Random;