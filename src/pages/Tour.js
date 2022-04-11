import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordian';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BasicModal from '../components/Modal';
import { useLocation } from 'react-router-dom'

const Tour = () => {
    const location = useLocation()
    return (
        <Container sx={{ width: 900 }}>
        <Typography variant='h3' component='h1' marginTop={3}>
            {location.state.tour.name}
        </Typography>
        <Box marginTop={3} sx={{ display: 'flex' }}>
            <img
                src={location.state.tour.image}
                alt=''
                height={325}
                width={600}
            />
            <ImageCollage />
        </Box>
        <Box>
            <Typography variant='h6' component='h4' marginTop={3}>
                About
            </Typography>
            <Typography variant='paragraph' component='p' marginTop={3} marginBottom={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant='h6' component='h4' marginTop={3}>
                Frequently
            </Typography>
            <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal/>
            </BottomNavigation>
        </Paper>
    </Container>
    )
}

export default Tour