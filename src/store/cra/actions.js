export default {

	getAllCraItems: () => dispatch => {
		return fetch('/api/cra')
			.then(res => res.json())
			.then(cra => {
				return dispatch({
					type: "ALL_CRA_ITEMS",
					payload: cra
				})
			});
	},

};