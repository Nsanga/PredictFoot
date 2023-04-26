import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from '@material-ui/core';
import './style.css';

const useStyles = makeStyles((theme) => ({
    rootResponsive: {
        backgroundColor: '#F3F4F6',
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
    },
    divResponsive: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        color: '#16253b'
    },
    titreResponsive: {
        fontWeight: '700',
        fontSize: '1.8rem'
    },
    descriptionResponsive: {
        fontWeight: '600',
        fontSize: '1rem',
        marginTop: "3rem"
    },
}));


export default function BlogBox({ titre, description }) {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <>
            {isMatch ? (
                <>
                    <Box className="divResponsiveBlog">
                        <Box className="titreResponsiveBlog">{titre}</Box>
                        <Box className="descriptionResponsiveBlog">{description}</Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className="div">
                        <Box className="titleBlog">{titre}</Box>
                        <Box className="descriptionBlog">{description}</Box>
                    </Box>
                </>
            )}
        </>
    );
}

