import { Box, Stack, Avatar } from '@mui/material';
import './style.css';
import { Link } from 'react-router-dom';

export default function PopularCard({ post }) {

  return (
    <Stack sx={{ maxWidth: 345 }} href={post.url} className='popular-posts'>
      <Stack marginTop='2.5rem' className="post">
        <img src={post.postImageSrc} alt="article" className='image-populars-posts'/>

        <Box className="title-populars-posts">
          {post.title}
        </Box>
      </Stack>
      <Box>
        <Stack direction="row" spacing={2} marginTop='1rem' alignItems="center" className="stack-populars-posts">
          <Avatar alt={post.authorName} src={post.authorImageSrc} />
          <Box>
            <Box className="foot-populars-posts">{post.authorName}</Box>
            <Box className="footer-populars-posts">{post.authorProfile}</Box>
          </Box>
        </Stack>
      </Box>
      <Box marginTop='1rem' >
        <Link to="/article" className="link-popular-post">Lire l'article</Link>
      </Box>
    </Stack>
  );
}
