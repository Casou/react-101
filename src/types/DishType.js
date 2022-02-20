import PropTypes from "prop-types"

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  instructions: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  video: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
})