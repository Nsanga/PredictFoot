import React, { useEffect } from 'react';
import Diagramme from '../../assets/diagramme.png';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Section } from '../misc/Section';
import { connect, useDispatch } from "react-redux";
import { fetchHomeRequest } from '../../redux/home/actions';
import load from '../../assets/loading.gif'
import { Stack } from '@mui/material';

const Statistics = (
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
      {loading ? (
        <Stack direction="row" justifyContent='center' marginBottom='1rem'>
        <img src={load} alt="load animation" className="load-animation" />
      </Stack>
      ) : (
        homes?.statistic?.map((item, index) => (
          <Section
            key={index}
            title={item?.title}
            subtitle={item?.subtitle}
            description={item?.description}
            image={Diagramme}
            maxWidth="200px"
          />
        ))

      )}

    </>
  );
}
const mapStateToProps = ({ HomeReducer }) => ({
  homes: HomeReducer.homes,
  loading: HomeReducer.loading
});

export default connect(mapStateToProps)(Statistics)