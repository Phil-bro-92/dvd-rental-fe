import "../styles/searchmovie.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import IndvMovie from "../components/IndvMovie";

export default function SearchMovie() {
    const url = process.env.REACT_APP_API_URL;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`${url}/all-movies`)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const searchMovie = (searchTerm) => {
        let data = {
            searchTerm: searchTerm,
        };
        axios
            .post(`${url}/search-movies`, data)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <main className="search_movies">
            <h1>Movies</h1>{" "}
            <section className="search_inputs">
                {" "}
                <TextField
                    className="input_field"
                    type="text"
                    label="Search by Movie Name"
                    variant="standard"
                    onChange={(e) => searchMovie(e.target.value)}
                />
            </section>
            {movies.length > 0 ? (
                <table className="movie_table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Release Year</th>
                            <th>Length</th>
                            <th>Rating</th>
                            <th>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies &&
                            movies.map((movie, i) => {
                                return <IndvMovie key={i} movie={movie} />;
                            })}
                    </tbody>
                </table>
            ) : (
                <h2>No Movies found</h2>
            )}
        </main>
    );
}
