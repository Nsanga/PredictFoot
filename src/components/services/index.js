import React from 'react';
import { Box } from '@material-ui/core';
import Slider from 'react-slick'; 
import { Stack } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Slide } from '../misc/Slide';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './style.css'

const testimonials = [
  {
    numero: "01",
    titre: "Ameliorez vos pronostics",
    description: "Devenez un expert en pronostics en quelques étapes simples",
  },
  {
    numero: "02",
    titre: "Adam Cuppy",
    description: "Founder, EventsNYC"
  },
  {
    numero: "03",
    titre: "Steven Marcetti",
    description: "Event Manager, Brite"
  }
];

const Service = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
     
  };

  return (
    <>
      {isMatch ? (
        <div className="serviceContainerResponsive">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="servicetestimonialCardResponsive">
                <Stack className="serviceavatarResponsive">
                  {testimonial.numero}
                </Stack>
                <Box>
                  <Box className="servicetitleResponsive">
                    {testimonial.titre}
                  </Box>
                  <Box className="servicedescriptionResponsive">
                    {testimonial.description}
                  </Box>
                  <button className="actionService">Demarrer</button>
                </Box>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="serviceContainer">
          <Slide 
              testimonials={testimonials}
              autoPlay={true}
              stopAutoPlayOnHover={true}
              animation="slide"
              indicators={false}
              navButtonsAlwaysVisible={false}
              navButtonsWrapperProps={{
                style: {
                  position: 'absolute',
                  transform: 'translateY(-30%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }}
              PrevIcon={<MdKeyboardArrowLeft />}
              NextIcon={<MdKeyboardArrowRight />}
            />
        </div>
      )}
    </>

  );
};

export default Service;