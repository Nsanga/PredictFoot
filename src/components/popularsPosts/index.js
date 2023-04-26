import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from '@material-ui/core';
import PopularCard from '../misc/PopularPostCard';
import './style.css';

export default function PopularPost() {
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
                        <Box variant='h1' className="headerResponsivePopularPost">Posts populaires</Box>
                        <Box display="flex" flexWrap='wrap'>
                        {popularPosts.map((post, index) => (
                            <PopularCard post={post} key={index} />
                        ))}
                    </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className="headerPopularPost">Posts populaires</Box>
                    <Box display="flex" flexWrap='wrap'>
                        {popularPosts.map((post, index) => (
                            <PopularCard post={post} key={index} />
                        ))}
                    </Box>
                </>
            )}
        </>
    );
}
