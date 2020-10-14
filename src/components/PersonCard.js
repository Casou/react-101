import React from 'react';
import Card from './Card';

const avatar = (person) => (
    <Card.Avatar pictureIndex={ person.pictureIndex }></Card.Avatar>
);

const PersonCard = ({ person }) => (
    <Card avatar={ avatar(person) }>
        <Card.Title firstName={ person.firstName } lastName={ person.lastName }></Card.Title>
        <Card.Job job={ person.job }></Card.Job>
        <Card.Email mail={ person.email } />
        <Card.Phone mail={ person.phone } />
    </Card>
);

export default PersonCard;