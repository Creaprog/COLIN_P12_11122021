const backEnd = {
	getUser(userId) {
		return fetch(process.env.REACT_APP_URL + 'user/' + userId).then(
			(response) => response.json()
		);
	},
	getActivity(userId) {
		return fetch(
			process.env.REACT_APP_URL + 'user/' + userId + '/activity'
		).then((response) => response.json());
	},
	getAverageSessions(userId) {
		return fetch(
			process.env.REACT_APP_URL + 'user/' + userId + '/average-sessions'
		).then((response) => response.json());
	},
};

// TODO Mock mes calls pour les tests
const mockService = {
	getUser(userId) {
		return new Promise((resolve) => resolve({Ici}) );
	},
}

export default backEnd;
