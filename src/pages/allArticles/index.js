import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/misc/Header';
import { Stack } from '@mui/material';
import BlogBox from '../../components/misc/BlogBox';
import Footer from '../../components/misc/Footer';
import { useMediaQuery, useTheme } from '@material-ui/core';
import './style.css';
import { connect, useDispatch } from "react-redux";
import { fetchBlogRequest } from '../../redux/blog/actions';
import load from '../../assets/loading.gif'
import DownloadApp from '../../components/downloadApp';
import AllPosts from '../../components/allPosts';
import Pagination from '@material-ui/lab/Pagination';

const AllArticles = (
    {
        blogs,
        loading,
        totalPages,
        page
    }
) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const dispatch = useDispatch();
    useEffect(() => {
        const page = 1;
        const limit = 10;
        dispatch(fetchBlogRequest(page, limit));
        console.log('Dispatched fetchBlogRequest');
    }, [dispatch]);

    const handlePageChange = (event, page) => {
        const limit = 3;
        dispatch(fetchBlogRequest(page, limit));
    };

    return (
        <div>
            <Header />
            {isMatch ? (
                <>
                    <Box variant='h1' className="headerArticlesPost">Tous les articles</Box>
                    {loading ? (
                        <Stack direction="row" justifyContent='center' alignItems='center' height='100vh'>
                            <img src={load} alt="load animation" className="load-animation" />
                        </Stack>
                    ) : (
                        <Box className="sectionResponsiveBlog">
                            <Box>
                                <Stack container spacing={2}>

                                    <AllPosts blogs={blogs} />
                                    <Pagination
                                        count={totalPages}
                                        page={page}
                                        onChange={handlePageChange}
                                    />

                                </Stack>
                            </Box>
                        </Box>
                    )}


                </>
            ) : (
                <>
                    <Box className="headerArticlesPost">Tous les articles</Box>

                    {loading ? (
                        <Stack direction="row" justifyContent='center' alignItems='center' height='100vh'>
                            <img src={load} alt="load animation" className="load-animation" />
                        </Stack>
                    ) : (
                        <Box className="sectionBlog-articles">
                            <Box>
                                <Stack container spacing={2} >

                                    <AllPosts blogs={blogs} />
                                    <Pagination
                                        count={totalPages}
                                        page={page}
                                        onChange={handlePageChange}
                                    />

                                </Stack>
                            </Box>
                        </Box>
                    )}
                </>
            )}
            <DownloadApp />
            <Footer />
        </div>
    );
}

const mapStateToProps = ({ BlogReducer }) => ({
    blogs: BlogReducer.blogs,
    loading: BlogReducer.loading,
    totalPages: BlogReducer.totalPages,
    page: BlogReducer.page,
});

export default connect(mapStateToProps)(AllArticles);