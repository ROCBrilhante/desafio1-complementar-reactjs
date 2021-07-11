import { GenreResponseProps } from "../models/movies";

type HeaderProps = {
    selectedGenre: GenreResponseProps;
};

export const Header = ({ selectedGenre }: HeaderProps) => {
    return (
        <header>
            <span className="category">
                Categoria:<span> {selectedGenre.title}</span>
            </span>
        </header>
    );
};
