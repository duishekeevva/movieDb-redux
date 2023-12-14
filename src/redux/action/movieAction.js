import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";
import {GET_MOVIE, GET_MOVIE_ID, SEARCH_MOVIE} from "../types";

export const getMovies = () => {
    return (dispatch) => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => {
                console.log(data)
                dispatch({type: GET_MOVIE, payload: data})
            })
    }
}

export const getMovieId=(id)=> {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=3bfb05764c11d94a43065921202fa319&language=ru-RU`)
            .then(({data})=>{
                console.log(data)
                dispatch({type: GET_MOVIE_ID, payload: data});
            })
    }
}

export const searchMovie=(searchInput)=>{
    return (dispatch)=> {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=3bfb05764c11d94a43065921202fa319&language=ru-RU&query=${searchInput}`)
            .then (({data})=> {
                dispatch ({type: SEARCH_MOVIE, payload: data.results});
                console.log(data)
            })
    }
}

