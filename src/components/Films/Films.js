import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMoviesByActor} from "../../redux/action/movieAction";
import {useParams} from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import Layout from "../Layout/Layout";

const Films = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [credits, setCredits] = useState([])
    const moviesByActor = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(getMoviesByActor(id))
    }, [dispatch, id]);
    return (
        <div>
            <Layout>
                <MovieList movies={moviesByActor}/>
            </Layout>
        </div>
    );
};

export default Films;