import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        display: 'flex',
        position: 'relative',
        marginTop: '1.5rem',
        color: "#243E63",

        '&:hover': {
            cursor: 'pointer',
            color: "#4299e1",
        },
    },
    foot: {
        fontSize: '1rem',
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        color: "#243E63"
    },
    footer: {
        fontSize: '0.8rem',
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        color: "#243E63"
    },
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
    post: {
        '&:hover': {
            cursor: 'pointer',
            color: "#4299e1",
            text: "#4299e1"
        },
    },
    image: {
        width: "345px",
        height: '280px',
        borderRadius: '8px',
        objectFit: "cover"

        // '&:hover': {
        //     transition: 0.3,
        //     maxWidth: "380px", 
        // },
    },

    titleResponsive: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        display: 'flex',
        position: 'relative',
        marginTop: '1.5rem',
        color: "#243E63",

        '&:hover': {
            cursor: 'pointer',
            color: "#4299e1",
        },
    },
    footResponsive: {
        fontSize: '1rem',
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        color: "#243E63"
    },
    footerResponsive: {
        fontSize: '0.8rem',
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        color: "#243E63"
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
        marginTop:'2rem'
    },
    postResponsive: {
        '&:hover': {
            cursor: 'pointer',
            color: "#4299e1",
            text: "#4299e1"
        },
    },
    imageResponsive: {
        width: "345px",
        height: '280px',
        borderRadius: '8px',
        objectFit: "cover"

        // '&:hover': {
        //     transition: 0.3,
        //     maxWidth: "380px", 
        // },
    },

}));


export default function PopularPost() {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);


    const popularPosts = [
        {
            postImageSrc:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
            authorImageSrc:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            title: "Tips on how to travel safely in foreign countries",
            description:
                "Lire l'article",
            authorName: "Charlotte Delos",
            authorProfile: "Travel Advocate",
            url: "https://timerse.com"
        },
        {
            postImageSrc:
                "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
            authorImageSrc:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            title: "Enjoying the beach life while on a vacation",
            description:
                "Lire l'article",
            authorName: "Adam Cuppy",
            authorProfile: "Vlogger",
            url: "https://reddit.com"
        },
    ];

    return (
        <>
            {isMatch ? (
                <>
                    <Box>
                        <Box variant='h1' className={classes.headerResponsive}>Posts populaires</Box>
                        <Box display="flex" flexWrap='wrap'>
                            {popularPosts.map((post, index) => (
                                <Stack sx={{ maxWidth: 345 }} key={index} href={post.url} >
                                    <Stack marginTop='2.5rem' className={classes.postResponsive}>
                                        <img src={post.postImageSrc}
                                            alt="article"
                                            className={classes.image} />

                                        <Box gutterBottom variant="h5" className={classes.titleResponsive}>
                                            {post.title}
                                        </Box>
                                    </Stack>
                                    <Box>

                                        <Stack direction="row" spacing={2} marginTop='1rem'>
                                            <Avatar alt="Remy Sharp" src={post.authorImageSrc} />
                                            <Box>
                                                <Box className={classes.footResponsive}>{post.authorName}</Box>
                                                <Box className={classes.footerResponsive}>{post.authorProfile}</Box>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box marginTop='1rem'>
                                        <Link to="/article" className={classes.linkResponsive}>Lire l'article</Link>
                                    </Box>
                                </Stack>
                            ))}
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Grid item xs={8}>
                        <Box className={classes.header}>Posts populaires</Box>
                        <Box display="flex" flexWrap='wrap'>
                            {popularPosts.map((post, index) => (
                                <Stack sx={{ maxWidth: 345 }} key={index} href={post.url} marginRight={4}>
                                    <Stack marginTop='2.5rem' className={classes.post}>
                                        <img src={post.postImageSrc}
                                            alt="article"
                                            className={classes.image} />

                                        <Box gutterBottom variant="h5" className={classes.title}>
                                            {post.title}
                                        </Box>
                                    </Stack>
                                    <Box>

                                        <Stack direction="row" spacing={2} marginTop='1rem'>
                                            <Avatar alt="Remy Sharp" src={post.authorImageSrc} />
                                            <Box>
                                                <Box className={classes.foot}>{post.authorName}</Box>
                                                <Box className={classes.footer}>{post.authorProfile}</Box>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box marginTop='1rem'>
                                        <Link to="/article" className={classes.link}>Lire l'article</Link>
                                    </Box>
                                </Stack>
                            ))}
                        </Box>
                    </Grid>
                </>
            )}



        </>
    );
}
