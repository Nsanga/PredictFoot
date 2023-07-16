import React from 'react';
import Diagramme from '../../assets/diagramme.png';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Section } from '../misc/Section';
import { connect } from "react-redux";


const Statistics = (
  {
    homes,
  }
) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      {
        homes?.statistic?.map((item, index) => (
          <Section
            key={index}
            title={item?.title}
            subtitle={item?.subtitle}
            description={item?.description}
            successPercentage={parseInt(item?.pourcentage)}
            titleStat={item?.titleStat}
            maxWidth="200px"
          />
        ))

      }

    </>
  );
}
const mapStateToProps = ({ HomeReducer }) => ({
  homes: HomeReducer.homes,
  loading: HomeReducer.loading
});

export default connect(mapStateToProps)(Statistics)