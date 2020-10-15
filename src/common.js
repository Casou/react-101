export const lpad = (number, width = 2, character = '0') => {
	number = number + '';
	return number.length >= width ? number : new Array(width - number.length + 1).join(character) + number;
};
