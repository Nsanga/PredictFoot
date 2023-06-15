import React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { View } from '../misc/View';
import './style.css'
import { connect } from "react-redux";

const Download = (
  {
    homes,
    loading
  }
) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      {isMatch ? (
        <>
          <div className="rootDownload">
            <Box className="contentDownload">
              <Box>

                <Stack direction="column" spacing={4} className="containerResponsive">
                  {
                    homes?.advertisement?.map((item, index) => (
                      <View
                        key={index}
                        image={item?.image}
                        title={<div className="titleDownload">{item?.title}</div>}
                        subtitle={<div className="subtitleDownload">{item?.description}</div>}
                        buttonIcon="apple"
                        buttonAppStore="App Store"
                        buttonStyle={{ background: "#ffffff", color: "#243E63" }}
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
          </div>
        </>
      ) : (
        <>
          <div className="rootDownload">
            <Box className="contentDownload">
              <Box>
                {
                  homes?.advertisement?.map((item, index) => (
                    <View
                      key={index}
                      image={item?.image}
                      title={<div className="titleDownload">{item?.title}</div>}
                      subtitle={<div className="subtitleDownload">{item?.description}</div>}
                      maxWidth="300px"
                      buttonAppStore={<div className="appStore">{<FaApple size="2rem" />}<span>App Store</span></div>}
                      backgroundApp="#fff"
                      buttonPlayStore={<div className="playStore">{<FaGooglePlay size="1.5rem" />}<span>Play Store</span></div>}
                      backgroundPlay="#243E63"
                    />
                  ))

                }

              </Box>
            </Box>
          </div>
        </>
      )}

    </>
  );
}
const mapStateToProps = ({ HomeReducer }) => ({
  homes: HomeReducer.homes,
  loading: HomeReducer.loading
});

export default connect(mapStateToProps)(Download);


