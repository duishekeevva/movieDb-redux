import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Box, Tooltip, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getActors, getMovieId, getTrailer} from "../../redux/action/movieAction";
import {IMAGE_URL} from "../../config/config";
import './style.css'
import Layout from "../../components/Layout/Layout";
import {theme} from "../../theme/theme";

const MoviePage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {movie, actors, videos} = useSelector(s => s)
    // const [actors, setActors]= useState([])
    const showActors = 8

    useEffect(() => {
        dispatch(getMovieId(id))
        dispatch(getActors(id))
        dispatch(getTrailer(id))
    }, [id, dispatch]);

    const starringActors = actors.slice(0, showActors)

    return (
        <Layout>
            <Box className={'container'}>
                <Box className="row">
                    <Box className="col-6">
                        <img src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                    </Box>
                    <Box className="col-6">
                        <Typography gutterBottom variant="h5" component="div">
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong> Дата релиза: </strong> {movie.release_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Рейтинг: </strong> {movie.vote_average}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Описание</strong> {movie.overview}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Трейлер
                        </Typography>
                        {
                            videos.map(trailer => (
                                <Box className="col-5" key={trailer.key}>
                                    <Box className="videoBox">
                                        <iframe
                                            title={trailer.name}
                                            width="100%"
                                            height="250px"
                                            src={`https://www.youtube.com/embed/${trailer.key}`}
                                            frameBorder="0"
                                            allowFullScreen
                                        ></iframe>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>

                <Box className={'row'}>
                    {
                        starringActors.map((actor, idx) =>
                            <Box className={'col-2'} key={idx}>
                                <Tooltip title={actor.name} placement={'top'}>
                                    <Link to={`/person/${actor.id}`}>
                                        <Typography sx={actorInfo} noWrap={true} gutterBottom variant="h5" component="div">
                                            {actor.name}
                                        </Typography>
                                    </Link>
                                </Tooltip>
                                <p>{actor.character}</p>
                                <img className={'actors-img'} src={`${IMAGE_URL}${actor.profile_path}`} alt=""/>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </Layout>
    );
};

export default MoviePage;

const actorInfo=(theme)=>({
    fontSize: '12px'
})