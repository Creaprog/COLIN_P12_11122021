import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Model from '../Model';

/**
 *
 * @returns {CallUser}
 */
const useCallUser = (query) => {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(query)
			.then((res) => res.json())
			.then((result) => {
				setIsLoading(false);
				setData(result.data);
				return result;
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error);
				return error;
			});
	}, [query]);

	return [data, error, isLoading];
};

const useCallUser2 = (model) => {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		model
			.then((result) => {
				setIsLoading(false);
				setData(result.data);
				return result;
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error);
				return error;
			});
	}, [model]);

	return [data, error, isLoading];
};

export default useCallUser;
export { useCallUser2 };

useCallUser.propTypes = {
	query: PropTypes.string.isRequired,
};
