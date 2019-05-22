export default {

	getAllPeople: () => dispatch => {
		return fetch('/api/people')
			.then(res => res.json())
			.then(people => {
				return dispatch({
					type: "ALL_PEOPLE",
					payload: people
				})
			});
	},

};