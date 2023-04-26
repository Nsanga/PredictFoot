import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import register from '../../assets/register.png'
import login from '../../assets/login.png'
import home from '../../assets/home.png'
import { Container, Stack, Box } from '@mui/material';
import { MdOutlineSpeed, MdSecurity } from 'react-icons/md';
import { GoSmiley } from 'react-icons/go';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Slide } from '../misc/Slide';
import './style.css'

const testimonials = [
  {
    image: register,
    numero: "01",
    titre: "Inscrivez-vous",
    description: "Téléchargez l'application mobile PREDICTFOOT et créez votre compte."
  },
  {
    image: login,
    numero: "02",
    titre: "Connectez-vous",
    description: "Connectez-vous pour accéder à toutes nos fonctionnalités exclusives et ne rien manquer de nos pronostics."
  },
  {
    image: home,
    numero: "03",
    titre: "Prenez part à nos pronostics",
    description: "Boostez votre expérience de pari en ligne en participant à nos pronostics et en bénéficiant de conseils et analyses de qualité supérieure"
  }
];

const Register = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      {isMatch ? (
        <>
          <Container>
            <Stack>
              <Box className='titlesRegisterResponsive'>
                Comment ca marche?
              </Box>
              <Box className='subtitlesRegisterResponsive'>
                Prenez la main en quelques minutes
              </Box>
            </Stack>
            <Box>
              <Carousel
                autoPlay={true}
                stopAutoPlayOnHover={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={false}
                navButtonsWrapperProps={{
                  style: {
                    position: 'absolute',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                  }
                }}
                PrevIcon={<MdKeyboardArrowLeft />}
                NextIcon={<MdKeyboardArrowRight />}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonialCardRegisterResponsive">
                    <Box className="contentRegisterResponsive">
                      <img src={testimonial.image} alt={testimonial.titre} style={{ maxWidth: "200px" }} />
                    </Box>
                    <Box style={{ width: '100%' }}>
                      <Box className="avatarRegisterResponsive">
                        {testimonial.numero}
                      </Box>
                      <Box className="titleRegisterResponsive">
                        {testimonial.titre}
                      </Box>
                      <Box className="descriptionRegisterResponsive">
                        {testimonial.description}
                      </Box>
                      <button className="actionRegisterResponsive" >Demarrer</button>
                    </Box>
                  </div>
                ))}
              </Carousel>
            </Box>
          </Container>
        </>
      ) : (
        <>
          <div className="containerRegister">
            <Stack>
              <Box className='titleRegister'>
                Comment ca marche?
              </Box>
              <Box className='subtitle'>
                Prenez la main en quelques minutes
              </Box>
              <Stack direction='row' spacing={2} className='stackCustom'>

                <Box className='stack'>
                  <GoSmiley className='icon' /><Box className='layout'>Simple</Box>
                </Box>

                <Box className='stack'>
                  <MdOutlineSpeed className='icon' /><Box className='layout'>Rapide</Box>
                </Box>

                <Box className='stack'>
                  <MdSecurity className='icon' /><Box className='layout'>Sécurisé</Box>
                </Box>

              </Stack>
            </Stack>
            <Slide
              testimonials={testimonials}
              autoPlay={true}
              stopAutoPlayOnHover={true}
              animation="slide"
              indicators={false}
              navButtonsAlwaysVisible={true}
              navButtonsWrapperProps={{
                style: {
                  position: 'absolute',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }}
              PrevIcon={<MdKeyboardArrowLeft />}
              NextIcon={<MdKeyboardArrowRight />}
            />

          </div>
        </>
      )}
    </>

  );
};

export default Register;