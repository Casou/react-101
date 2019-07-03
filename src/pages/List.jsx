import React, {Fragment} from 'react';
import PersonCard from "../components/person-card/PersonCard";

import './List.css';
import PersonDialog from "../components/person-dialog/PersonDialog";

export const sortPeople = (a, b) => {
  if (a.lastName === b.lastName) {
    return a.firstName.localeCompare(b.firstName);
  }
  return a.lastName.localeCompare(b.lastName);
};

class List extends React.Component {
  state = {
    dialogOpen: false,
    selectedPerson: null
  };

  openDialog = (person) => this.setState({
    dialogOpen: true,
    selectedPerson: person
  });

  closeDialog = () => this.setState({dialogOpen: false});

  render() {
    const {people} = this.props;
    const { dialogOpen, selectedPerson } = this.state;
    const sortedPeople = people.sort(sortPeople);
    return (
      <Fragment>
        <article id={"list-people"}>
          {
            sortedPeople.map(p =>
              <PersonCard key={p.id}
                          person={p}
                          onClick={() => this.openDialog(p)}
              />)
          }
        </article>

        <PersonDialog handleClose={this.closeDialog}
                      open={dialogOpen}
                      person={selectedPerson}
        />
      </Fragment>
    );
  }

}

export default List;