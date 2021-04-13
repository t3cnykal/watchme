import { Button } from "./Button";

import '../styles/sidebar.scss';

interface genre {
  id: number,
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family",
  title: string
}

interface siderProps {
  selectedGenreId: number;
  setSelectedGenreId: Function;
  genres: Array<genre>;
}


export function SideBar({ selectedGenreId, setSelectedGenreId, genres }: siderProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}