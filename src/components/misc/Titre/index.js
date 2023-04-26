import { Box, Container } from '@material-ui/core';
import { Stack } from '@mui/material';
import React from 'react'
import './style.css';

export default function Titre({ title, size }) {

  return ( 
    <Container>
      <Box>
        <Stack fontSize={size} className='headTitle'>
          {title}
        </Stack> 
      </Box>
    </Container >
  )
};