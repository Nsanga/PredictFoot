import * as React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@material-ui/core';
import RecentPost from '../misc/RecentPostCard';
import './style.css';


export default function RecentPosts() {
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
                        <Box variant='h1' className="headerResponsiveRecentPost">Posts récents</Box>
                        <Box>
                            <RecentPost posts={recentPosts} />
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className="headerRecentPost">Posts récents</Box>
                    <Box>
                        <RecentPost posts={recentPosts} />
                    </Box>
                </>
            )}


        </>
    );
}
