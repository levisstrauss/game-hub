import {useEffect, useState} from "react";
import apiClients from "../services/api-clients";
import {CanceledError} from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}


export const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    // loading state
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        // Cancellation
        const  controller = new AbortController();

        setLoading(true);

        apiClients.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false);
            });

        // Call the cleanup function
        return () => controller.abort();
    }, []);

    return {data, error, isLoading};
}
