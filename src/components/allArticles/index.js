import React from "react";
import { Stack } from "@mui/material";
import { Avatar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F3F4F6',
        padding: theme.spacing(6),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    section: {
        padding: theme.spacing(6),
    },
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
        color: "#243E63",
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

    sectionResponsive: {
        padding: theme.spacing(4),
    },
    headerResponsive: {
        fontWeight: '700',
        fontSize: '2rem',
        color: "#243E63",
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(4),
    },

}));

export default function AllArticle() {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
            }
        ],
    };

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
                    <Box  className={classes.headerResponsive}>Tous les articles</Box>
                    <Box className={classes.sectionResponsive}>
                        <Slider {...settings}>

                            {popularPosts.map((post, index) => (
                                <Stack key={index} href={post.url}>
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
                                    <Stack direction="row" spacing={2} marginTop='1rem'>
                                        <Link className={classes.link}>Lire l'article</Link>
                                    </Stack>
                                </Stack>
                            ))}
                        </Slider>

                    </Box>
                </>
            ) : (
                <>
                    <Box className={classes.section}>
                        <Box sx={{ flexGrow: 1 }}>

                            <Box className={classes.header}>Tous les articles</Box>
                            <Slider {...settings}>

                                {popularPosts.map((post, index) => (
                                    <Stack sx={{ maxWidth: 345 }} key={index} href={post.url}>
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
                                        <Stack direction="row" spacing={2} marginTop='1rem'>
                                            <Link className={classes.link}>Lire l'article</Link>
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
