import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Container, Stack, Box } from '@mui/material';
import { MdOutlineSpeed, MdSecurity } from 'react-icons/md';
import { GoSmiley } from 'react-icons/go';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Slide } from '../misc/Slide';
import './style.css'
import { connect, useDispatch } from "react-redux";
import { fetchHomeRequest } from '../../redux/home/actions';
import load from '../../assets/loading.gif';

const Register = (
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
            <Stack>
              <Box className='titlesRegisterResponsive'>
                Comment ca marche?
              </Box>
              <Box className='subtitlesRegisterResponsive'>
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
                {loading ? (
                  <Stack direction="row" justifyContent='center' marginBottom='1rem'>
                    <img src={load} alt="load animation" className="load-animation" />
                  </Stack>
                ) : (

                  homes?.grip?.map((item, index) => (
                    <div key={index} className="testimonialCardRegisterResponsive">
                      <Box className="contentRegisterResponsive">
                        <img src={item.image} alt={item.title} style={{ maxWidth: "200px" }} />
                      </Box>
                      <Box style={{ width: '100%' }}>
                        <Box className="avatarRegisterResponsive">
                          {item.number}
                        </Box>
                        <Box className="titleRegisterResponsive">
                          {item.title}
                        </Box>
                        <Box className="descriptionRegisterResponsive">
                          {item.description}
                        </Box>
                        <button className="actionRegisterResponsive" >Demarrer</button>
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
          <div className="containerRegister">
            <Stack>
              <Box className='titleRegister'>
                Comment ca marche?
              </Box>
              <Box className='subtitle'>
                Prenez la main en quelques minutes
              </Box>
              <Stack direction='row' spacing={2} className='stackCustom'>

                <Box className='stack'>
                  <GoSmiley className='icon' /><Box className='layout'>Simple</Box>
                </Box>

                <Box className='stack'>
                  <MdOutlineSpeed className='icon' /><Box className='layout'>Rapide</Box>
                </Box>

                <Box className='stack'>
                  <MdSecurity className='icon' /><Box className='layout'>Sécurisé</Box>
                </Box>

              </Stack>
            </Stack>
            {loading ? (
              <Stack direction="row" justifyContent='center' marginBottom='1rem'>
                <img src={load} alt="load animation" className="load-animation" />
              </Stack>
            ) : (

              <Slide
                testimonials={homes?.grip}
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
                    alignItems: 'center'
                  }
                }}
                PrevIcon={<MdKeyboardArrowLeft />}
                NextIcon={<MdKeyboardArrowRight />}
              />

            )}

          </div>
        </>
      )}
    </>

  );
};
const mapStateToProps = ({ HomeReducer }) => ({
  homes: HomeReducer.homes,
  loading: HomeReducer.loading
});

export default connect(mapStateToProps)(Register);