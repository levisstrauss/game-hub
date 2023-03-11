import {useEffect, useState} from "react";
import apiClients from "../services/api-clients";
import {AxiosRequestConfig, CanceledError} from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}


export const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    // loading state
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        // Cancellation
        const  controller = new AbortController();

        setLoading(true);

        apiClients.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
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
    }, deps ? [...deps] : []);

    return {data, error, isLoading};
}
