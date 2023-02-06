import PropTypes from 'prop-types';
import styles from "./Menu.module.css";
import DishCard from "../../common/components/DishCard";
import DishType from "../../types/DishType";

const Menu = ({ recipes }) => {
    const sortedRecipes = recipes
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className={styles.menu}>
            {
                sortedRecipes.map(recipe =>
                    <DishCard recipe={ recipe } key={`recipe-${ recipe.id }`} />
                )
            }
        </div>
    )
}

Menu.propTypes = {
    recipes: PropTypes.arrayOf(DishType).isRequired
};
Menu.defaultProps = {};

export default Menu;