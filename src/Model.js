import backEnd, { mockService } from './services/Backend';

const service = process.env.REACT_APP_MOCK === 'true' ? mockService : backEnd;

class Model {
	/**
	 *
	 * @param {number} userId
	 * @returns {Promise<{name: string, value: number}[]>}
	 */
	static getUser(userId) {
		return service.getUser(userId).then((result) => {
			return {
				id: result.id,
				keyData: result.keyData,
				score: result.score || result.todayScore,
				userInfos: result.userInfos,
			};
		});
	}
	/**
	 *
	 * @param {number} userId
	 * @returns {Promise<{name: string, value: number}[]>}
	 */
	static getActivity(userId) {
		return service.getActivity(userId).then((result) => {
			let i = 0;
			return result.sessions.map((element) => {
				return {
					name: ++i,
					kilogram: element.kilogram,
					calories: element.calories,
				};
			});
		});
	}

	/**
	 *
	 * @param {number} userId
	 * @returns {Promise<{name: string, value: number}[]>}
	 */
	static getAverageSessions(userId) {
		return service.getAverageSessions(userId).then((result) => {
			const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
			return result.sessions.map((element) => {
				return {
					name: week[element.day - 1],
					min: element.sessionLength,
				};
			});
		});
	}

	/**
	 *
	 * @param {number} userId
	 * @returns {Promise<{name: string, value: number}[]>}
	 */
	static getPerformance(userId) {
		return service.getPerformance(userId).then((result) => {
			return result.data.map((element) => {
				return {
					kind: result.kind[element.kind],
					value: element.value,
				};
			});
		});
	}
}

export default Model;
