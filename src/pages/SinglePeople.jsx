import React from 'react';
import PersonCard from "../components/person-card/PersonCard";

const SinglePeople = (props) => (
  <PersonCard person={props.person}/>
);

export default SinglePeople;