import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

import React from 'react';
import {Box, CardMedia} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import {BACKDROP_URL, IMAGE_URL} from "../../config/config";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {useSelector} from "react-redux";


const Carousel = () => {
    const movies=useSelector(s=> s.movies)
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
            modules={[EffectFade, Navigation, Autoplay, Pagination ]}
            className="mySwiper"
        >
            {
                movies.filter(el => el.backdrop_path).map(movie => (
                    <SwiperSlide>
                        <Box className={'carousel-img'}
                             style={{
                                 background: `url(${BACKDROP_URL + movie.backdrop_path})`,
                                 backgroundSize: 'cover',
                                 backgroundPosition: 'center',
                                 backgroundRepeat: 'no-repeat',
                                 display: 'flex',
                                 flexDirection: 'column',
                                 justifyContent: 'flex-end',
                                 alignItems: 'flex-start',
                                 // padding: '0 90px 0 0'
                             }}>

                            <Box className={'carousel-card'}>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={`${IMAGE_URL}${movie.poster_path}`}
                                />
                                <Box>
                                    <h3>{movie.title}</h3>
                                    <p>{movie.vote_average}</p>
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