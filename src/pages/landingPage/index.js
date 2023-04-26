import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Container } from '@material-ui/core';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Header from '../../components/misc/Header'
import Heading from '../../components/heading';
import Service from '../../components/services';
import Statistique from '../../components/statistics';
import Forfait from '../../components/packages';
import Client from '../../components/clients';
import Download from '../../components/downloadApp';
import About from '../../components/aboutUs';
import Register from '../../components/registers';
import Footer from "../../components/misc/Footer"; 

export default function LandingPage() {
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

  return (
    <animated.div style={fade}>
      
      <Header />
      {isMatch ? (
        <>
          <Container>
            <Heading />
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
            <Heading />
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