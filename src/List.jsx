import React, {Fragment} from 'react';
import PersonCard from "./components/person-card/PersonCard";

import './List.css';

const List = ({people}) => {
  return (
    <Fragment>
      <article id={"list-people"}>
        {
          people
						.sort((a, b) => a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName))
            .map(p =>
              <PersonCard key={p.id}
                          person={p}
              />)
        }
      </article>
    </Fragment>
  )
};

export default List;