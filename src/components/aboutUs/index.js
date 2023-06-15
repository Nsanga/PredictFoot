import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Section } from '../misc/Section';
import { connect } from "react-redux";

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

  return (
    <>
      {isMatch ? (
        <>

          {
            homes?.about?.map((item, index) => (
              <Section
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                maxWidth="350px"
              />
            ))}

        </>

      ) : (
        <>
          {
            homes?.about?.map((item, index) => (
              <Section
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                maxWidth="500px"
              />
            ))
          }
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