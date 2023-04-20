import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import register from '../assets/register.png'
import login from '../assets/login.png'
import home from '../assets/home.png'
import { Container, Stack } from '@mui/material';
import { MdOutlineSpeed, MdSecurity } from 'react-icons/md';
import { GoSmiley } from 'react-icons/go';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {

    height: "auto",
    borderRadius: '10px',
    margin: '60px'
  },
  content: {
    position: 'relative',
    backgroundColor: '#F3F4F6',
    borderRadius: '10px',
  },
  testimonialCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatar: {
    width: '60px',
    height: '60px',
    backgroundColor: 'transparent',
    color: '#4299e1',
    fontWeight: 'bold',
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #4299e1',
    borderRadius: '100%',
    marginTop: "3rem"
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: "#243E63",
    marginTop: "2rem",
  },
  description: {
    fontWeight: '500',
    fontSize: '1rem',
    color: "#4299e1",
    marginTop: "1rem"
  },
  action: {
    margin: '20px 0px',
    background: "#4299e1",
    fontWeight: 'bold',
    fontSize: '1rem',
    color: "#ffffff",
    textTransform: 'none',
    marginTop: "2rem",

    '&:hover': {
      background: 'blue'
    },
  },

  contentResponsive: {
    position: 'relative',
    backgroundColor: '#F3F4F6',
    borderRadius: '100%',
  },
  testimonialCardResponsive: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatarResponsive: {
    width: '60px',
    height: '60px',
    backgroundColor: 'transparent',
    color: '#4299e1',
    fontWeight: 'bold',
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #4299e1',
    borderRadius: '100%',
  },
  titleResponsive: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: "#243E63",
    marginTop: "2rem",
  },
  descriptionResponsive: {
    fontWeight: '500',
    fontSize: "1rem",
    color: "#4299e1",
    marginTop: "1rem"
  },
  actionResponsive: {
    margin: '20px 0px',
    background: "#4299e1",
    fontWeight: 'bold',
    fontSize: '1rem',
    color: "#ffffff",
    textTransform: 'none',
    marginTop: "2rem",
  },

}));

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
  const styles = useStyles();
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
              <Box
                style={{
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                  marginTop: "4rem",
                  color: "#2196f3",
                }}
              >
                Comment ca marche?
              </Box>
              <Box style={{ fontWeight: '900', fontSize: '1.8rem', color: "#243E63", marginBottom:'3rem' }}>
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
                  <div key={index} className={styles.testimonialCardResponsive}>
                    <Box className={styles.contentResponsive}>
                      <img src={testimonial.image} alt={testimonial.titre} style={{ maxWidth: "200px" }} />
                    </Box>
                    <Box style={{ width: '100%' }}>
                      <Box className={styles.avatarResponsive}>
                        {testimonial.numero}
                      </Box>
                      <Box className={styles.titleResponsive}>
                        {testimonial.titre}
                      </Box>
                      <Box className={styles.descriptionResponsive}>
                        {testimonial.description}
                      </Box>
                      <Button className={styles.actionResponsive} variant="contained" color="secondary" disableElevation>Demarrer</Button>
                    </Box>
                  </div>
                ))}
              </Carousel>
            </Box>
          </Container>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <Stack>
              <Typography
                style={{
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                  marginTop: "12px",
                  color: "#2196f3",
                }}
              >
                Comment ca marche?
              </Typography>
              <Typography style={{ fontWeight: '900', fontSize: '3rem', color: "#243E63" }}>
                Prenez la main en quelques minutes
              </Typography>
              <Stack direction='row' spacing={2} style={{ marginBottom: '6rem', marginTop: '3rem' }}>

                <Stack direction='row' spacing={2} style={{ fontSize: '1.5rem', color: "#2196f3", border: '2px solid #4299e1', borderRadius: '5px' }}>
                  <GoSmiley style={{ margin: '4px' }} /><Typography style={{ fontWeight: 'bold', margin: '4px' }}>Simple</Typography>
                </Stack>

                <Stack direction='row' style={{ fontSize: '1.5rem', color: "#2196f3", border: '2px solid #4299e1', borderRadius: '5px' }}>
                  <MdOutlineSpeed style={{ margin: '4px' }} /><Typography style={{ fontWeight: 'bold', margin: '4px' }}>Rapide</Typography>
                </Stack>

                <Stack direction='row' spacing={2} style={{ fontSize: '1.5rem', color: "#2196f3", border: '2px solid #4299e1', borderRadius: '5px' }}>
                  <MdSecurity style={{ margin: '4px' }} /><Typography style={{ fontWeight: 'bold', margin: '4px' }}>Sécurisé</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Box className={styles.content}>
              <Carousel
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
                    alignItems: 'center',

                  }
                }}
                PrevIcon={<MdKeyboardArrowLeft />}
                NextIcon={<MdKeyboardArrowRight />}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={styles.testimonialCard}>
                    <img src={testimonial.image} alt={testimonial.titre} style={{ maxWidth: "250px" }} />
                    <Box style={{ width: '50%' }}>
                      <Box className={styles.avatar}>
                        {testimonial.numero}
                      </Box>
                      <Box className={styles.title}>
                        {testimonial.titre}
                      </Box>
                      <Box className={styles.description}>
                        {testimonial.description}
                      </Box>
                      <Button className={styles.action} variant="contained" color="secondary" disableElevation>Demarrer</Button>
                    </Box>
                  </div>
                ))}
              </Carousel>
            </Box>
          </div>
        </>
      )}
    </>

  );
};

export default Register;