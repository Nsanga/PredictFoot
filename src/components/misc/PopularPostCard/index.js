import { Box, Stack, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
image: {
    width: "345px",
    height: '280px',
    borderRadius: '8px',
    objectFit: "cover"
},
});

export default function PopularCard({ post }) {
  const classes = useStyles();

  return (
    <Stack sx={{ maxWidth: 345 }} href={post.url} marginRight={4}>
      <Stack marginTop='2.5rem' className="post">
        <img src={post.postImageSrc} alt="article" className={classes.image}/>

        <Box variant="h5" className="title">
          {post.title}
        </Box>
      </Stack>
      <Box>
        <Stack direction="row" spacing={2} marginTop='1rem'>
          <Avatar alt={post.authorName} src={post.authorImageSrc} />
          <Box>
            <Box className="foot">{post.authorName}</Box>
            <Box className="footer">{post.authorProfile}</Box>
          </Box>
        </Stack>
      </Box>
      <Box marginTop='1rem' >
        <Link to="/article" className="link">Lire l'article</Link>
      </Box>
    </Stack>
  );
}
