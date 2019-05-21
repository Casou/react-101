import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Icon, CardActionArea } from "@material-ui/core";

import './PersonCard.css';

const PersonCard = ({ person }) => (
  <Card classes={{ root : "person-card"}}>
    <CardActionArea>
      <CardMedia
        classes={{root : "card_media"}}
        image={person.photo}
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
);

const Info = ({ icon, desc, children }) => (
  <div className="card-info">
    <Icon title={desc || icon}>
      {icon}
    </Icon>
    <span>{children}</span>
  </div>
);


PersonCard.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    entity: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    managerId: PropTypes.string,
    manager: PropTypes.string
  }),
  onEdit: PropTypes.func
};

export default PersonCard;
