import { Container, Grid, Typography } from "@mui/material";
import AboutImage from '../assets/latest.jpg'

function About() {
    return(
        <Container>
            <Typography variant="h4" align="center">
                An Informal Introduction
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <Typography variant="body1">
                Hey dear viewer, this is Anirudh Hosur currently pursuing a master's in applied computer science at Dalhousie University.
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <img src={AboutImage} alt="" style={{ maxWidth: '700px', maxHeight: '700px' }}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;