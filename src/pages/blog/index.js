import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '../../components/misc/Header';
import { Stack } from '@mui/material';
import BlogBox from '../../components/misc/BlogBox';
import Footer from '../../components/misc/Footer';
import AllArticle from '../../components/allArticles';
import PopularPost from '../../components/popularsPosts';
import RecentPosts from '../../components/recentsPosts';
import { useMediaQuery, useTheme } from '@material-ui/core';
import './style.css';

export default function BasicGrid() {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);


    return (
        <div>
            <Header />
            {isMatch ? (
                <>
                    <Stack className="rootResponsiveBlog" textAlign='center'>
                        <BlogBox
                            titre="Blog"
                            description="Restez au courant des dernières nouvelles, des mises à jour et des potins de l'écosystème PredictFoot à travers nos articles et newsletters."
                        />
                    </Stack>

                    <Box className="sectionResponsiveBlog">
                        <Box>
                            <Stack container spacing={2}>

                                <PopularPost />
                                <RecentPosts />

                            </Stack>
                        </Box>
                    </Box>
                    <AllArticle />
                </>
            ) : (
                <>
                    <Stack className="rootBlog" textAlign='center'>
                        <BlogBox
                            titre="Blog"
                            description="Restez au courant des dernières nouvelles, des mises à jour et des potins de l'écosystème PredictFoot à travers nos articles et newsletters."
                        />
                    </Stack>
                    <Box className="sectionBlog">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={8}>
                                    <PopularPost />
                                </Grid>
                                <Grid item xs={4}>
                                    <RecentPosts />
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                    <AllArticle />
                </>
            )}
            <Footer />
        </div>
    );
}
