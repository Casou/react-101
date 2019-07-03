import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardActions, TextField, Button} from "@material-ui/core";

import "./EditPerson.css";
import {Redirect} from "react-router-dom";

class EditPerson extends React.Component {

  constructor(props) {
    super(props);

    const id = parseInt(props.match.params.id);
    const person = props.people.find(p => p.id === id);

    this.state = {
      person,
      redirect: false
    };
  }

  handleChange = property => event => {
    const {person} = this.state;
    person[property] = event.target.value;
    this.setState({person});
  };

  save = () => {
    const {onSave} = this.props;
    const {person} = this.state;

    onSave(person)
      .then(() => this.setState({redirect: true}));
  };

  inputField = (attribute, label) =>
      <TextField
        label={label}
        value={this.state.person[attribute]}
        onChange={this.handleChange(attribute)}
        classes={{root: "input-field"}}
      />;

  render() {
    const {person, redirect} = this.state;

    if (redirect) {
      return <Redirect to='/'/>
    }

    const photo = `https://uinames.com/api/photos/${ person.sex === 1 ? "male" : "female" }/${ person.pictureIndex }.jpg`;

    return (
      <Card classes={{root: "edit-person"}}>
        <CardContent>
          <img src={photo} alt={photo}/>
          <section>
            <h1>{person.firstName} {person.lastName}</h1>
            <div>
              { this.inputField("firstName", "First Name") }
            </div>
            <div>
              { this.inputField("lastName", "Last Name") }
            </div>
            <div>
              { this.inputField("email", "Email") }
            </div>
            <div>
              { this.inputField("phone", "Phone") }
            </div>
          </section>
        </CardContent>
        <CardActions classes={{root: "edit-person__actions"}}>
          <Button variant="contained" color="primary" onClick={this.save}>
            Enregistrer
          </Button>
        </CardActions>
      </Card>
    );
  }
}

EditPerson.propTypes = {
  people: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
};

export default EditPerson;