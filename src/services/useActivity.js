import useCallUser from "./useCallUser";
import PropTypes from "prop-types";

//TODO: récupérer les données et mettre dans une variable
export default function useActivity(id) {
	const [req, error, isLoading] = useCallUser(
		process.env.REACT_APP_URL + "user/" + id + "/activity"
	);
	return [req, error, isLoading];
}

useActivity.propTypes = {
	id: PropTypes.number.isRequired,
};
