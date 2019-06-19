import React from 'react';
import PersonCard from 'components/PersonCard';

const Discover = ({ people }) => {
    const randomPerson = people[Math.floor(Math.random() * people.length)];
    return (
        <PersonCard person={randomPerson} />
    );
};

export default Discover;