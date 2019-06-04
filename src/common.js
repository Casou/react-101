export const sortPeople = (a, b) => {
	if (a.lastName === b.lastName) {
		return a.firstName.localeCompare(b.firstName);
	}
	return a.lastName.localeCompare(b.lastName);
};