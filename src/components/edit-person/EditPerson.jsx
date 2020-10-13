import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardActions, TextField, Button} from "@material-ui/core";

import "./EditPerson.css";
import {withRouter} from "react-router-dom";

class EditPerson extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      person: { ...props.person }
    };
  }

  handleChange = property => event => {
    const {person} = this.state;
    person[property] = event.target.value;
    this.setState({person});
  };

  save = () => {
    const {onSave, history} = this.props;
    const {person} = this.state;

    onSave(person)
      .then(() => history.push("/"));
  };

  inputField = (attribute, label) =>
      <TextField
        label={label}
        value={this.state.person[attribute]}
        onChange={this.handleChange(attribute)}
        classes={{root: "input-field"}}
      />;

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

export default withRouter(EditPerson);