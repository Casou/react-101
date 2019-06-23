import React from 'react';
import PersonCard from '../components/person-card/PersonCard';

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personIndex : 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this._updatePeople, 2000);
    }

    _updatePeople = () => {
        const {people} = this.props;
        this.setState({ personIndex: Math.floor(Math.random() * people.length) });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { people } = this.props;
        const { personIndex } = this.state;

        return (
            <PersonCard person={people[personIndex]} />
        );
    };
}

export default Random;