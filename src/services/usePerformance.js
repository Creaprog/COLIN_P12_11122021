import useCallUser from './useCallUser';
import PropTypes from 'prop-types';

export default function usePerformance(id) {
	const [req, error, isLoading] = useCallUser(
		'http://localhost:4000/user/' + id + '/performance'
	);
	return [req, error, isLoading];
}

usePerformance.propTypes = {
	id: PropTypes.number.isRequired,
};
