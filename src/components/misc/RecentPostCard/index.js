import { makeStyles } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import './style.css'

export default function RecentPost({ post }) {

    const maxWords = 10; // Maximum number of words for the title
    const words = post.title.split(" "); // Split the title into words

    let truncatedTitle;
    if (words.length > maxWords) {
        // More than ten words, truncate the title and add ellipsis
        truncatedTitle = words.slice(0, maxWords).join(" ") + "...";
    } else {
        // Ten words or less, use the original title
        truncatedTitle = post.title;
    }

    return (
        <Box style={{ marginTop: '1rem' }} className="post-recent">
            <Grid container spacing={2} className="post-recent-head">
                <Grid item xs={7} >
                    <Box className="titrePost">{truncatedTitle}</Box>
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
