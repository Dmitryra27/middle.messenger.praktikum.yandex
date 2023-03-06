export const getFormData = () => {
	const result: { [key: string]: any } = {};
	const nodes = document.querySelectorAll("form input");

	// @ts-ignore
	nodes.forEach((input:HTMLInputElement) => {
		result[input.name] = input.value;
	});
	console.log('form_data = ', result);
	return result;
};
