import backEnd, { mockService } from "./services/Backend";

const service = process.env.REACT_APP_MOCK === "true" ? mockService : backEnd;

class Model {
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
}

export default Model;
