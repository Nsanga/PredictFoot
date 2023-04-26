import { Button, CardHeader, Divider } from '@material-ui/core';
import { Card, CardContent, Box, CardActions } from '@mui/material';
import './style.css'

export default function Pricing({ name, price, duration, background, subscribeButton }) {

    return (
        <>
        <Box className='box'>
            <Card sx={{ minWidth: 270 }} className='card'>
                {/* <CardHeader /> */}
                <CardContent className='CardContent'>
                    <Box >
                        {name}
                    </Box>
                    <Box >
                        {price}
                    </Box>
                    <Box >
                        {duration}
                    </Box>
                    <Divider style={{ width: '100%', marginTop: '3rem', background:'transparent' }} />

                    <CardActions className='subscribe'>
                        <Button variant="contained" style={{ background: background }} >
                            {subscribeButton}
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            </Box>

        </>
    );
}
