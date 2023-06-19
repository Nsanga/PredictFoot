import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '../../components/misc/Header';
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../../components/misc/Footer'; 
import Download from '../../components/downloadApp';
import { useMediaQuery, useTheme } from '@material-ui/core';
import RecentPosts from '../../components/recentsPosts';
import Article from '../../components/article';
import { connect } from "react-redux";


const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

}));


const ArticleScreen = (
    {
        blogs
    }
) => {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <>
            <Header />

            {isMatch ? (
                <>
                    <Article />
                </>
            ) : (
                <>
                    <Box className={classes.section}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={8}>
                                    <Article />
                                </Grid>

                                <Grid item xs={4} style={{ backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
                                    <RecentPosts blogs={blogs} />
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                </>
            )}


            <Download />
            <Footer />
        </>
    );
}
const mapStateToProps = ({ BlogReducer }) => ({
    blogs: BlogReducer.blogs,
    loading: BlogReducer.loading
});

export default connect(mapStateToProps)(ArticleScreen);