import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PersonCard from "../../components/card/PersonCard";
import SearchInput from "../../components/search-input/SearchInput";

import './ListPeople.css';

class ListPeople extends React.Component {

	state = {
		searchText: ""
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

		return people.filter(p => p.firstName.indexOf(searchText) >= 0 || p.lastName.indexOf(searchText) >= 0);
	};

	render() {
		const { searchText } = this.state;

		return (
			<Fragment>
				<SearchInput placeholder={"Chercher par nom"}
										 value={searchText}
										 onChange={this.searchChanged}
				/>
				<section id={"list-people"}>
					{ this.getFilteredPeople().map(p => <PersonCard person={p} key={ p.id } /> )}
				</section>
			</Fragment>
		);
	}
}

ListPeople.propTypes = {
	people: PropTypes.array.isRequired
};

export default ListPeople;