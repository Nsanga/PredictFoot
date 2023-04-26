import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import {CardActions, CardContent } from '@material-ui/core';
import { CardHeader, Stack } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import Pricing from '../misc/PricingCard/index.js';
import './style.css';
import Titre from '../misc/Titre/index.js';

const defaultPlans = [
  {
    name: "Free",
    price: "0 FCFA",
    duration: "Mois",

  },
  {
    name: "Pro",
    price: "2.500 FCFA",
    duration: "Mois",
  },
  {
    name: "Mega",
    price: "5.000 FCFA",
    duration: "Mois",
  },
  {
    name: "Extra",
    price: "10.000 FCFA",
    duration: "Mois",
  },
];

const Packages = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);


  return (
    <>
      {isMatch ? (
        <>
          <Container>
            <Box >
              <Box >
                <Box>
                  <Stack className="rootResponsivePackage">
                    Nos forfaits
                  </Stack>
                </Box>
                <Box className="customBoxResponsivePackage">
                  <Carousel
                    autoPlay={true}
                    stopAutoPlayOnHover={true}
                    animation="slide"
                    navButtonsAlwaysVisible={false}
                  >

                    {defaultPlans.map((plan, index) => (
                      <Box sx={{ minWidth: 270 }} className="cardResponsivePackage">
                        <CardHeader />
                        <CardContent className="CardContentResponsivePackage" key={index}>
                          <Box className="nameResponsivePackage">
                            {plan.name}
                          </Box>
                          <Box className="priceResponsivePackage">
                            {plan.price}
                          </Box>
                          <Box className="durationResponsivePackage">
                            {plan.duration}
                          </Box>

                          <CardActions className="subscribeResponsivePackage">
                            <Button variant="contained" color="primary" >
                              Souscrire
                            </Button>
                          </CardActions>
                        </CardContent>
                      </Box>
                    ))}
                  </Carousel>
                </Box>
              </Box>
            </Box>
          </Container>
        </>
      ) : (
        <>
          <Titre
            title={<Box className='head' >Nos forfaits</Box>}
            size="3rem"
          />

          <Container>
            <Box className='customBox'>
              {defaultPlans.map((item, index) => (
                <Pricing key={index}
                  name={<div className='name'>{item.name}</div>}
                  price={<div className='price'>{item.price}</div>}
                  duration={<div className='duration'>{item.duration} </div>}
                  subscribeButton={<div className="subscribe">Souscrire</div>}
                  background="#1677d8"
                />
              ))}
            </Box>
          </Container>

        </>
      )}

    </>
  );
};

export default Packages;


