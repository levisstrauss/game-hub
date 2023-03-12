
import genres from '../data/genres'

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


//export const useGenres = () => useData<Genre>('/genres')

export const useGenres = () => ({data: genres, isLoading:false, error: null});

