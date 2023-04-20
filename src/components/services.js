import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import Slider from 'react-slick';
import { Stack } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '20rem',
    backgroundColor: '#F3F4F6',
    borderRadius: '10px',
    margin: '60px 0px'
  },
  containerResponsive: {
    padding: theme.spacing(4),
    backgroundColor: '#F3F4F6',
    borderRadius: '10px',
    marginBottom: '60px',
  },
  testimonialCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '30px 0px 0px 25rem',
  },
  testimonialCardResponsive: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '30px 0px 0px 1rem',
    width:'100%'
  },
  avatar: {
    width: '100px',
    height: '100px',
    backgroundColor: 'transparent',
    color: '#4299e1',
    fontWeight: '600',
    fontSize: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #4299e1',
    borderRadius: '100%',
    marginTop: "4rem"
  },
  avatarResponsive: {
    width: '60px',
    height: '60px',
    backgroundColor: 'transparent',
    color: '#4299e1',
    fontWeight: '600',
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #4299e1',
    borderRadius: '100%',
    marginBottom: "2rem"
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: "#243E63",
  },
  titleResponsive: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: "#243E63",
  },
  description: {
    fontWeight: '500',
    fontSize: '1rem',
    color: "#4299e1",
    marginTop: "1rem"
  },
  descriptionResponsive: {
    width: '90%',
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

  root: {
    fontSize: '6rem',
    color: '#828B9E',
    cursor: 'pointer',
    transition: 'color 0.3s ease, transform 0.3s ease',
    outline: 'none',

    '&:hover': {
      color: '#3498DB',
      transform: 'scale(1.25) translateY(-2rem)',
    },
  },
}));

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
  const styles = useStyles();
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <>
      {isMatch ? (
        <div className={styles.containerResponsive}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCardResponsive}>
                <Stack className={styles.avatarResponsive}>
                  {testimonial.numero}
                </Stack>
                <Box>
                  <Box className={styles.titleResponsive}>
                    {testimonial.titre}
                  </Box>
                  <Box className={styles.descriptionResponsive}>
                    {testimonial.description}
                  </Box>
                  <Button className={styles.action} variant="contained">Demarrer</Button>
                </Box>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className={styles.container}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <Stack className={styles.avatar} marginLeft='-8rem'>
                  {testimonial.numero}
                </Stack>
                <Box style={{ marginLeft: "15rem", marginBottom: '60px', marginTop: '-8rem' }}>
                  <Box className={styles.title}>
                    {testimonial.titre}
                  </Box>
                  <Box className={styles.description}>
                    {testimonial.description}
                  </Box>
                  <Button className={styles.action} variant="contained">Demarrer</Button>
                </Box>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>

  );
};

export default Service;