const people = (state = {}, action) => {
	switch (action.type) {
		case "ALL_PEOPLE":
			return action.payload;
		case "UPDATE_PEOPLE":
			return replaceItem([...state], action.payload);
		default :
			return state;
	}
};

const replaceItem = (peopleList, person) => {
	const index = peopleList.findIndex(p => p.id === person.id);
	peopleList[index] = person;
	return peopleList;
};

export default people;
