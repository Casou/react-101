import PropTypes from 'prop-types';
import DishType from "../../types/DishType";
import DishCard from "../../common/components/DishCard";
import styles from "./RandomDish.module.css"

const RandomDish = ({ recipes }) => {
    const recipe = recipes[Math.round(Math.random() * recipes.length)];
    return (
        <div className={styles.content}>
            <DishCard recipe={recipe} />
        </div>
    )
}

RandomDish.propTypes = {
  recipes: PropTypes.arrayOf(DishType).isRequired
};
RandomDish.defaultProps = {};

export default RandomDish;