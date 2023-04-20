import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import logo from '../assets/PredictFoot_logo.png'
import { Box, Button, TextField } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import { FaFacebook, FaTelegram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { blue } from "@material-ui/core/colors";
import { Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F3F4F6',
        padding: theme.spacing(6),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: '10rem'
    },
    menu: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: theme.spacing(2),
    },
    followUs: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
    },
    form: {
        display: "flex",
        alignItems: "center",
    },
    input: {
        flex: 1,
        marginRight: theme.spacing(2),
    },
    button: {
        backgroundColor: blue[500],
        color: "#fff",
        "&:hover": {
            backgroundColor: blue[700],
        },
    },
    headFooter: {
        marginRight: 16,
        fontSize: '1.125rem',
        [theme.breakpoints.up('xl')]: {
            fontSize: '0.875rem',

        },
        fontWeight: 600,
        marginBottom: '1rem',
    },
    newsletter: {
        marginRight: 16,
        fontSize: '1.125rem',
        //margin: '1rem 0', 
        fontWeight: 600,
    },
    menuItems: {
        textDecoration: 'none',
        color: '#000000',
        fontSize: '1.125rem',
        [theme.breakpoints.up('lg')]: {
            fontSize: '0.875rem',
            marginBottom: '0.5rem',

        },
        fontWeight: 600,
        letterSpacing: '0.025em',
        transition: 'all 0.3s ease',
        paddingBottom: '0.1rem',
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        '&:hover': {
            cursor: "pointer",
            borderBottomColor: "#4299e1",
            color: "#4299e1",
        },
    },

    rootResponsive: {
        backgroundColor: '#F3F4F6',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '2rem'
    },
    columnResponsive: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: '10rem',
        
    },
    menuResponsive: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        //marginBottom: '0.5rem',
    },
    followUsResponsive: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",

    },
    formResponsive: {
        display: "flex",
        alignItems: "center",
    },
    inputResponsive: {
        //flex: 1,
        //marginRight: theme.spacing(2),
    },
    buttonResponsive: {
        textTransform: 'none',
        backgroundColor: blue[500],
        color: "#fff",
        "&:hover": {
            backgroundColor: blue[700],
        },
    },
    headFooterResponsive: {
        fontSize: '1rem',
        fontWeight: 600,
        marginBottom: '1rem',
    },
    newsletterResponsive: {
        fontSize: '1rem',
        //margin: '1rem 0', 
        fontWeight: 600,
    },
    menuItemsResponsive: {
        textDecoration: 'none',
        color: '#000000',
        fontSize: '1rem',
        [theme.breakpoints.up('lg')]: {
            fontSize: '0.875rem',
            marginBottom: '0.5rem',

        },
        fontWeight: 600,
        letterSpacing: '0.025em',
        transition: 'all 0.3s ease',
        paddingBottom: '0.1rem',
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        '&:hover': {
            cursor: "pointer",
            color: "#4299e1",
        },
    },
}));

export default function Footer() {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <>
            {isMatch ? (
                <>
                    <Container className={classes.rootResponsive}>
                        <Grid container spacing={4}>
                            <Grid className={classes.columnResponsive}>
                                <img src={logo} alt="logo" style={{ maxWidth: "250px" }} />
                            </Grid>
                            <Grid item xs={12} md={4} className={classes.menuResponsive}>
                                <Typography variant="subtitle1" className={classes.headFooterResponsive}>
                                    MENU
                                </Typography>
                                <Link to="/" variant="body2" className={classes.menuItemsResponsive}>Accueil</Link>
                                <Link to="/blog" variant="body2" className={classes.menuItemsResponsive}>Blog</Link>
                                <Link variant="body2" className={classes.menuItemsResponsive}>A propos de nous</Link>
                            </Grid>
                            <Grid item xs={12} md={4} className={classes.followUsResponsive}>
                                <Box>
                                    <Typography variant="subtitle1" className={classes.newsletterResponsive}>
                                        NOUS SUIVRE
                                    </Typography>
                                </Box>
                                <Stack direction='row' marginBottom='1rem'>
                                    <IconButton><FaFacebook style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><FaTelegram style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><FaTwitter style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><FaTiktok style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><IoLogoWhatsapp style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><AiFillInstagram style={{ color: '#000000' }} /></IconButton>
                                </Stack>
                                <Typography variant="subtitle1" className={classes.newsletterResponsive}>
                                    NEWSLETTER
                                </Typography>
                                <form className={classes.formResponsive}>
                                    <TextField
                                        variant="outlined"
                                        placeholder="Votre email"
                                        size="small"
                                        className={classes.inputResponsive}
                                    />
                                    <Button variant="contained" className={classes.buttonResponsive}>
                                        Subscribe
                                    </Button>
                                </form>
                                <Typography style={{ color: "grey", marginTop: '2rem' }}>&copy; predictfoot | All Rights Reserved</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            ) : (
                <>
                    <footer className={classes.root}>
                        <Grid container spacing={4}>
                            <Grid className={classes.column}>
                                <img src={logo} alt="logo" style={{ maxWidth: "250px" }} />
                            </Grid>
                            <Grid item xs={12} md={4} className={classes.menu}>
                                <Typography variant="subtitle1" className={classes.headFooter}>
                                    MENU
                                </Typography>
                                <Link to="/" variant="body2" className={classes.menuItems}>Accueil</Link>
                                <Link to="/blog" variant="body2" className={classes.menuItems}>Blog</Link>
                                <Link variant="body2" className={classes.menuItems}>A propos de nous</Link>
                            </Grid>
                            <Grid item xs={12} md={4} className={classes.followUs}>
                                <Box>
                                    <Typography variant="subtitle1" className={classes.newsletter}>
                                        NOUS SUIVRE
                                    </Typography>
                                </Box>
                                <Stack direction='row'>
                                    <IconButton><FaFacebook style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><FaTelegram style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><FaTwitter style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><FaTiktok style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><IoLogoWhatsapp style={{ color: '#000000' }} /></IconButton>
                                    <IconButton><AiFillInstagram style={{ color: '#000000' }} /></IconButton>
                                </Stack>
                                <Typography variant="subtitle1" className={classes.newsletter}>
                                    NEWSLETTER
                                </Typography>
                                <form className={classes.form}>
                                    <TextField
                                        variant="outlined"
                                        placeholder="Votre e-mail"
                                        size="small"
                                        className={classes.input}
                                    />
                                    <Button variant="contained" className={classes.button}>
                                        Subscribe
                                    </Button>
                                </form>
                            </Grid>
                            <Typography style={{ color: "grey" }}>&copy; predictfoot | All Rights Reserved</Typography>
                        </Grid>
                    </footer>
                </>
            )}
        </>

    );
}