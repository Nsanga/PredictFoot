import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { connect, useDispatch } from "react-redux";
import { fetchArticleRequest } from '../../redux/blog/actions';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/fr';
import load from '../../assets/loading.gif'
import './style.css';

const Article = ({ loading, articles }) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const { id } = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticleRequest(id));
        window.scrollTo(0, 0)
        console.log('dispatch(fetchArticleRequest(id))');
    }, [dispatch, id]);

    if (loading) {
        return (
            <Stack direction="row" justifyContent='center' alignItems='center' height='100vh'>
                <img src={load} alt="load animation" className="load-animation" />
            </Stack>
        )
    }

    return (

        <Box className="section-Article ">
            <Box className='title'>
                {articles.title}
            </Box>
            <Stack direction="row" spacing={2} marginTop='3rem' >
                <Avatar alt="profile"
                    src={articles.profile}
                    sx={{ width: 70, height: 70 }} />
                <Box className='author-box'>
                    <Box className='author-name'>{articles.author}</Box>
                    <Box className='author-profession' >{articles.profession}</Box>
                    <Box className='date-article'>{moment(articles.datePublication).format('L')}</Box>
                </Box>
            </Stack>
            <Box spacing={2} marginTop='3rem'>
                <img
                    src={articles.imageArticle}
                    alt='article'
                    className='image'
                />
            </Box>
            <Stack direction='row' spacing={2} marginTop='2rem' width="95%">
                <Box style={{ border: '4px solid #243E63' }} />
                <Box className='resume'>
                    {articles.preambule}
                </Box>
            </Stack>
            <Stack direction='column' spacing={2} marginTop='2rem' width="95%">
                <Box className='subtitle'>
                    {articles.title}
                </Box>
                <Box className='description-article'>
                    {articles.description}
                </Box>
            </Stack>
        </Box>
    );
}
const mapStateToProps = ({ BlogReducer }) => ({
    articles: BlogReducer.articles,
    loading: BlogReducer.loading
});

export default connect(mapStateToProps)(Article);
