import { Box, Stack, Avatar } from '@mui/material';
import './style.css';

export default function PopularCard({ post }) {

  return (
    <Stack sx={{ maxWidth: 345 }} className='popular-posts'>
      <Box className="post-popular-body">
      <Stack marginTop='2.5rem' className="post">
        <img src={post.imageArticle} alt="article" className='image-populars-posts'/>

        <Box className="title-populars-posts">
          {post.title}
        </Box>
      </Stack>
      <Box>
        <Stack direction="row" spacing={2} marginTop='1rem' alignItems="center" className="stack-populars-posts">
          <Avatar alt={post.authorName} src={post.profile} />
          <Box>
            <Box className="author-name">{post.author}</Box>
            <Box className="author-profession">{post.profession}</Box>
          </Box>
        </Stack>
      </Box>
      </Box>
      <Box marginTop='1.5rem' >
        <Box className='box-link'>Lire l'article</Box>
      </Box>
    </Stack>
  );
}
