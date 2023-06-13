import React, {useEffect} from "react";
import { Stack } from "@mui/material";
import { Avatar, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from '@material-ui/core';
import './style.css';
import { connect, useDispatch } from "react-redux";
import { fetchBlogRequest } from '../../redux/blog/actions';

const AllArticle = (
    {
        blogs,
        loading
      }
) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogRequest());
    console.log('Dispatched fetchBlogRequest');
  }, [dispatch]);

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
                    <Box  className='header'>Tous les articles</Box>
                        <Slider {...settings}>

                            {blogs?.map((item, index) => (
                                <Stack key={index}>
                                    <Stack marginTop='2.5rem' className='post'>
                                        <img src={item.imageArticle}
                                            alt="article"
                                            className='image-articles' />

                                        <Box gutterBottom variant="h5" className='title-all-articles'>
                                            {item.title}
                                        </Box>
                                    </Stack>
                                    <Box>

                                        <Stack direction="row" spacing={2} marginTop='1rem' alignItems="center">
                                            <Avatar alt="Remy Sharp" src={item.profile} />
                                            <Box>
                                                <Box className='foot-articles'>{item.author}</Box>
                                                <Box className='footer'>{item.profession}</Box>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Stack direction="row" spacing={2} marginTop='1rem'>
                                        <Link to={`/article/${item._id}`} className='link'>Lire l'article</Link>
                                    </Stack>
                                </Stack>
                            ))}
                        </Slider>

                    </Box>
                </>
            ) : (
                <>
                    <Box className='section'>
                        <Box sx={{ flexGrow: 1 }}>

                            <Box className='header-all-articles'>Tous les articles</Box>
                            <Slider {...settings}>

                                {blogs?.map((item, index) => (
                                    <Stack sx={{ maxWidth: 345 }} key={index}>
                                        <Stack marginTop='2.5rem' className='post-all-articles'>
                                            <img src={item.imageArticle}
                                                alt="article"
                                                className='image-articles' />

                                            <Box gutterBottom variant="h5" className='title-all-articles'>
                                                {item.title}
                                            </Box>
                                        </Stack>
                                        <Box>

                                            <Stack direction="row" spacing={2} marginTop='1rem' alignItems="center">
                                                <Avatar alt="Remy Sharp" src={item.profile} />
                                                <Box>
                                                    <Box className='foot-articles'>{item.author}</Box>
                                                    <Box className='footer-all-articles'>{item.profession}</Box>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Stack direction="row" spacing={2} marginTop='1rem'>
                                            <Link className='link-all-articles'>Lire l'article</Link>
                                        </Stack>
                                    </Stack>
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
