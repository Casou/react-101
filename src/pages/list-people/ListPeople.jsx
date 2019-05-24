import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PersonCard from "./components/person-card/PersonCard";
import SearchInput from "./components/search-input/SearchInput";

import './ListPeople.css';
import PersonDialog from "./components/person-dialog/PersonDialog";
import {connect} from "react-redux";
import { CircularProgress } from "@material-ui/core";

class ListPeople extends React.Component {

	state = {
		searchText: "",
		selectedPerson: null,
		dialogOpen : false
	};

	searchChanged = (e) => {
		this.setState({ searchText : e.target.value });
	};

	getFilteredPeople = () => {
		const { people } = this.props;
		const { searchText } = this.state;

		if (!searchText) {
			return people;
		}

		return people.filter(p => p.firstName.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
			|| p.lastName.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
	};

	openDialog = (person) => {
		this.setState({ dialogOpen : true, selectedPerson: person });
	};

	closeDialog = () => {
		this.setState({ dialogOpen : false });
	};

	render() {
		const { people } = this.props;
		const { searchText, dialogOpen, selectedPerson } = this.state;

		if (!people.length) {
			return (
				<CircularProgress />
			);
		}

		return (
			<Fragment>
				<SearchInput placeholder={"Chercher par nom"}
										 value={searchText}
										 onChange={this.searchChanged}
				/>

				<article id={"list-people"}>
					{
						this.getFilteredPeople().map(p =>
							<PersonCard key={ p.id }
													person={p}
													onClick={this.openDialog}
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

ListPeople.propTypes = {
	people: PropTypes.array.isRequired
};

export default connect(state => ({
	people: state.people
}), null)(ListPeople);