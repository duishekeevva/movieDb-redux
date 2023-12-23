import {GET_ACTORS, GET_MOVIE, GET_MOVIE_ID, GET_MOVIES_BY_ACTOR, GET_TRAILER, SEARCH_MOVIE} from "../types";

const initialState = {
    movies: [],
    movie:{},
    actors: [],
    videos: []
}

 export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {...state, movies: action.payload.results}
        case GET_MOVIE_ID:
            return {...state, movie: action.payload}
        case SEARCH_MOVIE:
            return {...state, movies: action.payload}
        case GET_ACTORS:
            return {...state, actors: action.payload}
        case GET_TRAILER:
            return {...state, videos: action.payload}
        case GET_MOVIES_BY_ACTOR:
            return {...state, movies: action.payload}
        default:
            return state
    }
}