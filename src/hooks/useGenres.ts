import {useEffect, useState} from "react";
import apiClients from "../services/api-clients";
import {CanceledError} from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Genre[];
}


export const useGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    // loading state
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        // Cancellation
        const  controller = new AbortController();

        setLoading(true);

        apiClients.get<FetchGamesResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setGenre(res.data.results);
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

    return {genres, error, isLoading};
}
