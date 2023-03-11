import {useEffect, useState} from "react";
import apiClients from "../services/api-clients";
import {CanceledError} from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[]
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {

        // Cancellation
        const  controller = new AbortController();

        apiClients.get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        // Call the cleanup function
        return () => controller.abort();
    }, []);

    return {games, error}
}
