import {getAllPeople} from "../../service/people";

export const loadPeople = () => (dispatch) => {
	return getAllPeople()
		.then(people =>
			dispatch({
				type: "ALL_PEOPLE",
				payload : people
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
