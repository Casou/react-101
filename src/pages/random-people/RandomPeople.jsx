import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from "../list-people/components/person-card/PersonCard";
import Button from '@material-ui/core/Button';


import './RandomPeople.css';
import {withStorePeople} from "../../components/hoc/withStorePeople";

class RandomPeople extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			personIndex : 0
		};
	}

	componentDidMount() {
		this._updatePerson();
	}

	_updatePerson = () => {
		const { people } = this.props;
		this.setState({ personIndex : Math.floor(Math.random() * people.length) });
	}

	render() {
		const { people } = this.props;
		const { personIndex } = this.state;

		return (
			<main id={"random"}>
				<PersonCard person={ people[personIndex] } />
				<Button variant="contained" onClick={this._updatePerson}>Next</Button>
			</main>
		);
	}
	
};

RandomPeople.propTypes = {
	people: PropTypes.array.isRequired
};

export default withStorePeople(RandomPeople);