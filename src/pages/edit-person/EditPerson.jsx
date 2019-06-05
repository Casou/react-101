import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";

import "./EditPerson.css";
import {withStorePeople} from "../../components/hoc/withStorePeople";
import {Redirect} from "react-router-dom";

class EditPerson extends React.Component {

	constructor(props) {
		super(props);

		const id = parseInt(this.props.match.params.id);
		const person = this.props.people.find(p => p.id === id);

		this.state = {
			person,
			redirect: false
		};
	}

	handleChange = property => event => {
		const { person } = this.state;
		person[property] = event.target.value;
		this.setState({ person });
	};

	save = () => {
		const { onSave } = this.props;
		const { person } = this.state;

		onSave(person)
			.then(() => this.setState({ redirect : true }));
	};

	render() {
		const { person, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/people' />
		}

		const sex = person.sex === 1 ? "male" : "female";
		const photo = `/photos/${sex}/${person.pictureIndex}.jpg`;

		return (
			<Card classes={{ root : "edit-person"}}>
				<CardContent>
					<img src={ photo } alt={ photo } />
					<section>
						<h1>{person.firstName} {person.lastName}</h1>
						<div>
							<TextField
								label="First Name"
								value={person.firstName}
								onChange={this.handleChange('firstName')}
								classes={{ root : "input-field"}}
							/>
						</div>
						<div>
							<TextField
								label="Last Name"
								value={person.lastName}
								onChange={this.handleChange('lastName')}
								classes={{ root : "input-field"}}
							/>
						</div>
						<div>
							<TextField
								label="Email"
								value={person.email}
								onChange={this.handleChange('email')}
								classes={{ root : "input-field"}}
							/>
						</div>
						<div>
							<TextField
								label="Phone"
								value={person.phone}
								onChange={this.handleChange('phone')}
								classes={{ root : "input-field"}}
							/>
						</div>
					</section>
				</CardContent>
				<CardActions classes={{ root : "edit-person__actions" }}>
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

export default withStorePeople(EditPerson);