import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useCallUser2 = (model) => {
	const myref = React.useRef(model);
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		myref
			.current()
			.then((result) => {
				setIsLoading(false);
				setData(result);
				return result;
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error);
				return error;
			});
	}, [myref]);

	return [data, error, isLoading];
};

export { useCallUser2 };

useCallUser2.propTypes = {
	query: PropTypes.string.isRequired,
};
