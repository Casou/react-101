import * as PropTypes from "prop-types";

export const personType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	pictureIndex: PropTypes.number.isRequired,
	sex: PropTypes.number.isRequired
});
