import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Diagramme from '../assets/diagramme.png';
import { Stack } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: '900',
    fontSize: '3rem',
    color: "#243E63"
  },
  text: {
    fontWeight: '600',
    fontSize: '2rem',
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    marginTop: "12px",
    color: "#2196f3",

  },
  customBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center'
  },
  paragraphe: {
    fontWeight: '500',
    fontSize: '16px',
    width: "60%",
    color: "#243E63"
  },

  rootResponsive: {
    fontWeight: '900',
    fontSize: '1.8rem',
    color: "#243E63"
  },
  textResponsive: {
    fontWeight: '600',
    fontSize: '1.3rem',
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    marginTop: "12px",
    color: "#2196f3",
    marginBottom: "12px",

  },
  customBoxResponsive: {
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    alignItems:'center',
    marginTop: "2rem",

  },
  paragrapheResponsive: {
    fontWeight: '500',
    fontSize: '16px',
    color: "#243E63",
    
  },
}));

export default function Statistique() {
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
                <Stack>
                  <div className={classes.rootResponsive}>
                    Notre expertise en chiffre
                  </div>
                  <div className={classes.textResponsive}>
                    Des prévisions basées sur des données statistiques précises
                  </div>
                </Stack>

                <div className={classes.paragrapheResponsive} lineHeight={1.4}>
                  Nous avons une expérience considérable en matière d'analyse et de prévision sportives. Nous avons recours à des algorithmes sophistiqués pour suivre les matchs en temps réel et analyser les performances des équipes et des joueurs. Cela nous permet de fournir des recommandations précises et fiables qui améliorent vos chances de gagner.
                </div>
                <Box className={classes.customBoxResponsive}>
                  <img src={Diagramme} alt="logo" style={{ maxWidth: "200px" }} />
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
                <Stack>
                  <div className={classes.root}>
                    Notre expertise en chiffre
                  </div>
                  <div className={classes.text}>
                    Des prévisions basées sur des données statistiques précises
                  </div>
                </Stack>
                <Box className={classes.customBox}>
                  <Box className={classes.paragraphe} lineHeight={1.4}>
                    Nous avons une expérience considérable en matière d'analyse et de prévision sportives. Nous avons recours à des algorithmes sophistiqués pour suivre les matchs en temps réel et analyser les performances des équipes et des joueurs. Cela nous permet de fournir des recommandations précises et fiables qui améliorent vos chances de gagner.
                  </Box>
                  <img src={Diagramme} alt="logo" style={{ maxWidth: "200px" }} />
                </Box>
              </Box>
            </Box>
          </Container>
        </>
      )}

    </>
  );
}