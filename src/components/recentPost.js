import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    link: {
        fontSize: '1rem',
        fontWeight: '700',
        textDecoration: "none"
    },
    header: {
        fontWeight: '900',
        fontSize: '2rem',
        color: "#243E63"
    },
    imageRecente: {
        height: '80px',
        width: '90px',
        borderRadius: '4px'
    },
    titre: {
        fontSize: '1rem',
        fontWeight: 'bold',
        display: 'flex',
        position: 'relative',
        color: "#243E63",
    },
    postRecent: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#4299e1",
            borderRadius: '8px'
        },
    },

    linkResponsive: {
        fontSize: '1rem',
        fontWeight: '700',
        textDecoration: "none"
    },
    headerResponsive: {
        fontWeight: '700',
        fontSize: '2rem',
        color: "#243E63",
        marginTop: '3rem',
    },
    imageRecenteResponsive: {
        height: '80px',
        width: '90px',
        borderRadius: '4px'
    },
    titreResponsive: {
        fontSize: '1rem',
        fontWeight: 'bold',
        display: 'flex',
        position: 'relative',
        color: "#243E63",
    },
    postRecentResponsive: {
        marginTop: '3rem',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#4299e1",
            borderRadius: '8px',
            marginLeft:'0.1px'
        },
    }

}));


export default function RecentPosts() {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);


    const recentPosts = [
        {
            postImageSrc:
                "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
            title: "Getting the most out of your vacation",
            authorName: "Aaron Patterson",
            url: "https://reddit.com"
        },
        {
            postImageSrc:
                "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
            title: "Choosing the perfect Safaris in Africa",
            authorName: "Sam Phipphen",
            url: "https://reddit.com"
        },
        {
            postImageSrc:
                "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
            title: "Hiking during the monsoon in Asia",
            authorName: "Tony Hawk",
            url: "https://timerse.com"
        },
        {
            postImageSrc:
                "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
            title: "Must carry items while travelling to Thailand",
            authorName: "Himali Turn",
            url: "https://timerse.com"
        },
    ];

    return (
        <>
            {isMatch ? (
                <>
                    <Box>
                        <Box variant='h1' className={classes.headerResponsive}>Posts récents</Box>
                        <Box>
                            {recentPosts.map((post, index) => (
                                <Grid container spacing={2} key={index} marginTop='1.5rem' className={classes.postRecentResponsive}>
                                    <Grid item xs={8}>
                                        <Box className={classes.titre}>{post.title}</Box>
                                        <Box marginTop='1rem'>
                                            <Link className={classes.link}>Lire l'article</Link>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img
                                            src={post.postImageSrc}
                                            alt='post'
                                            className={classes.imageRecente} />
                                    </Grid>
                                </Grid>
                            ))}
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Grid item xs={4}>
                        <Box className={classes.header}>Posts récents</Box>
                        <Box sx={{ flexGrow: 1 }}>
                            {recentPosts.map((post, index) => (
                                <Grid container spacing={2} key={index} marginTop='1.5rem' className={classes.postRecent}>
                                    <Grid item xs={8}>
                                        <Box className={classes.titre}>{post.title}</Box>
                                        <Box marginTop='1rem'>
                                            <Link className={classes.link}>Lire l'article</Link>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img
                                            src={post.postImageSrc}
                                            alt='post'
                                            className={classes.imageRecente} />
                                    </Grid>
                                </Grid>
                            ))}
                        </Box>
                    </Grid>
                </>
            )}


        </>
    );
}
