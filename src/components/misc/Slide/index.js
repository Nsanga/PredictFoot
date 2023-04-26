import React from 'react'
import { TestimonialCard } from '../SliderCard';
import { Box } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

export function Slide({ testimonials, autoPlay, stopAutoPlayOnHover, animation, indicators, navButtonsAlwaysVisible, navButtonsWrapperProps, PrevIcon, NextIcon }) {
    return (
      <Box >
        <Carousel
          autoPlay={autoPlay}
          stopAutoPlayOnHover={stopAutoPlayOnHover}
          animation={animation}
          indicators={indicators}
          navButtonsAlwaysVisible={navButtonsAlwaysVisible}
          navButtonsWrapperProps={navButtonsWrapperProps}
          PrevIcon={PrevIcon}
          NextIcon={NextIcon}
        >
          {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            numero={testimonial.numero}
            titre={testimonial.titre}
            image={testimonial.image}
            description={testimonial.description}
          />
        ))}
        </Carousel>
      </Box>
    );
  }
  
