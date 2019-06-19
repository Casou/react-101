import React from 'react';
import Card from './Card';

const avatar = (person) => (
    <Card.Avatar pictureIndex={ person.pictureIndex }></Card.Avatar>
);

const PersonCard = ({ person }) => (
    <Card avatar={ avatar(person) }>
        <Card.Title firstName={ person.firstName } lastName={ person.lastName }></Card.Title>
        <Card.Job job={ person.job }></Card.Job>
        <Card.Info icon="email">
            <a href={ `mailto:${person.email}` }>{ person.email }</a>
        </Card.Info>
        <Card.Info icon="phone">
        <a href={ `tel:${person.phone}` }>{ person.phone }</a>
        </Card.Info>
    </Card>
);

export default PersonCard;