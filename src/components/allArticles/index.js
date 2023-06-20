import React, { useEffect } from "react";
import { Icon, Stack } from "@mui/material";
import { Avatar, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from '@material-ui/core';
import './style.css';
import { connect } from "react-redux";
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

const AllArticle = (
    {
        blogs
    }
) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const maxTitleWords = 10;
    const maxProfessionWords = 5;
    const truncateText = (text, maxWords) => {
        const words = text.split(" ");
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(" ") + "...";
        } else {
            return text;
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
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


    return (
        <>
            {isMatch ? (
                <>
                    <Box className='section'>
                        <Box className='header-all-articles'>
                            <Box>Tous les articles</Box>
                            <Link to="/articles" style={{ textDecoration: 'none' }}>
                                <Icon style={{ padding: '8px', color: '#243E63' }}>
                                    <IoChevronForwardCircleOutline size={32} />
                                </Icon>
                            </Link>

                        </Box>
                        <Slider {...settings}>

                            {blogs?.map((item, index) => (
                                <Link to={`/article/${item._id}`} className='link-all-articles'>
                                    <Stack key={index}>
                                        <Stack marginTop='2.5rem' className='post'>
                                            <img src={item.imageArticle}
                                                alt="article"
                                                className='image-articles' />

                                            <Box gutterBottom variant="h5" className='title-all-articles'>
                                                {truncateText(item.title, maxTitleWords)}
                                            </Box>
                                        </Stack>
                                        <Box>

                                            <Stack direction="row" spacing={2} marginTop='1rem' alignItems="center">
                                                <Avatar alt="Remy Sharp" src={item.profile} />
                                                <Box>
                                                    <Box className='author-name'>{item.author}</Box>
                                                    <Box className='author-profession'>
                                                        {truncateText(item.profession, maxProfessionWords)}
                                                    </Box>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Stack direction="row" spacing={2} marginTop='1rem'>
                                            <Box className='box-link'>Lire l'article</Box>
                                        </Stack>
                                    </Stack>
                                </Link>
                            ))}
                        </Slider>

                    </Box>
                </>
            ) : (
                <>
                    <Box className='section'>
                        <Box sx={{ flexGrow: 1 }}>

                            <Box className='header-all-articles'>
                                <Box>Tous les articles</Box>
                                <Link to="/articles" style={{ textDecoration: 'none' }}>
                                    <Icon style={{ padding: '8px', color: '#243E63' }}>
                                        <IoChevronForwardCircleOutline size={32} />
                                    </Icon>
                                </Link>

                            </Box>
                            <Slider {...settings}>

                                {blogs?.map((item, index) => (
                                    <Link to={`/article/${item._id}`} className='link-all-articles'>
                                        <Stack sx={{ maxWidth: 345 }} key={index}>
                                            <Stack marginTop='2.5rem' className='post-all-articles'>
                                                <img src={item.imageArticle}
                                                    alt="article"
                                                    className='image-articles' />

                                                <Box gutterBottom variant="h5" className='title-all-articles'>
                                                    {truncateText(item.title, maxTitleWords)}
                                                </Box>
                                            </Stack>
                                            <Box>

                                                <Stack direction="row" spacing={2} marginTop='1rem' alignItems="center">
                                                    <Avatar alt="Remy Sharp" src={item.profile} />
                                                    <Box>
                                                        <Box className='foot-articles'>{item.author}</Box>
                                                        <Box className='footer-all-articles'>
                                                            {truncateText(item.profession, maxProfessionWords)}
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                            <Stack direction="row" spacing={2} marginTop='1rem'>
                                                <Box className='box-link'>Lire l'article</Box>
                                            </Stack>
                                        </Stack>
                                    </Link>
                                ))}
                            </Slider>

                        </Box>
                    </Box>
                </>
            )}

        </>
    );
};

const mapStateToProps = ({ BlogReducer }) => ({
    blogs: BlogReducer.blogs,
    loading: BlogReducer.loading
});

export default connect(mapStateToProps)(AllArticle);
