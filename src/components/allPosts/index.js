import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@material-ui/core';
import PopularCard from '../misc/PopularPostCard';
import './style.css';
import { Link } from 'react-router-dom';

export default function AllPosts({ blogs }) {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {isMatch ? (
                <>
                    <Box>
                        <Box display="flex" flexWrap='wrap' justifyContent='flex-start'>
                            {blogs?.map((item, index) => (
                                <Link to={`/article/${item._id}`} className='link-all-articles'>
                                    <PopularCard post={item} key={index} />
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box display="flex" flexWrap='wrap'>
                        {blogs?.map((item, index) => (
                            <Link to={`/article/${item._id}`} className='link-all-articles'>
                                <PopularCard post={item} key={index} />
                            </Link>
                        ))}
                    </Box>
                </>
            )}
        </>
    );
}
