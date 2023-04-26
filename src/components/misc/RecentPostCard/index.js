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

export default function RecentPost({ posts }) {
    const classes = useStyles();

    return (
        <Box >
            {posts.map((post, index) => (
                <Grid container spacing={2} key={index} marginTop='1.5rem' className="postRecent">
                    <Grid item xs={8} >
                        <Box className="titrePost">{post.title}</Box>
                        <Box marginTop='1rem'>
                            <Link to='/article' className="link">Lire l'article</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            src={post.postImageSrc}
                            alt='post'
                            className={classes.imageRecente}
                        />
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
}
