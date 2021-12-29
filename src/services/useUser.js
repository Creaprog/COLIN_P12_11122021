import useCallUser from './useCallUser';
import PropTypes from 'prop-types';

export default function useUser(id) {
	const [req, error, isLoading] = useCallUser(
		'http://localhost:4000/user/' + id
	);
	return [req, error, isLoading];
}

useUser.propTypes = {
	id: PropTypes.number.isRequired,
};
