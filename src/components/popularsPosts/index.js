import * as React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@material-ui/core';
import PopularCard from '../misc/PopularPostCard';
import './style.css';
import { Link } from 'react-router-dom';

export default function PopularPost({ blogs }) {
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
                        <Box variant='h1' className="headerPopularPost">Posts populaires</Box>
                        <Box display="flex" flexWrap='wrap'>
                            {filterArticles(blogs, "populaire")
                            .slice(0, 2)
                            .map((post, index) => (
                                <Link to={`/article/${post._id}`} className='link-all-articles'>
                                    <PopularCard post={post} key={index} />
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className="headerPopularPost">Posts populaires</Box>
                    <Box display="flex" flexWrap='wrap'>
                            {filterArticles(blogs, "populaire")
                            .slice(0, 2)
                            .map((post, index) => (
                                <Link to={`/article/${post._id}`} className='link-all-articles'>
                                    <PopularCard post={post} key={index} />
                                </Link>
                            ))}
                    </Box>
                </>
            )}
        </>
    );
}
