import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PersonCard from "../../components/card/PersonCard";

const ListPeople = ({people}) => {
	console.log(people)
	return (
		<Fragment>
			{ people.map(p => <PersonCard person={p} key={ p.id } /> )}
		</Fragment>
	);
};

ListPeople.propTypes = {
	people: PropTypes.array.isRequired
};

export default ListPeople;