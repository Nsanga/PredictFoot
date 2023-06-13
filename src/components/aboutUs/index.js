import React, { useEffect } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Section } from '../misc/Section';
import { connect, useDispatch } from "react-redux";
import { fetchHomeRequest } from '../../redux/home/actions';
import load from '../../assets/loading.gif'
import { Stack } from '@mui/material';

const AboutUs = (
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

  return (
    <>
      {isMatch ? (
        <>
          {loading ? (
            <Stack direction="row" justifyContent='center' marginBottom='1rem'>
              <img src={load} alt="load animation" className="load-animation" />
            </Stack>
          ) : (
            homes?.about?.map((item, index) => (
              <Section
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                maxWidth="350px"
              />
            ))
          )}
        </>

      ) : (
        <>
          {loading ? (
            <Stack direction="row" justifyContent='center' marginBottom='1rem'>
              <img src={load} alt="load animation" className="load-animation" />
            </Stack>
          ) : (
            homes?.about?.map((item, index) => (
              <Section
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                maxWidth="500px"
              />
            ))
          )}
        </>
      )}

    </>
  );
}

const mapStateToProps = ({ HomeReducer }) => ({
  homes: HomeReducer.homes,
  loading: HomeReducer.loading
});

export default connect(mapStateToProps)(AboutUs);