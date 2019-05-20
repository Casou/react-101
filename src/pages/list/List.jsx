import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
	return (
		<div>
			List
		</div>
	);
};

List.propTypes = {
	people: PropTypes.array.isRequired
};

export default List;