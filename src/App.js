import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Films from "./components/Films/Films";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/movie/:id' element={<MoviePage />} />
                        <Route path='/search' element={<Search/>} />
                    <Route path="/person/:id" element={<Films/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;