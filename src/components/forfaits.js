import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent } from '@material-ui/core';
import { CardHeader, Divider, Stack } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';


const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: '900',
    fontSize: '3rem',
    color: "#243E63",
    marginTop: "12px"
  },
  customBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '400px',
    height: 'auto',
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: '#1972e8',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.14)',
    textAlign: 'center',
    marginTop: '40px',
    marginRight: '16px',

    '&:hover': {
      backgroundColor: '#3498DB',
      transform: 'translateY(-1rem)',
      marginRight: '16px',
      boxShadow: '8px 16px 16px 8px rgba(0, 0, 0, 0.14)',
    },

  },
  CardContent: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

    '&:hover': {
      transform: 'translateY(-1rem)',
      marginRight: '16px',
      boxShadow: '8px 16px 16px 8px rgba(0, 0, 0, 0.14)',
      color: '#3498DB'
    },
  },
  name: {
    fontWeight: '700',
    fontSize: '1.5rem',
    textAlign: 'center',
    color: "#243E63",
  },
  price: {
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign: 'center',
    marginTop: '2rem',
    color: "#243E63",
  },
  duration: {
    fontWeight: '700',
    fontSize: '1rem',
    color: "gray",
    textAlign: 'center',
    marginTop: '1rem'
  },
  subscribe: {
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'none',
    marginTop: "5rem"
  },

  rootResponsive: {
    fontWeight: '900',
    fontSize: '1.8rem',
    color: "#243E63",
    marginTop: "3rem",
    marginBottom: "12px",
  },
  customBoxResponsive: {
    alignItems: 'center',
    margin: '0rem 4rem 0rem 0rem',
    paddingLeft: theme.spacing(8),
    paddingTop: theme.spacing(2),
  },
  cardResponsive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '8px',
    backgroundColor: '#F3F4F6',
    textAlign: 'center', 

  },
  CardContentResponsive: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

  },

  nameResponsive: {
    fontWeight: '700',
    fontSize: '1.5rem',
    textAlign: 'center',
    color: "#243E63",
  },
  priceResponsive: {
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign: 'center',
    marginTop: '2rem',
    color: "#243E63",
  },
  durationResponsive: {
    fontWeight: '700',
    fontSize: '1rem',
    color: "gray",
    textAlign: 'center',
    marginTop: '1rem'
  },
  subscribeResponsive: {
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'none',
    marginTop: "5rem"
  }
}));

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

const Forfait = () => {
  const classes = useStyles();
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
                  <Stack className={classes.rootResponsive}>
                    Nos forfaits
                  </Stack>
                </Box>
                <Box className={classes.customBoxResponsive}>
                  <Carousel
                    autoPlay={true}
                    stopAutoPlayOnHover={true}
                    animation="slide"
                    navButtonsAlwaysVisible={false}
                  >

                    {defaultPlans.map((plan, index) => (
                      <Card sx={{ minWidth: 270 }} className={classes.cardResponsive}>
                        <CardHeader />
                        <CardContent className={classes.CardContentResponsive} key={index}>
                          <Box className={classes.nameResponsive}>
                            {plan.name}
                          </Box>
                          <Box className={classes.priceResponsive}>
                            {plan.price}
                          </Box>
                          <Box className={classes.durationResponsive}>
                            {plan.duration}
                          </Box>
                          <Divider style={{ width: '100%', marginTop: '1rem' }} />

                          <CardActions className={classes.subscribeResponsive}>
                            <Button variant="contained" color="primary" >
                              Souscrire
                            </Button>
                          </CardActions>
                        </CardContent>
                      </Card>
                    ))}
                  </Carousel>
                </Box>
              </Box>
            </Box>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Box >
              <Box >
                <Box>
                  <Stack className={classes.root}>
                    Nos forfaits
                  </Stack>
                </Box>
                <Box className={classes.customBox}>

                  {defaultPlans.map((plan, index) => (
                    <Card sx={{ minWidth: 270 }} className={classes.card}>
                      <CardHeader />
                      <CardContent className={classes.CardContent} key={index}>
                        <Box className={classes.name}>
                          {plan.name}
                        </Box>
                        <Box className={classes.price}>
                          {plan.price}
                        </Box>
                        <Box className={classes.duration}>
                          {plan.duration}
                        </Box>
                        <Divider style={{ width: '100%', marginTop: '3rem' }} />

                        <CardActions className={classes.subscribe}>
                          <Button variant="contained" color="primary" >
                            Souscrire
                          </Button>
                        </CardActions>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </>
      )}

    </>
  );
};

export default Forfait;


