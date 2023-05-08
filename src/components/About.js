import { Container, Grid, Typography } from "@mui/material";
import AboutImage from '../assets/latest.jpg'

function About() {
    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <Typography variant="body1">
                Hey dear viewer, this is Anirudh Hosur. I'm currently pursuing a master's in applied computer science at Dalhousie University.
                I have over 1.5 years of industry experince in developing applications in Spring boot and UI with MERN stack. 
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