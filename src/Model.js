const backEnd = {
	getMe(userId) {
		return fetch('http://localhost:4000/user/' + userId)
			.then((response) => response.json())
			.then((data) => data.data);
	},
};

export default backEnd;
