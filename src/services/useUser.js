import { useCallUser2 } from './useCallUser';
import PropTypes from 'prop-types';
import Model from '../Model';

export default function useUser(id) {
	// const [req, error, isLoading] = useCallUser(
	// 	'http://localhost:4000/user/' + id
	// );
	const [req, error, isLoading] = useCallUser2(Model.getMe(id));
	return [req, error, isLoading];
}

useUser.propTypes = {
	id: PropTypes.number.isRequired,
};
