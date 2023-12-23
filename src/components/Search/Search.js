import React, { useState } from "react";
import { searchMovie } from "../../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../components/MovieList/MovieList";
import {Box} from "@mui/material";
import './style.css'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");
    const movies = useSelector((s) => s.movies);


    console.log(111, movies);
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };
    const handleSubmit = () => {
        dispatch(searchMovie(searchInput));
    };
    return (
        <Box className={'container'}>
                <Box className={"search-wrapper"}>
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder={"Search..."}
                    />
                    <button onClick={handleSubmit}>
                        <SearchIcon/>
                    </button>
                </Box>
                {/*<MovieList movies={movies} />*/}
        </Box>
    );
};

export default Search;
