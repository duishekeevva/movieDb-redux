import React from 'react';
import Logo from '../Assets/images.png'
import './style.css'
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

import Search from "../Search/Search";


const Header = () => {
    return (
        <header className={'header'}>
            <Box>
                <Link to={'/'} >
                    <img className={'logo'} src={Logo} alt=""/>
                </Link>
            </Box>
            <Box className={'nav'} sx={{display:"flex"}}>
                <Link className={'link'}  to={'/'}>Home</Link>
            </Box>
            <Box>
                <Search/>
            </Box>

        </header>
    );
};

export default Header;