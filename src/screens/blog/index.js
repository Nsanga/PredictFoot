import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '../../components/header';
import { Stack } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../../components/footer';
import AllArticle from '../../components/allArticles';
import PopularPost from '../../components/popularPost';
import RecentPosts from '../../components/recentPost';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F3F4F6',
        padding: theme.spacing(12),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
    },
    section: {
        padding: theme.spacing(6),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    div: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        justifyContent: "center",
        alignItems: 'center',
        color: '#16253b'
    },
    titre: {
        fontWeight: '700',
        fontSize: '3rem'
    },
    description: {
        fontWeight: '700',
        fontSize: '1rem',
        marginTop: "4rem"
    },

    rootResponsive: {
        backgroundColor: '#F3F4F6',
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
    },
    sectionResponsive: {
        margin: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

    },
    divResponsive: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        color: '#16253b'
    },
    titreResponsive: {
        fontWeight: '700',
        fontSize: '1.8rem'
    },
    descriptionResponsive: {
        fontWeight: '600',
        fontSize: '1rem',
        marginTop: "3rem"
    },
}));


export default function BasicGrid() {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);


    return (
        <div>
            <Header />
            {isMatch ? (
                <>
                    <Box >
                        <Box >

                            <Stack className={classes.rootResponsive} textAlign='center'>
                                <Box className={classes.divResponsive} >
                                    <Box className={classes.titre}>
                                        Blog
                                    </Box>
                                    <Box className={classes.descriptionResponsive} >
                                        Restez au courant des dernières nouvelles, des mises à jour et des potins de l'écosystème PredictFoot à travers nos articles et newsletters.
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                    <Box className={classes.sectionResponsive}>
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
                    <Box >
                        <Box >

                            <Stack className={classes.root} textAlign='center'>
                                <Box className={classes.div} >
                                    <Box className={classes.titre}>
                                        Blog
                                    </Box>
                                    <Box className={classes.description} >
                                        Restez au courant des dernières nouvelles, des mises à jour et des potins de l'écosystème PredictFoot à travers nos articles et newsletters.
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                    <Box className={classes.section}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>

                                <PopularPost />
                                <RecentPosts />

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
