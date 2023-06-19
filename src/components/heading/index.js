import React from "react";
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Stack from '@mui/material/Stack';
import { useMediaQuery, useTheme } from '@material-ui/core';
import './style.css';
import { connect } from "react-redux";

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

const Headband = (
    {
        homes
    }
) => {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(homes, 'gggg');

    return (
        <>
            {isMatch ? (
                <>
                    <Box className={classes.contentResponsive}>
                        <Box>

                            <Stack direction="column" spacing={32} className={classes.root}>
                                {
                                    homes?.headband?.map((item, index) => (
                                        <View
                                            key={index}
                                            image={item?.image}
                                            title={item?.title}
                                            subtitle={item?.description}
                                            buttonIcon="apple"
                                            buttonAppStore="App Store"
                                            buttonStyle={{ background: "#1677d8", color: "#ffffff" }}
                                            button2Icon="google"
                                            buttonPlayStore="Play Store"
                                            button2Style={{ background: "#243E63", color: "#ffffff" }}
                                            direction="column"
                                            width='50%'
                                        />
                                    ))

                                }

                            </Stack>
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className="contentHeader">
                        {
                            homes?.headband?.map((item, index) => (
                                <View
                                    key={index}
                                    image={item?.image}
                                    maxWidth="300px"
                                    title={<div className="titlesHeader">{item?.title}</div>}
                                    subtitle={<div className="subtitlesHeader">{item?.description}</div>}
                                    buttonAppStore={<div className="appStoresHeader">{<FaApple size="2rem" />}<span>App Store</span></div>}
                                    backgroundApp="#1677d8"
                                    buttonPlayStore={<div className="playStoresHeader">{<FaGooglePlay size="1.5rem" />}<span>Play Store</span></div>}
                                    backgroundPlay="#243E63"
                                />
                            ))

                        }
                    </Box>
                </>
            )}
        </>
    );
}

const mapStateToProps = ({ HomeReducer }) => ({
    homes: HomeReducer.homes,
    loading: HomeReducer.loading
});

export default connect(mapStateToProps)(Headband);