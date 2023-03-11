import {useGenres} from "../hooks/useGenres";

export const GenreList = () => {

    const { data } = useGenres();

    return (
        <div>
            {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </div>
    );
}
