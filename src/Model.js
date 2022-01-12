import backEnd from './services/Backend';

class Model {
	static getUser(userId) {
		return backEnd.getUser(userId).then((result) => {
			return {
				id: result.id,
				keyData: result.keyData,
				score: result.score || result.todayScore,
				userInfos: result.userInfos,
			};
		});
	}
}

export default Model;
