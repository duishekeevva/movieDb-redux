import {GET_MOVIE, GET_MOVIE_ID, SEARCH_MOVIE} from "../types";

const initialState = {
    movies: [],
    movie:{}
}

 export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {...state, movies: action.payload.results}
        case GET_MOVIE_ID:
            return {...state, movie: action.payload}
        case SEARCH_MOVIE:
            return {...state, movies: action.payload}
        default:
            return state
    }
}