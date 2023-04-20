import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Phone from '../assets/phone.png'
import { Stack } from '@mui/material';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { useMediaQuery, useTheme } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3B82F6",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '60px 0px'
  },
  content: {
    padding: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5),
    },
  },
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontWeight: '700',
    fontSize: '1.5rem',
    color: '#16253b'
  },
  textContainer: {
    fontWeight: '900',
    fontSize: '3rem',
    display: "flex",
    marginTop: "12px",
    color: '#fff'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'none',
    marginLeft: '6px',
    fontWeight: 'bold',
    fontSize: '1.2rem',

  },

  rootResponsive: {
    backgroundColor: "#3B82F6",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '60px 0px'
  },
  contentResponsive: {
    padding: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5),
    },
  },
  containerResponsive: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleResponsive: {
    fontWeight: '700',
    fontSize: '1rem',
    color: '#16253b'
  },
  textContainerResponsive: {
    fontWeight: '900',
    fontSize: '2rem',
    display: "flex",
    marginTop: "12px",
    color: '#fff'
  },
  buttonResponsive: {
    display: 'flex',
    textTransform: 'none',
    marginLeft: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',

  },
  action: {
    backgroundColor: '#243E63', // Couleur d'arrière-plan blanche
    color: "#fff", // Couleur de texte bleue
    '&:hover': { // Couleur de survol gris
      backgroundColor: '#16253b',
    }
  },
  actionStore: {
    backgroundColor: '#fff', // Couleur d'arrière-plan blanche
    color: '#243E63', // Couleur de texte bleue
    '&:hover': { // Couleur de survol gris
      backgroundColor: theme.palette.grey[400],
    }
  }
}));

const Download = () => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      {isMatch ? (
        <>
          <div className={classes.rootResponsive}>
            <Box className={classes.contentResponsive}>
              <Box>

                <Stack direction="column" spacing={4} className={classes.containerResponsive}>

                  <Box >
                    <Box className={classes.titleResponsive}>
                      Téléchargez l'application
                    </Box>
                    <Box className={classes.textContainerResponsive} lineHeight={1.4}>
                      Rejoignez la plus grande communauté de pronostiqueurs
                    </Box>
                    <Stack direction="column" width="45%" spacing={2} py={4}>
                      <Button variant="contained" startIcon={<FaApple size="2rem" />} className={classes.actionStore} >
                        <span className={classes.buttonResponsive}>App Store</span>
                      </Button>
                      <Button variant="contained" startIcon={<FaGooglePlay size="2rem" />} className={classes.action}>
                        <span className={classes.buttonResponsive}>Play Store</span>
                      </Button>
                    </Stack>
                  </Box>
                  <Box>
                    <img src={Phone} alt="logo" style={{ maxWidth: "200px" }} />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </div>
        </>
      ) : (
        <>
          <div className={classes.root}>
            <Box className={classes.content}>
              <Box>

                <Stack direction="row" spacing={24} className={classes.container}>
                  <img src={Phone} alt="logo" style={{ maxWidth: "300px" }} />
                  <Box >
                    <Box className={classes.title}>
                      Téléchargez l'application
                    </Box>
                    <Box className={classes.textContainer} lineHeight={1.4}>
                      Rejoignez la plus grande communauté de pronostiqueurs
                    </Box>
                    <Stack direction="row" spacing={2} py={4}>
                      <Button variant="contained" startIcon={<FaApple size="2rem" />} className={classes.actionStore}>
                        <span className={classes.button}>App Store</span>
                      </Button>
                      <Button variant="contained" startIcon={<FaGooglePlay size="2rem" />} className={classes.action}>
                        <span className={classes.button}>Play Store</span>
                      </Button>
                    </Stack>
                  </Box>

                </Stack>
              </Box>
            </Box>
          </div>
        </>
      )}

    </>
  );
};

export default Download;


