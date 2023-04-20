import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {useMediaQuery, useTheme} from '@material-ui/core';
import { Button } from '@material-ui/core';
import logo from '../assets/PredictFoot_logo.png';
import { Link } from 'react-router-dom';
import DrawerComp from './drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    fontSize: '2rem', // équivalent à text-lg
    margin: '1rem 0', // équivalent à my-2
    [theme.breakpoints.up('lg')]: { // équivalent à lg:text-sm lg:mx-6 lg:my-0
      fontSize: '1rem', // équivalent à lg:text-sm
      margin: '0 1.5rem 0 0', // équivalent à lg:mx-6 lg:my-0
      fontWeight: 'bold',
    },
    fontWeight: 600, // équivalent à font-semibold
    color: "#243E63",
    letterSpacing: '0.025em', // équivalent à tracking-wide
    transition: 'all 0.3s ease', // équivalent à transition duration-300
    paddingBottom: '0.1rem', // équivalent à pb-1
    borderBottomWidth: '3px', // équivalent à border-b-2
    borderBottomStyle: 'solid', // équivalent à border-b-2
    borderBottomColor: 'transparent', // équivalent à border-transparent
    '&:hover': {
      borderBottomColor: "#4299e1", // équivalent à hover:border-blue-500
      color: "#4299e1", // équivalent à hocus:text-blue-500
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <div >
      <AppBar position="relative" style={{ background: "white" }}>
        <Toolbar>
          <Link to="/" variant="h6" className={classes.title}>
            <img src={logo} alt="logo" style={{ maxWidth: "250px" }} />
          </Link>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) :(
            <>
            <Link to="/home" className={classes.root} style={{ background: "transparent" }}>Accueil</Link>
            <Link to="/blog" className={classes.root} style={{ background: "transparent" }}> Blog</Link>
            <Link to="/home#about" className={classes.root} style={{ background: "transparent" }}>A propos de nous</Link>
            <Button variant="contained" style={{ fontWeight: 600, background: "#4299e1", color: "#f7fafc" }}>Télécharger l'application</Button>
            </>
          )}
    
        </Toolbar>
      </AppBar>
    </div>
  );
}
