import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from "../list-people/components/person-card/PersonCard";

import './RandomPeople.css';
import {withStorePeople} from "../../components/hoc/withStorePeople";

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

export default withStorePeople(RandomPeople);