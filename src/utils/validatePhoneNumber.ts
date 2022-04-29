export const validatePhoneNumber = (str: string) => {
	const numbers = str.match(/\d+/g)?.join("") ?? "";
	return numbers.length === 11;
};
