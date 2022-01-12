import useCallUser from './useCallUser';
import PropTypes from 'prop-types';

export default function usePerformance(id) {
	const [req, error, isLoading] = useCallUser(
		process.env.REACT_APP_URL + 'user/' + id + '/performance'
	);
	return [req, error, isLoading];
}

usePerformance.propTypes = {
	id: PropTypes.number.isRequired,
};
