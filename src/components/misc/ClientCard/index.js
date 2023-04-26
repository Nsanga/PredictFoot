import { Card, CardContent, Avatar, Box, Stack } from '@mui/material';
import './style.css';

export default function ClientCard({ description, imageSrc, customerName, background, justifyContent }) {


    return (
        <>

            <Card sx={{ minWidth: 200 }} style={{ background: background }} className='cardBorder'>
                <CardContent>
                    <Box textAlign='center' lineHeight={1.6}>
                        {description && <Box>{description}</Box>}
                    </Box>
                    <Stack direction="row" spacing={2} marginTop={6} justifyContent={justifyContent}>
                        {imageSrc && <Avatar alt="Remy Sharp" src={imageSrc} />}
                        {customerName && <Box >{customerName}</Box>}
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}
