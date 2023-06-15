import React, { useEffect } from "react";
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
import { connect, useDispatch } from "react-redux";
import { fetchHomeRequest } from '../../redux/home/actions';
import load from '../../assets/loading.gif'
import { Stack } from "@mui/material";
import './style.css'

const LandingPage = (
  {
    loading
  }
) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeRequest());
  }, [dispatch]);


  if (loading) {
    return (
      <Stack direction="row" justifyContent='center' alignItems='center' height='100vh'>
        <img src={load} alt="load animation" className="load-animation" />
      </Stack>
    )
  }

  return (
    <animated.div>

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
const mapStateToProps = ({ HomeReducer }) => ({
  homes: HomeReducer.homes,
  loading: HomeReducer.loading
});

export default connect(mapStateToProps)(LandingPage);
