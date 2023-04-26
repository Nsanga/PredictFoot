import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@material-ui/core';
import './style.css';

import phone from '../../assets/phone.png';
import { View } from "../misc/View";

const useStyles = makeStyles((theme) => ({
    contentResponsive: {
        marginTop: '4rem'
    },
    textResponsive: {
        fontSize: "1.5rem",
        color: "#2196f3",
        fontWeight: "500",
        [theme.breakpoints.up("lg")]: {
            fontSize: "1rem",
        },
    },
    descriptionResponsive: {
        fontWeight: '900',
        fontSize: '2rem',
        display: "flex",
        marginTop: "12px",
        color: "#243E63"
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        textTransform: 'none',
        marginLeft: '6px',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    }
}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const slideIn = useSpring({
        transform: isLoading ? "translateY(100%)" : "translateY(0)",
        delay: 1000,
    });

    return (
        <>
            {isMatch ? (
                <>
                    <Box className={classes.contentResponsive}>
                        <Box>

                            <Stack direction="column" spacing={32} className={classes.root}>

                                <View 
                                image={phone}
                                title= "Pronostics pour tous..."
                                subtitle= "Des pronostics gagnants en toute sécurité avec notre plateforme de pronostics !"
                                buttonIcon="apple"
                                buttonAppStore="App Store"
                                buttonStyle={{ background: "#1677d8", color: "#ffffff" }}
                                button2Icon="google"
                                buttonPlayStore="Play Store"
                                button2Style={{ background: "#243E63", color: "#ffffff" }}
                                direction="row"
                                />

                            </Stack>
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className="contentHeader">
                        <View
                            image={phone}
                            maxWidth="300px"
                            title={<div className="titlesHeader">Pronostics pour tous...</div>}
                            subtitle={<div className="subtitlesHeader">Des pronostics gagnants en toute sécurité avec notre plateforme de pronostics !</div>}
                            buttonAppStore={<div className="appStoresHeader">{<FaApple size="2rem" />}<span>App Store</span></div>}
                            backgroundApp="#1677d8"
                            buttonPlayStore={<div className="playStoresHeader">{<FaGooglePlay size="1.5rem" />}<span>Play Store</span></div>}
                            backgroundPlay="#243E63"

                        />
                    </Box>
                </>
            )}
        </>
    );
}