import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Button } from '@material-ui/core';
import logo from '../../../assets/PredictFoot_logo.png';
import { Link } from 'react-router-dom';
import DrawerComp from '../../menu'
import './style.css'

export default function MenuAppBar() {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <div >
      <AppBar position="relative" style={{ background: "white" }}>
        <Toolbar>

          {isMatch ? (
            <>
              <Link to="/" variant="h6" className='logo'>
                <img src={logo} alt="logo" style={{ maxWidth: "150px" }} />
              </Link>
              <DrawerComp />
            </>
          ) : (
            <>
              <Link to="/" variant="h6" className='logo'>
                <img src={logo} alt="logo" style={{ maxWidth: "250px" }} />
              </Link>
              <Link to="/" className='menu' >Accueil</Link>
              <Link to="/blog" className='menu' > Blog</Link>
              <a href="/#about" className='menu' >A propos de nous</a>
              <Button variant="contained" style={{ fontWeight: 600, background: "#4299e1", color: "#f7fafc" }}>Télécharger l'application</Button>
            </>
          )}

        </Toolbar>
      </AppBar>
    </div>
  );
}
