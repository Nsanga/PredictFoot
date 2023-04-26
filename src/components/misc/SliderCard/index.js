import { Box } from '@material-ui/core';
import React from 'react'
import './style.css'
import { Stack } from '@mui/material';

export function TestimonialCard({ numero, titre, image, description }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#F3F4F6', borderRadius: '10px', }}>
      {image ? (
        <img src={image} alt={titre} style={{ maxWidth: "250px" }} />
      ) : (
        numero && <Box className='boxCustom'>{numero}</Box>
      )}

      <Box style={{ width: '50%' }}>
        {image ? (
          <Stack spacing={2} className='testimonial'>
            <Box className='numero'>{numero && <Box>{numero}</Box>}</Box>
            <Box className='titre'>{titre}</Box>
            <Box className='descriptionCustom'>{description}</Box>
          </Stack >
        ) : (
          <Box className='testimonialCard'>
            <Box className='titleCustom'>{titre}</Box>
            <Box className='descriptionCustom'>{description}</Box>
          </Box>
        )}
        <button className='action'>
          Demarrer
        </button>
      </Box>

    </div>
  );
}

