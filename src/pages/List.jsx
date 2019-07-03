import React, {Fragment} from 'react';
import PersonCard from "../components/person-card/PersonCard";

import './List.css';
import SearchInput from "../components/search-input/SearchInput";
import PersonDialog from "../components/person-dialog/PersonDialog";

export const sortPeople = (a, b) => {
  if (a.lastName === b.lastName) {
    return a.firstName.localeCompare(b.firstName);
  }
  return a.lastName.localeCompare(b.lastName);
};

class List extends React.Component {

  state = {
    searchText: "",
    dialogOpen: false,
    selectedPerson : null
  };

  _searchChanged = (e) => {
    this.setState({ searchText : e.target.value });
  };

  _filterPeople = () => {
    const { people } = this.props;
    const { searchText } = this.state;

    let filteredPeople = people;
    if (searchText) {
      filteredPeople = filteredPeople.filter(p =>
        p.lastName.toUpperCase().indexOf(searchText.toUpperCase()) >= 0
        || p.firstName.toUpperCase().indexOf(searchText) >= 0);
    }

    return filteredPeople.sort(sortPeople);
  };

  _openDialog = (selectedPerson) => this.setState({ dialogOpen : true, selectedPerson });
  _closeDialog = () => this.setState({ dialogOpen : false });

  render() {
    const { people } = this.props;
    const { searchText, dialogOpen, selectedPerson } = this.state;
    const sortedPeople = this._filterPeople(people);

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
                          onClick={() => this._openDialog(p)}
              />)
          }
        </article>

        <PersonDialog open={dialogOpen}
                      handleClose={this._closeDialog}
                      person={selectedPerson}
        />
      </Fragment>
    );
  }
}

export default List;