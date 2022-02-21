import PropTypes from 'prop-types';
import DishType from "@/types/DishType";
import DishCard from "@/common/components/DishCard";

const RandomDish = ({ recipes }) => {
    const recipe = recipes[Math.round(Math.random() * recipes.length)];
    return (
        <div>
            <DishCard recipe={recipe} />
        </div>
    )
}

RandomDish.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired
};
RandomDish.defaultProps = {};

export default RandomDish;