import * as React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@material-ui/core';
import RecentPost from '../misc/RecentPostCard';
import './style.css';
import { Link } from 'react-router-dom';


export default function RecentPosts({ blogs }) {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const filterArticles = (array = [], statut) => {
        return array.filter((ele) => ele.articleStatut === statut)
    }

    return (
        <>
            {isMatch ? (
                <>
                    <Box>
                        <Box variant='h1' className="headerRecentPost">Posts récents</Box>
                        <Box>
                            {filterArticles(blogs, "recent").map((post, index) => (
                                <Link to={`/article/${post._id}`} className='link-all-articles'>
                                    <RecentPost post={post} key={index} />
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className="headerRecentPost">Posts récents</Box>
                    {filterArticles(blogs, "recent").map((post, index) => (
                        <Link to={`/article/${post._id}`} className='link-all-articles'>
                            <RecentPost post={post} key={index} />
                        </Link>
                    ))}
                </>
            )}


        </>
    );
}
