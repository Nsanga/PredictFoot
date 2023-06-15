import * as React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@material-ui/core';
import PopularCard from '../misc/PopularPostCard';
import './style.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function PopularPost({ blogs, populaire }) {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ],
    };

    const filterArticles = (array = [], statut) => {
        return array.filter((ele) => ele.articleStatut === statut)
    }

    return (
        <>
            {isMatch ? (
                <>
                    <Box>
                        <Box variant='h1' className="headerPopularPost">Posts populaires</Box>
                        <Box display="flex" flexWrap='wrap'>
                            {filterArticles(blogs, "populaire").map((post, index) => (
                                <Link to={`/article/${post._id}`} className='link-all-articles'>
                                    <PopularCard post={post} key={index} />
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className="headerPopularPost">Posts populaires</Box>
                    <Box display="flex" flexWrap='wrap'>
                        {/* <Slider {...settings}> */}
                            {filterArticles(blogs, "populaire").map((post, index) => (
                                <Link to={`/article/${post._id}`} className='link-all-articles'>
                                    <PopularCard post={post} key={index} />
                                </Link>
                            ))}
                        {/* </Slider> */}
                    </Box>
                </>
            )}
        </>
    );
}
