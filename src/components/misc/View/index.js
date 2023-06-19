import { Box, Button } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { useMediaQuery, useTheme } from '@material-ui/core';
import { useSpring, animated } from "react-spring";
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

export function View(
    {
        title,
        subtitle,
        buttonAppStore,
        buttonPlayStore,
        image,
        maxWidth,
        backgroundApp,
        backgroundPlay,
        buttonIcon,
        button2Icon,
        buttonStyle,
        button2Style,
        direction,
        width
    }) {

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
                    <Box>
                        <Box className={classes.textResponsive}>{title}</Box>
                        <Box className={classes.descriptionResponsive} lineHeight={1.4}>
                            {subtitle}
                        </Box>
                        <Stack direction={direction} spacing={2} py={4} width={width}>
                            <Button variant="contained" startIcon={buttonIcon === "apple" ? <FaApple size="2rem" /> : <FaGooglePlay size="1.5rem" />} style={buttonStyle}>
                                <span className={classes.button}>{buttonAppStore}</span>
                            </Button>
                            <Button variant="contained" startIcon={button2Icon === "apple" ? <FaApple size="2rem" /> : <FaGooglePlay size="1.5rem" />} style={button2Style}>
                                <span className={classes.button}>{buttonPlayStore}</span>
                            </Button>
                        </Stack>
                        <Box style={{ display: "flex", justifyContent: "center" }}>
                            <animated.h1 style={slideIn}>
                                <LazyLoadImage
                                    alt={title}
                                    effect="blur"
                                    src={image}
                                    width="250px" />
                            </animated.h1>
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Stack direction="row" spacing={32} >
                        <LazyLoadImage
                            alt={title}
                            effect="blur"
                            src={image}
                            width={maxWidth} />
                        <Box >
                            <Box >
                                {title}
                            </Box>
                            <Box lineHeight={1.4}>
                                {subtitle}
                            </Box>
                            <Stack direction="row" spacing={2} py={4}>
                                <Button variant="contained" style={{ background: backgroundApp }}>
                                    {buttonAppStore}
                                </Button>
                                <Button variant="contained" style={{ background: backgroundPlay }}>
                                    {buttonPlayStore}
                                </Button>
                            </Stack>
                        </Box>

                    </Stack>
                </>
            )}
        </>

    );
}
