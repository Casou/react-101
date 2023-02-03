import PropTypes from "prop-types";

const DishType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  video: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  source: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
})

export default DishType