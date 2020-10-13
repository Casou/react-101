import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardActions, TextField, Button} from "@material-ui/core";

import "./EditPerson.css";
import {Redirect} from "react-router-dom";

class EditPerson extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      person: { ...props.person }
    };
  }

  save = () => {
    alert("Call onSave method (passed by props)");
  };

  render() {
    const {person} = this.state;
    const sex = person.sex === 1 ? "men" : "women";
    const photo = `https://randomuser.me/api/portraits/${sex}/${person.pictureIndex}.jpg`;
    return (
      <Card classes={{root: "edit-person"}}>
        <CardContent>
          <img src={photo} alt={photo}/>
          <section>
            <h1>{person.firstName} {person.lastName}</h1>
            <div>
              <TextField
                label={"Example"}
                value={"To customize"}
                classes={{root: "input-field"}}
              />
            </div>
          </section>
        </CardContent>
        <CardActions classes={{root: "edit-person__actions"}}>
          <Button variant="contained" className="edit-person__save" onClick={this.save}>
            Enregistrer
          </Button>
        </CardActions>
      </Card>
    );
  }
}

EditPerson.propTypes = {
  person: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
};

export default EditPerson;