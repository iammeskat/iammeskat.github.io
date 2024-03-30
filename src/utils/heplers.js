export const convertTo2DArrayX = (arr, rows) => {
	const cols = Math.ceil(arr.length / rows);
	const result = [];

	for (let i = 0; i < arr.length; i += cols) {
		result.push(arr.slice(i, i + cols));
	}

	return result;
}

export const convertTo2DArray = (arr, rowsPerColumn) => {
	const columns = Math.ceil(arr.length / rowsPerColumn);
	const result = [];

	for (let i = 0; i < columns; i++) {
		const column = [];
		for (let j = 0; j < rowsPerColumn; j++) {
			const index = i * rowsPerColumn + j;
			if (index < arr.length) {
				column.push(arr[index]);
			}
		}
		result.push(column);
	}

	return result;
}

export const scrollToSection = (targetId) => {
	const targetSection = document.getElementById(targetId);
	if (targetSection) {
		targetSection.scrollIntoView({
			block: 'center',
			behavior: "instant",
		});
	}
};

export const shallowRoute = (title = '') => {
	window.history.replaceState(
		{},
		`${title} | Meskatul Islam`,
		`/${title.toLowerCase()}`
	);
	window.document.title = `${title} | Meskatul Islam - Software Engineer`
}