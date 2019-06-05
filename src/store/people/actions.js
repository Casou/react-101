export const loadPeople = (getAllPeople) => (dispatch) => {
	return getAllPeople()
		.then(people =>
			dispatch({
				type: "ALL_PEOPLE",
				payload : people
			}));
};

export const savePerson = (updatePerson) => (dispatch) => {
	return updatePerson()
		.then(person =>
			dispatch({
				type: "UPDATE_PEOPLE",
				payload : person
			}));
};

// With action creators :
//
// export default {
//
// 	loadPeople: () => (dispatch) => {
// 		return getAllPeople()
// 			.then(people =>
// 				dispatch({
// 					type: "ALL_PEOPLE",
// 					payload : people
// 				}));
// 	}
// };
