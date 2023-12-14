import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getMovieId} from "../../redux/action/movieAction";
import {IMAGE_URL} from "../../config/config";

const MoviePage = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const {movie}=useSelector(s=>s)

    useEffect(() => {
        dispatch(getMovieId(id))
    }, [id]);
    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
            <p>{movie.overview}</p>

        </div>
    );
};

export default MoviePage;