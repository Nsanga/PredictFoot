import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import Slider from 'react-slick';
import { Stack } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Slide } from '../misc/Slide';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './style.css'
import { connect, useDispatch } from "react-redux";
import { fetchHomeRequest } from '../../redux/home/actions';
import load from '../../assets/loading.gif';

const Service = (
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
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

  };

  return (
    <>
      {isMatch ? (
        <div className="serviceContainerResponsive">
          {loading ? (
            <Stack direction="row" justifyContent='center' marginBottom='1rem'>
              <img src={load} alt="load animation" className="load-animation" />
            </Stack>
          ) : (
            <Slider {...settings}>

              {homes?.service?.map((item, index) => {

                return (
                  <div key={index} className="servicetestimonialCardResponsive">
                    <Stack className="serviceavatarResponsive">
                      {item.number}
                    </Stack>
                    <Box>
                      <Box className="servicetitleResponsive">{item.title}</Box>
                      <Box className="servicedescriptionResponsive">{item.description}</Box>
                      <button className="actionService">Demarrer</button>
                    </Box>
                  </div>
                );

              })}

            </Slider>
          )}

        </div>
      ) : (
        <div className="serviceContainer">
          {loading ? (
            <Stack direction="row" justifyContent='center' marginBottom='1rem'>
              <img src={load} alt="load animation" className="load-animation" />
            </Stack>
          ) : (
            <Slide
              testimonials={homes?.service}
              autoPlay={true}
              stopAutoPlayOnHover={true}
              animation="slide"
              indicators={false}
              navButtonsAlwaysVisible={false}
              navButtonsWrapperProps={{
                style: {
                  position: 'absolute',
                  transform: 'translateY(-30%)',
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
      )}
    </>

  );
};
const mapStateToProps = ({ HomeReducer }) => ({
  homes: HomeReducer.homes,
  loading: HomeReducer.loading
});

export default connect(mapStateToProps)(Service);