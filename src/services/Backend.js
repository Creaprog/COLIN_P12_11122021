const backEnd = {
	/**
	 *
	 * @param {number} userId
	 * @returns {array}
	 */
	getUser(userId) {
		return fetch(process.env.REACT_APP_URL + 'user/' + userId)
			.then((response) => response.json())
			.then((result) => result.data);
	},

	/**
	 *
	 * @param {number} userId
	 * @returns {array}
	 */
	getActivity(userId) {
		return fetch(process.env.REACT_APP_URL + 'user/' + userId + '/activity')
			.then((response) => response.json())
			.then((result) => result.data);
	},

	/**
	 *
	 * @param {number} userId
	 * @returns {array}
	 */
	getAverageSessions(userId) {
		return fetch(
			process.env.REACT_APP_URL + 'user/' + userId + '/average-sessions'
		)
			.then((response) => response.json())
			.then((result) => result.data);
	},

	/**
	 *
	 * @param {number} userId
	 * @returns {array}
	 */
	getPerformance(userId) {
		return fetch(process.env.REACT_APP_URL + 'user/' + userId + '/performance')
			.then((response) => response.json())
			.then((result) => result.data);
	},
};

// TODO: Mock mes calls pour les tests
export const mockService = {
	getUser(userId) {
		return new Promise((resolve) =>
			resolve({
				id: 12,
				userInfos: {
					firstName: 'Mock Karl',
					lastName: 'Dovineau',
					age: 31,
				},
				todayScore: 0.12,
				keyData: {
					calorieCount: 1930,
					proteinCount: 155,
					carbohydrateCount: 290,
					lipidCount: 50,
				},
			})
		);
	},
};

export default backEnd;
