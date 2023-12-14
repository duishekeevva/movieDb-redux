import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BASE_URL, IMAGE_URL} from "../../config/config";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/action/movieAction";
import MovieList from "../../components/MovieList/MovieList";
import './style.css'
import Carousel from "../../components/Carousel/Carousel";
import SearchPage from "../SearchPage/SearchPage";

const HomePage = () => {
    const dispatch=useDispatch()
    const movies=useSelector(s=>s.movies)

    useEffect(() => {
        dispatch(getMovies())
    }, []);

    return (
        <>
            <Carousel/>
            <SearchPage/>
        <div className={'container'}>
            <div  className={'row'}>
            <MovieList  movies={movies} />
            </div>
        </div>
</>
    );
};
export default HomePage;