import React from 'react';
import PropTypes from 'prop-types';
import recipes from "../_data/recipes.json";
import Dish from "./Dish";

class RandomDish extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dishId: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this._updateDish, 2000);
  }

  _updateDish = () => {
    this.setState({
      dishId: Math.floor(Math.random() * recipes.length)
    })
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


  render() {
    const { recipes } = this.props;
    const { dishId } = this.state;

    const randomDish = recipes[dishId];

    return (
      <Dish picture={<Dish.Picture dish={randomDish}/>}>
        <Dish.Title dish={randomDish}/>
        <Dish.Category dish={randomDish}/>
        <Dish.VideoLink dish={randomDish}/>
        <Dish.ThumbnailLink dish={randomDish}/>
      </Dish>
    )
  }
}

RandomDish.propTypes = {};
RandomDish.defaultProps = {};

export default RandomDish;