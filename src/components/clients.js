import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';


const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: '900',
    fontSize: '3rem',
    color: "#243E63",
    marginTop: "4rem",
  },
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center'
  },
  description: {
    fontWeight: '500',
    fontSize: '18px',
    margin: '20px',
    color: "#718096"
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
    backgroundColor: '#F3F4F6',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.14)',
    marginTop: '40px',
    marginRight: '16px',

  },
  CardContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

  },
  footer: {
    fontWeight: '600',
    fontSize: '16px',
    margin: '8px',
    color: "#243E63",
    letterSpacing: '0.1em'
  },

  rootResponsive: {
    fontWeight: '900',
    fontSize: '1.8rem',
    color: "#243E63",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  containerResponsive: {
    display: "block", 
    justifyContent: "center",
    alignItems: 'center'
  },
  descriptionResponsive: {
    fontWeight: '500',
    fontSize: '16px',
    margin: '20px',
    color: "#718096"
  },
  cardResponsive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: '#F3F4F6',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.14)',    

  },
  CardContentResponsive: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

  },
  footerResponsive: {
    fontWeight: '600',
    fontSize: '16px',
    margin: '8px',
    color: "#243E63",
    letterSpacing: '0.1em'
  },
}));

const client = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    customerName: "Charlotte Hale"
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    customerName: "Adam Cuppy"
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    customerName: "Steven Marcetti"
  }
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
            
                
                  <Box className={classes.rootResponsive}>
                    Ce que nos clients disent
                  </Box>
                
                <Box className={classes.containerResponsive}>

                <Carousel
                    autoPlay={true}
                    stopAutoPlayOnHover={true}
                    animation="slide"
                    navButtonsAlwaysVisible={false}
                  >
                  {client.map((item, index) => (
                    <Card sx={{ minWidth: 200 }} className={classes.cardResponsive}>
                      <CardContent className={classes.CardContentResponsive} key={index}>
                        <Box
                          textAlign="center"
                          className={classes.descriptionResponsive} lineHeight={1.6}>
                          " {item.description} "
                        </Box>

                        <Stack direction="row" spacing={2} marginTop={2}>
                          <Avatar alt="Remy Sharp" src={item.imageSrc} />
                          <Box className={classes.footerResponsive}>
                            {item.customerName}
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  ))}
                  </Carousel>
                </Box>
            
          </Container>
        </>
      ) : (
        <>
          <Container>
              <Box >
                <Box>
                  <Box className={classes.root}>
                    Ce que nos clients disent
                  </Box>
                </Box>
                <Box className={classes.container}>

                  {client.map((item, index) => (
                    <Card sx={{ minWidth: 200 }} className={classes.card}>
                      <CardContent className={classes.CardContent} key={index}>
                        <Box
                          textAlign="center"
                          className={classes.description} lineHeight={1.6}>
                          " {item.description} "
                        </Box>

                        <Stack direction="row" spacing={2} marginTop={2}>
                          <Avatar alt="Remy Sharp" src={item.imageSrc} />
                          <Box className={classes.footer}>
                            {item.customerName}
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
          </Container>
        </>
      )}

    </>
  );
};

export default Forfait;


