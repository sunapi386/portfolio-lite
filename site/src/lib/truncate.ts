export const truncate = (value: string, length: number): string => {
	let newValue = '';

	newValue += value.substr(0, length);

	if (value.length > 20) {
		newValue += '...';
	}

	return newValue;
};
