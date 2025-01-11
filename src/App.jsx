import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
                api_key: "8ada0e1e64d9e1ebba75fff575bbbfc2",
                language: "pt-BR",
            },
        }).then((res) => {
            setMovies(res.data.results);
        });
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
                        description={movie.overview}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
