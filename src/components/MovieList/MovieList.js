import React from 'react';
import {IMAGE_URL} from "../../config/config";
import {Link, useNavigate} from "react-router-dom";
import {Box, Button, Grid, Tooltip, Typography} from "@mui/material";
import './style.css'
import StarIcon from '@mui/icons-material/Star';
import {theme} from "../../theme/theme";

const MovieList = ({movies}) => {
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/movie/${id}`)
    }
    console.log(movies)
    return (
        <Grid container spacing={2}>
            {movies?.map((movie) => (
                <Grid item key={movie.id}
                      xs={6}
                      sm={4}
                      md={3}
                      zero={6}
                >
                    <Box  onClick={() => handleNavigate(movie.id)} className={'movie-box'}>
                        <img src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                        <Box>
                            <Tooltip title={movie.title} placement={'top'}>
                                <Typography sx={movieTitle} gutterBottom variant="h5" component="div">
                                    {movie.title}
                                </Typography>
                            </Tooltip>
                            <Typography sx={Rating} variant="body2" color="text.secondary">
                                <StarIcon sx={{color: 'orange'}}/>
                                {movie.vote_average}
                            </Typography>
                        </Box>

                        <Link className={'link'} to={`/movie/${movie.id}`}>
                            <Button size="small">ОПИСАНИЕ</Button>
                        </Link>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default MovieList;

const movieTitle=(theme)=>({
    display: '-webkit-box',
    '-webkit-line-clamp':'2',
    '-webkit-box-orient': 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    height: '53px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        height: '30px'

}
})

const Rating=(theme)=>({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: 'bold',
    color: 'blue'
})