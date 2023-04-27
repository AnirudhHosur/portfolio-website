import { Box, Toolbar, Button, Grid } from "@mui/material";
import Typed from 'react-typed'
import Image from '../assets/final_formal.jpg'

function LandingPage() {

    function handleDownload() {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1EfAl7oq48nJvSBQlKingv2iKKct7ECE8/view?usp=sharing';
        link.download = 'CV.pdf';
        link.target = '_blank'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typed strings={[
                            "I'm a Software Developer", 
                            "I love coding",
                            "I'm into AWS"
                        ]}
                        typeSpeed={35} backSpeed={35} loop></Typed>
                        <h1>Get to know me better ...</h1>
                        <Button color='success' onClick={handleDownload} variant='contained'>Download CV</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={Image} alt="Profile" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default LandingPage;