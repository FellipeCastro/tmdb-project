import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); // Controla a página
    const [isLoading, setIsLoading] = useState(false); // Controla o loading

    const url = `https://api.themoviedb.org/3/discover/movie?&language=pt-BR&page=${page}`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTUxNTA4ZmMwNGE5NjZmMzBkMmU2NTMxNzMzMDQwOSIsIm5iZiI6MTcwNzUxMTg1NS45NjcsInN1YiI6IjY1YzY5MDJmYWFkOWMyMDE3ZGI1NGJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jxhh67fJy7xJDZD3HHMRq52AlUtZkj19C6pxFqV4xrw",
        },
    };

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true); // Ativa o loading
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setMovies((prevMovies) => [...prevMovies, ...data.results]);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false); // Desativa o loading
            }
        };

        fetchMovies();
    }, [page]);

    const loadMoreMovies = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <>
            <Navbar />
            <div className="moviesContainer">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        name={movie.title}
                        rating={movie.vote_average}
                        description={movie.overview || "Esse filme não tem uma descrição."}
                    />
                ))}
            </div>
            {isLoading && (
                <div className="loading">
                    <span>Carregando...</span>
                </div>
            )}
            {!isLoading && (
                <button onClick={loadMoreMovies} style={{ margin: "20px auto", display: "block" }}>
                    Carregar Mais
                </button>
            )}
        </>
    );
}

export default App;
