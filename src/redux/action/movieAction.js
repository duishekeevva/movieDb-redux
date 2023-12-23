import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";
import {GET_ACTORS, GET_MOVIE, GET_MOVIE_ID, GET_MOVIES_BY_ACTOR, GET_TRAILER, SEARCH_MOVIE} from "../types";

export const getMovies = (page) => {
    return (dispatch) => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}&page=${page}`)
            .then(({data}) => {
                // console.log(data)
                dispatch({type: GET_MOVIE, payload: data})
            })
    }
}

export const getMovieId = (id) => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=3bfb05764c11d94a43065921202fa319&language=ru-RU`)
            .then(({data}) => {
                // console.log(data)
                dispatch({type: GET_MOVIE_ID, payload: data});
            })
    }
}

export const searchMovie = (searchInput) => {
    return (dispatch) => {
        axios(`${BASE_URL}search/movie?api_key=${API_KEY}&language=ru-RU&query=${searchInput}`)
            .then(({data}) => {
                dispatch({type: SEARCH_MOVIE, payload: data.results});
                // console.log(data)
            })
    }
}

export const getActors = (id) => {
    return (dispatch) => {
        axios(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=ru-RU`)
            .then(({data}) => {
                dispatch({type: GET_ACTORS, payload: data.cast})
                console.log(data.cast)
            })
    }
}

export const getTrailer = (id) => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?language=ru-RU&api_key=3bfb05764c11d94a43065921202fa319`)
            .then(({data}) => {
                dispatch({type: GET_TRAILER, payload: data.results})
                console.log(data.results)
            })
    }
}

export const getMoviesByActor = (id) => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=3bfb05764c11d94a43065921202fa319&&language=ru-RU`)
            .then(({data})=> {
                dispatch({type:GET_MOVIES_BY_ACTOR, payload: data.cast})
                console.log(data)
            })
    }
}

