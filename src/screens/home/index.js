import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Header from '../../components/header';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@material-ui/core';

import phone from '../../assets/phone.png';
import Service from '../../components/services'
import Statistique from '../../components/statistiques'
import Forfait from '../../components/forfaits'
import Client from '../../components/clients'
import Download from '../../components/dowloadApp'
import About from '../../components/aboutUs'
import Register from '../../components/registers'
import Footer from '../../components/footer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    marginTop: '7rem'
  },
  contentResponsive: {
    marginTop: '4rem'
  },
  text: {
    fontSize: "1.3rem",
    color: "#2196f3",
    fontWeight: "500",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
  textResponsive: {
    fontSize: "1.5rem",
    color: "#2196f3",
    fontWeight: "500",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
  descriptionResponsive: {
    fontWeight: '900',
    fontSize: '2rem',
    display: "flex",
    marginTop: "12px",
    color: "#243E63"
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'none',
    marginLeft: '6px',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  }
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const fade = useSpring({
    opacity: isLoading ? 0 : 1,
    delay: 1000,
  });

  const slideIn = useSpring({
    transform: isLoading ? "translateY(100%)" : "translateY(0)",
    delay: 1000,
  });

  return (
    <animated.div style={fade}>
      <Header />
      {isMatch ? (
        <>
          <Container>
            <Box className={classes.contentResponsive}>
              <Box>

                <Stack direction="column" spacing={32} className={classes.root}>

                  <Box >
                    <Box className={classes.textResponsive}>
                      Pronostics pour tous...
                    </Box>
                    <Box className={classes.descriptionResponsive} lineHeight={1.4}>
                      Des pronostics gagnants en toute sécurité avec notre plateforme de pronostics !
                    </Box>
                    <Stack direction="row" spacing={2} py={4}>
                      <Button variant="contained" startIcon={<FaApple size="2rem" />}>
                        <span className={classes.button}>App Store</span>
                      </Button>
                      <Button variant="contained" startIcon={<FaGooglePlay size="1.5rem" />} style={{ background: "#243E63" }}>
                        <span className={classes.button}>Play Store</span>
                      </Button>
                    </Stack>
                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      <animated.h1 style={slideIn}>
                        <img src={phone} alt="logo" style={{ maxWidth: "250px" }} />
                      </animated.h1>
                    </Box>
                  </Box>

                </Stack>
              </Box>
            </Box>
            <Service />
          </Container>
          <Statistique />
          <Forfait />
          <Client />
          <Download />
          <About />
          <Register />
          <Footer />
        </>
      ) : (
        <>
          <Container>
            <Box className={classes.content}>
              <Box>

                <Stack direction="row" spacing={32} className={classes.root}>
                  <animated.h1 style={slideIn}>
                    <img src={phone} alt="logo" style={{ maxWidth: "300px" }} />
                  </animated.h1>
                  <Box >
                    <Box className={classes.text}>
                      Pronostics pour tous...
                    </Box>
                    <Box style={{ fontWeight: '900', fontSize: '3.2rem', display: "flex", marginTop: "12px", color: "#243E63" }} lineHeight={1.4}>
                      Des pronostics gagnants en toute sécurité avec notre plateforme de pronostics !
                    </Box>
                    <Stack direction="row" spacing={2} py={4}>
                      <Button variant="contained" startIcon={<FaApple size="2rem" />}>
                        <span className={classes.button}>App Store</span>
                      </Button>
                      <Button variant="contained" startIcon={<FaGooglePlay size="1.5rem" />} style={{ background: "#243E63" }}>
                        <span className={classes.button}>Play Store</span>
                      </Button>
                    </Stack>
                  </Box>

                </Stack>
              </Box>
            </Box>
            <Service />
            <Statistique />
            <Forfait />
            <Client />
          </Container>
          <Download />
          <About />
          <Register />
          <Footer />
        </>
      )}


    </animated.div>
  );
}