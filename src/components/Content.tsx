import { MovieCard } from "../components/MovieCard";
import { MovieProps } from "../models/movies";

type ContentProps = {
    movies: MovieProps[];
};

export const Content = ({ movies }: ContentProps) => {
    return (
        <main>
            <div className="movies-list">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        title={movie.Title}
                        poster={movie.Poster}
                        runtime={movie.Runtime}
                        rating={movie.Ratings[0].Value}
                    />
                ))}
            </div>
        </main>
    );
};
