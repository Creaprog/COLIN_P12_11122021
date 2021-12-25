import useCallUser from './useCallUser'

export default function useActivity(id) {
    const [req, error, isLoading] = useCallUser(
        'http://localhost:4000/user/' + id + '/activity',
    )
    return [req, error, isLoading]
}
