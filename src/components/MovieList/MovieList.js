import React from 'react';
import {IMAGE_URL} from "../../config/config";
import {Link} from "react-router-dom";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import './style.css'

const MovieList = ({movies}) => {
    console.log(movies)
    return (

        <Box className={'row'}>
            {movies?.map((movie) => (
                <Box key={movie.id} className={'col-3'}>

                    <Card sx={{height: "100%"}}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={`${IMAGE_URL}${movie.poster_path}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {movie.vote_average}
                            </Typography>
                        </CardContent>
                        <Link to={`/movie/${movie.id}`}>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Link>
                    </Card>

                </Box>
            ))}
        </Box>
    )
}

export default MovieList;