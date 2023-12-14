import React, {useEffect, useState} from 'react';
import {searchMovie} from "../../redux/action/movieAction";
import {useDispatch, useSelector} from "react-redux";
import MovieList from "../../components/MovieList/MovieList";

const SearchPage = () => {
    const dispatch=useDispatch()
    const [searchInput, setSearchInput] = useState('')
    const [search, setSearch] = useState([])
    const movies =useSelector(s=>s.movies)

    console.log(movies)
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleSubmit = (data) => {
        dispatch(searchMovie(searchInput))
        setSearch(data)
    }
    console.log(search)
    return (
        <div>
            <div className={'container'}>
                <h1 style={{marginTop: '30px'}}>Search page</h1>
                <div className={'search-wrapper'}>
                    <input className={'searchInput'} onChange={handleChange} type="text" placeholder={'Search...'}/>
                    <button className={'searchBtn'} onClick={handleSubmit}>Search</button>
                </div>
               <MovieList movies={search}/>
            </div>
        </div>

    )
};

export default SearchPage;