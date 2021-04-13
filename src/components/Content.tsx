import { MovieCard } from "./MovieCard";
import '../styles/content.scss';

interface genre {
  id: number;
  name: string;
  title: string;
}

interface movies {
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>
}
interface ContentProps {
  movies: Array<movies>;
  selectedGenre: genre;
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}