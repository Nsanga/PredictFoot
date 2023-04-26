import * as React from 'react';
import Box from '@mui/material/Box';
import Phone from '../../assets/phone.png'
import { Stack } from '@mui/material';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { View } from '../misc/View';
import './style.css'

const Download = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      {isMatch ? (
        <>
          <div className="rootResponsive">
            <Box className="contentResponsive">
              <Box>

                <Stack direction="column" spacing={4} className="containerResponsive">

                  <View
                    image={Phone} 
                    title={<div className="titleDownloadResponsive">Téléchargez l'application</div>}
                    subtitle={<div className="subtitleDownloadResponsive">Rejoignez la plus grande communauté de pronostiqueurs</div>}
                    buttonIcon="apple"
                    buttonAppStore="App Store"
                    buttonStyle={{ background: "#ffffff", color: "#243E63" }}
                    button2Icon="google"
                    buttonPlayStore="Play Store"
                    button2Style={{ background: "#243E63", color: "#ffffff" }}
                    direction="column"
                    width='41%'
                  />
                </Stack>
              </Box>
            </Box>
          </div>
        </>
      ) : (
        <>
          <div className="rootDownload">
            <Box className="contentDownload">
              <Box>

                <View
                  image={Phone}
                  maxWidth="300px"
                  title={<div className="titleDownload">Téléchargez l'application</div>}
                  subtitle={<div className="subtitleDownload">Rejoignez la plus grande communauté de pronostiqueurs</div>}
                  buttonAppStore={<div className="appStore">{<FaApple size="2rem" />}<span>App Store</span></div>}
                  backgroundApp="#fff"
                  buttonPlayStore={<div className="playStore">{<FaGooglePlay size="1.5rem" />}<span>Play Store</span></div>}
                  backgroundPlay="#243E63"

                />

              </Box>
            </Box>
          </div>
        </>
      )}

    </>
  );
};

export default Download;


