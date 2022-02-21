import React from 'react';
import PropTypes from 'prop-types';
import DishType from "@/types/DishType";
import styles from "./RecipeDialog.module.css";
import YoutubeVideo from "./YoutubeVideo";
import Title from "./Title";
import Category from "./Category";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import CloseButton from "./CloseButton";
import classnames from "classnames";

const RecipeDialog = ({recipe, open, onClose}) => {
  return (
    <>
      <div id="modal1" className={classnames("modal", styles.modal, {
        [styles["modal__open"]]: open
      })}>
        <div className={"modal-content " + styles["modal-content"]}>
          <section>
            { recipe?.thumbnail && <img src={recipe.thumbnail} alt="Thumbnail" className={styles.thumbnail}/> }
            <p>
              Ingrédients:
            </p>
            <Ingredients data={recipe?.ingredients} />
          </section>
          <section>
            <Title name={recipe?.name} source={recipe?.source} />
            <Category name={recipe?.category} />
            <Instructions data={recipe?.instructions} />

            {
              recipe?.video &&
              <div className={styles["youtube-video"]}>
                <YoutubeVideo videoLink={recipe.video} />
              </div>
            }
          </section>
        </div>

        <div className="modal-footer">
          <CloseButton onClick={onClose} />
        </div>
      </div>

      <div className={classnames("modal-overlay", styles["modal-overlay"], {
        [styles["modal-overlay__open"]]: open
      })}/>
    </>
  )
};

RecipeDialog.propTypes = {
  recipe: DishType,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
RecipeDialog.defaultProps = {
  recipe: null,
  open: false,
};

export default RecipeDialog;