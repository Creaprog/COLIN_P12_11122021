import useCallUser from "./useCallUser";
import PropTypes from "prop-types";

export default function useAverageSessions(id) {
	const [req, error, isLoading] = useCallUser(
		process.env.REACT_APP_URL + "user/" + id + "/average-sessions"
	);
	return [req, error, isLoading];
}

useAverageSessions.propTypes = {
	id: PropTypes.number.isRequired,
};
