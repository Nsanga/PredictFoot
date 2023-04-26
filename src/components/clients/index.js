import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import ClientCard from '../misc/ClientCard';
import './style.css';
import Titre from '../misc/Titre';

const clients = [
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
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      {isMatch ? (
        <>

          <Container>


            <Box className="rootResponsiveClient">
              Ce que nos clients disent
            </Box>

            <Box className="containerResponsiveClient">

              <Carousel
                autoPlay={true}
                stopAutoPlayOnHover={true}
                animation="slide"
                navButtonsAlwaysVisible={false}
              >
                {clients.map((item, index) => (
                  <Card sx={{ minWidth: 200 }} className="cardResponsiveClient">
                    <CardContent className="cardResponsiveClient" key={index}>
                      <Box
                        textAlign="center"
                        className="descriptionResponsiveClient" lineHeight={1.6}>
                        " {item.description} "
                      </Box>

                      <Stack direction="row" spacing={2} marginTop={2}>
                        <Avatar alt="Remy Sharp" src={item.imageSrc} />
                        <Box className="footerResponsiveClient">
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
          <Titre
            title={<Box className="header">Ce que nos clients disent</Box>}
            size="3rem"
          />

          <Container>

            <Box>
              <Stack direction="row" spacing={2} marginTop={6} >
                {clients.map((item, index) => (
                  <ClientCard key={index} background="#F3F4F6" justifyContent='center'
                    description={<div className="descriptionClient">"{item.description}"</div>}
                    imageSrc={item.imageSrc}
                    customerName={<div className="nameClient">{item.customerName} </div>}
                  />
                ))}
              </Stack>
            </Box>
          </Container>

        </>
      )}

    </>
  );
};

export default Forfait;


