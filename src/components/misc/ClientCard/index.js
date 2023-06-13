import { Card, CardContent, Avatar, Box, Stack } from '@mui/material';
import './style.css';

export default function ClientCard({ description, imageSrc, customerName, background, justifyContent }) {


    return (
        <>

            <Card sx={{ minWidth: 200 }} style={{ background: background }} >
                <CardContent className='cardBorder'>
                    <Box textAlign='center' lineHeight={1.6} >
                        {description && <Box className="description">{description}</Box>}
                    </Box>
                    <Box className="footerClient">
                        {imageSrc && <Avatar alt="Remy Sharp" src={imageSrc} />}
                        {customerName && <Box className="footerName">{customerName}</Box>}
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
