import { Box, Button, Grid } from "@mui/material";
import Typed from 'react-typed'

function LandingPage() {

    function handleDownload() {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1Xv6XGSEvLzWaCBsQZq4uxS6D3XVf2HVh/view?usp=sharing';
        link.download = 'CV.pdf';
        link.target = '_blank'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Box component="main" sx={{ p: 3 }}>
            <Grid item xs={12} md={6}>
                        <Typed strings={[
                            "I'm a Software Developer",
                            "I'm a youtuber", 
                            "I love coding",
                            "I'm into AWS/GCP",
                            "I'm into MERN",
                            "I love Java",
                        ]}
                        typeSpeed={45} backSpeed={35} loop></Typed>
                        <h1>Get to know me better ...</h1>
                        <Button color='success' onClick={handleDownload} variant='contained'>Download CV</Button>
                    </Grid>
            </Box>
        </Box>
    )
}

export default LandingPage;