import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

import React from 'react';
import {Box, Button, CardMedia, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import {BACKDROP_URL, IMAGE_URL} from "../../config/config";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {useSelector} from "react-redux";
import NotesIcon from '@mui/icons-material/Notes';
import {Link} from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const Carousel = () => {
    const movies = useSelector(s => s.movies)
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[EffectFade, Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    movies.filter(el => el.backdrop_path).map(movie => (
                        <SwiperSlide key={movie.id}>
                            <Box className={'carousel-img'}
                                 style={{
                                     background: `linear-gradient(to right, rgba(0, 0, 0), rgba(0, 0, 0, 0.2)), url(${BACKDROP_URL + movie.backdrop_path})`,
                                     backgroundSize: 'cover',
                                     backgroundPosition: 'center',
                                     backgroundRepeat: 'no-repeat',
                                     display: 'flex',
                                     flexDirection: 'column',
                                     justifyContent: 'flex-end',
                                     alignItems: 'flex-start',
                                     padding: '50px 90px 50px 20px',
                                 }}
                            >

                                <Box className={'carousel-card'}>
                                    <CardMedia
                                        component="img"
                                        height="520"
                                        image={`${IMAGE_URL}${movie.poster_path}`}
                                    />
                                    <Box>
                                        <Typography sx={{color: '#FFF'}} gutterBottom variant="h5" component="div">
                                            {movie.title}
                                        </Typography>
                                        <Box className={'rating-trailer'}>
                                            <Typography sx={{
                                                color: '#FFF',
                                                backgroundColor: '#0d253f',
                                                padding: '6px 15px',
                                                borderRadius: '8px',
                                                display:'flex',
                                                gap:'3px',
                                                alignItems:'center',

                                            }} variant="span" color="text.secondary">
                                                <StarIcon sx={{color: 'orange'}} />
                                                {movie.vote_average}
                                            </Typography>
                                            <Link className={'link'} to={`/movie/${movie.id}`}>
                                                <Button sx={{
                                                    display:'flex',
                                                    gap: '10px',
                                                    border:'2px solid #0d253f'}}>
                                                    <NotesIcon/>
                                                    ОПИСАНИЕ
                                                </Button>
                                            </Link>
                                        </Box>

                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
};

export default Carousel;