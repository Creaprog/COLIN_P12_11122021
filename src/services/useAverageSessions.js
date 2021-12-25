import useCallUser from './useCallUser'
import PropTypes from 'prop-types'

export default function useAverageSessions(id) {
    const [req, error, isLoading] = useCallUser(
        'http://localhost:4000/user/' + id + '/average-sessions',
    )
    return [req, error, isLoading]
}

useAverageSessions.propTypes = {
    id: PropTypes.number.isRequired,
}
