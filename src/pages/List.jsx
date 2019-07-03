import React, {Fragment} from 'react';
import PersonCard from "../components/person-card/PersonCard";

import './List.css';

export const sortPeople = (a, b) => {
  if (a.lastName === b.lastName) {
    return a.firstName.localeCompare(b.firstName);
  }
  return a.lastName.localeCompare(b.lastName);
};

const List = ({people}) => {
  const sortedPeople = people.sort(sortPeople);
  return (
    <Fragment>
      <article id={"list-people"}>
        {
          sortedPeople.map(p =>
            <PersonCard key={p.id}
                        person={p}
            />)
        }
      </article>
    </Fragment>
  )
};

export default List;