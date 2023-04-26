import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Section } from '../misc/Section';

import About from '../../assets/aboutus.png';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: '900',
    fontSize: '3rem',
    color: "#243E63"
  },
  textContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center'
  },
  rootResponsive: {
    fontWeight: '900',
    fontSize: '1.8rem',
    color: "#243E63",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  textContainerResponsive: {
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '2rem'
  },
  image:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '2rem'
  }


}));

export default function AboutUs() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      {isMatch ? (
        <>
          <Section 
            title="A propos de nous"
            description="Nous sommes fière de travailler avec un groupe d'experts passionnés qui ont une grande expertise dans le domaine de l'intelligence artificielle.
            Grâce à leur savoir-faire, nous sommes en mesure de fournir des services de haute qualité qui répondent aux besoins de nos clients et qui les aident
            à réussir dans leur domaine. Nous croyons que l'intelligence artificielle est l'avenir de la technologie et nous sommes ravis de mettre nos compétences
            à contribution pour offrir des solutions innovantes et efficaces. Avec notre groupe d'experts en intelligence artificielle, vous pouvez être sûr que
            vous obtiendrez les meilleurs résultats possibles."
            image={About}
            maxWidth= "350px" 
          />
        </>
      ) : (
        <>
          <Section 
            title="A propos de nous"
            description="Nous sommes fière de travailler avec un groupe d'experts passionnés qui ont une grande expertise dans le domaine de l'intelligence artificielle.
            Grâce à leur savoir-faire, nous sommes en mesure de fournir des services de haute qualité qui répondent aux besoins de nos clients et qui les aident
            à réussir dans leur domaine. Nous croyons que l'intelligence artificielle est l'avenir de la technologie et nous sommes ravis de mettre nos compétences
            à contribution pour offrir des solutions innovantes et efficaces. Avec notre groupe d'experts en intelligence artificielle, vous pouvez être sûr que
            vous obtiendrez les meilleurs résultats possibles."
            image={About}
            maxWidth= "500px" 
          />
        </>
      )}

    </>
  );
}