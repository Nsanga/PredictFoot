import { makeStyles } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import './style.css'

const useStyles = makeStyles((theme) => ({

    imageRecente: {
        height: '80px',
        width: '90px',
        borderRadius: '4px'
    },

    imageRecenteResponsive: {
        height: '80px',
        width: '90px',
        borderRadius: '4px'
    }

}));

export default function RecentPost({ post }) {

    return (
        <Box style={{ marginTop: '1rem' }} className="post-recent">
            <Grid container spacing={2} className="post-recent-head">
                <Grid item xs={7} >
                    <Box className="titrePost">{post.title}</Box>
                </Grid>
                <Grid item xs={5}>
                    <img
                        src={post.imageArticle}
                        alt='post'
                        className='imageRecente'
                    />
                </Grid>
            </Grid>
            <Box marginTop='1rem'>
            <Box className='box-link'>Lire l'article</Box>
            </Box>
        </Box>
    );
}
