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

const RecipeDialog = ({recipe, open}) => {
  return (
    <>
      <div id="modal1" className={classnames("modal", styles.modal, {
        [styles["modal__open"]]: open
      })}>
        <div className={"modal-content " + styles["modal-content"]}>
          <section>
            <img src={recipe.thumbnail} alt="Thumbnail" className={styles.thumbnail}/>
            <p>
              Ingrédients:
            </p>
            <Ingredients recipe={recipe} />
          </section>
          <section>
            <Title recipe={recipe} />
            <Category recipe={recipe} />
            <Instructions recipe={recipe} />

            {
              recipe.video &&
              <div className={styles["youtube-video"]}>
                <YoutubeVideo videoLink={recipe.video} />
              </div>
            }
          </section>
        </div>

        <div className="modal-footer">
          <CloseButton />
        </div>
      </div>

      <div className={classnames("modal-overlay", styles["modal-overlay"], {
        [styles["modal-overlay__open"]]: open
      })}/>
    </>
  )
};

RecipeDialog.propTypes = {
  recipe: DishType.isRequired,
  open: PropTypes.bool.isRequired,
};
RecipeDialog.defaultProps = {};

export default RecipeDialog;