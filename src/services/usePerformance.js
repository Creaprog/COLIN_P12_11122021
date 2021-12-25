import useCallUser from "./useCallUser";

export default function usePerformance(id) {
    const [req, error, isLoading] = useCallUser("http://localhost:4000/user/" + id + "/performance");
    return [req, error, isLoading];
}