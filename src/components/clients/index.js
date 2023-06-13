import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import ClientCard from '../misc/ClientCard';
import './style.css';
import Titre from '../misc/Titre/index';
import { connect, useDispatch } from "react-redux";
import { fetchHomeRequest } from '../../redux/home/actions';
import load from '../../assets/loading.gif'

const Clients = (
  {
    homes,
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
    console.log('Dispatched fetchHeadbandRequest');
  }, [dispatch]);

  return (
    <>
      {isMatch ? (
        <>

          <Container>

            <Box
              className="containerResponsiveClient"
            >
              <Stack className="rootResponsivePackage">
                Ce que nos clients disent
              </Stack>
            </Box>

            <Box
              className="containerResponsiveClient"
            >

              <Carousel
                autoPlay={true}
                stopAutoPlayOnHover={true}
                animation="slide"
                navButtonsAlwaysVisible={false}
              >
                {loading ? (
                  <Stack direction="row" justifyContent='center' marginBottom='1rem'>
                    <img src={load} alt="load animation" className="load-animation" />
                  </Stack>
                ) : (
                  homes?.customer?.map((item, index) => (
                    <div key={index} className="carouselItem">
                      <Box
                        textAlign="center"
                        className="description"
                        lineHeight={1.6}>
                        " {item.description} "
                      </Box>
                      <Box className="footerClient">
                        <Avatar alt="Remy Sharp" src={item.image} />
                        <Box className="footerName">
                          {item.name}
                        </Box>
                      </Box>
                    </div>
                  ))
                )}
              </Carousel>

            </Box>

          </Container>
        </>
      ) : (
        <>
          <Box
            className="containerResponsiveClient"
          >
            <Titre
              title={<Box className="headerClient">Ce que nos clients disent</Box>}
              size="3rem"
            />
          </Box>

          <Container>

            <Box>
              {loading ? (
                <Stack direction="row" justifyContent='center' marginBottom='1rem'>
                  <img src={load} alt="load animation" className="load-animation" />
                </Stack>
              ) : (
                <Stack direction="row" spacing={2} marginTop={6} >
                  {homes?.customer?.map((item, index) => (
                    <ClientCard key={index}
                      description={<div>"{item.description}"</div>}
                      imageSrc={item.image}
                      customerName={item.name}
                    />
                  ))}
                </Stack>
              )}

            </Box>
          </Container>

        </>
      )}

    </>
  );
};

const mapStateToProps = ({ HomeReducer }) => ({
  homes: HomeReducer.homes,
  loading: HomeReducer.loading
});

export default connect(mapStateToProps)(Clients);


