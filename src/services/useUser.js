import useCallUser from './useCallUser'

export default function useUser(id) {
    const [req, error, isLoading] = useCallUser(
        'http://localhost:4000/user/' + id,
    )
    return [req, error, isLoading]
}
