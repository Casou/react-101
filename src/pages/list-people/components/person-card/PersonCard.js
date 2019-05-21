import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Card, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";

import './PersonCard.css';
import { personType } from "types/person-type";

const PersonCard = ({ person, onClick }) => (
  <article className={"card"} onClick={ () => onClick(person) }>
    <Card classes={{ root : "person-card"}}>
      <CardActionArea>
        <CardMedia
          classes={{root : "card_media"}}
          image={ `/photos/${ person.sex === 1 ? "male" : "female" }/${ person.pictureIndex }.jpg` }
          title={`Picture of ${person.firstName}`}
        />
        <CardContent>
          <Typography component="h2">
            <Link to={`/person/${person.id}`}>
              {person.firstName} {person.lastName}
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </article>
);

PersonCard.propTypes = {
  person: personType.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PersonCard;
