import { Box, Container } from "@material-ui/core";
import React from "react";
import './style.css'
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Stack } from "@mui/material";


export function Section({ title, subtitle, description, image, maxWidth }) {

    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <>
            {isMatch ? (
                <>
                    <Container>
                        <Stack>
                            <div className="rootResponsiveSection">
                                {title}
                            </div>
                            <Box className='textResponsiveSection'>{subtitle}</Box>
                        </Stack>

                        <div className="paragrapheResponsiveSection" lineHeight={1.4}>
                            {description}
                        </div>
                        <Box className="customBoxResponsiveSection">
                            <img src={image} alt="logo" style={{ maxWidth: maxWidth }} />
                        </Box>
                    </Container>
                </>
            ) : (
                <>
                    <Container >

                        <Box className='rootSection'>{title}</Box>
                        {subtitle && <Box className='textSection'>{subtitle}</Box>}

                        <Box className='customBoxSection'>
                            <Box className='paragrapheSection' >
                                {description}
                            </Box>
                            <img src={image} alt={title} style={{ maxWidth: maxWidth }} />
                        </Box>
                    </Container>
                </>
            )}
        </>
    );
}
