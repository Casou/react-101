import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import PersonCard from "../list-people/components/person-card/PersonCard";

import './RandomPeople.css';

const RandomPeople = ({ people }) => {
	return (
		<main id={"random"}>
			<PersonCard person={ people[Math.floor(Math.random() * people.length)] } />
		</main>
	);
};

RandomPeople.propTypes = {
	people: PropTypes.array.isRequired
};

export default connect(state => ({
	people: state.people
}), null)(RandomPeople);