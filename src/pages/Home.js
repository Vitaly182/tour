import TourCard from './../components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import cities from './../data.json'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box'

const Home = () => (
    <div className="App">
        <Container sx={{ marginY: 5 }}>
            {cities.map((city) => (
                <Box key={city.id}>
                    <Typography
                        variant='h4'
                        component='h2'
                        marginTop={5}
                        marginBottom={3}
                    >
                        Top {city.name} Tours
                    </Typography>
                    <Grid container spacing={5}>
                        {city.tours.map((tour) => <TourCard tour={tour} key={tour.id} />)}
                    </Grid>
                </Box>
            ))}
        </Container>
    </div>
)

export default Home;