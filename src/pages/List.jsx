import React, {Fragment} from 'react';
import PersonCard from "../components/person-card/PersonCard";

import './List.css';
import SearchInput from "../components/search-input/SearchInput";

export const sortPeople = (a, b) => {
  if (a.lastName === b.lastName) {
    return a.firstName.localeCompare(b.firstName);
  }
  return a.lastName.localeCompare(b.lastName);
};

class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    }
  }

  _searchChanged = (e) => {
    this.setState({ searchText : e.target.value });
  };

  render() {
    const { people } = this.props;
    const { searchText } = this.state;
    const sortedPeople = people.sort(sortPeople);
    return (
      <Fragment>
        <SearchInput placeholder={"Chercher par nom"}
                     value={searchText}
                     onChange={this._searchChanged}
        />

        <article id={"list-people"}>
          {
            sortedPeople.map(p =>
              <PersonCard key={p.id}
                          person={p}
              />)
          }
        </article>
      </Fragment>
    );
  }
}

export default List;