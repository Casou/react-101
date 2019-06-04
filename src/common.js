export const lpad = (number, width = 2, character = '0') => {
	number = number + '';
	return number.length >= width ? number : new Array(width - number.length + 1).join(character) + number;
};

export const sortPeople = (a, b) => {
	if (a.lastName === b.lastName) {
		return a.firstName.localeCompare(b.firstName);
	}
	return a.lastName.localeCompare(b.lastName);
};