import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/action/movieAction";
import MovieList from "../../components/MovieList/MovieList";
import './style.css'
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import {useSearchParams} from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const HomePage = () => {
    const dispatch = useDispatch()
    const movies = useSelector(s => s.movies)
    const [pageParam, setPageParams] = useSearchParams('page')
    const [page, setPage] = useState(pageParam.get('page') || 1)


    useEffect(() => {
        dispatch(getMovies(page))
    }, [page]);

    const handleChangePage = (argPage) => {
        setPage(argPage)
        setPageParams({page: argPage})
    }

    return (
        <Layout>
            <Carousel/>
            <div className={'container'}>
                <div className={'row'}>
                    <MovieList movies={movies}/>
                    <Pagination onClick={handleChangePage}/>
                </div>
            </div>
        </Layout>
    );
};
export default HomePage;