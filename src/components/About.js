import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@mui/material";
import { useState } from 'react';
import AboutImage from '../assets/latest.jpg';
import Experiences from "./Experience";

function About() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="lg" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Grid container spacing={5} alignItems="center" justifyContent="center">

                {/* Image on the left for larger screens, top for smaller screens */}
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center">
                        <img src={AboutImage} alt="Anirudh Hosur" style={{ maxWidth: '90%', borderRadius: '10px' }} />
                    </Box>
                </Grid>

                {/* Content on the right for larger screens, bottom for smaller screens */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Anirudh Hosur
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Master's in Applied Computer Science, Dalhousie University
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Experienced Software Engineer with 1.5+ years in full-stack development. Proficient in Java,
                        SQL, Python, and JavaScript, with expertise in scalable applications and secure APIs. Certified
                        in AWS and GCP for robust cloud solutions.
                    </Typography>

                    <Box display="flex" justifyContent="center" mb={2}>
                        <Button variant="contained" color="primary" onClick={handleClickOpen}>
                            Programming Languages and Tools
                        </Button>
                    </Box>

                    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                        <DialogTitle>
                            TECHNICAL SKILLS & CERTIFICATIONS
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography variant="body1" paragraph>
                                <strong>Programming Language:</strong> Java, Python, JavaScript/TypeScript, Node.js, HTML5, CSS, Kotlin, C#, C/C++, Linux commands
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Backend frameworks:</strong> Spring boot, Junit, Mockito & Groovy, Django, FastAPI, Flask & Selenium, Express.js, Jest, RESTful APIs
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Frontend frameworks:</strong> React, Angular, Vue.js, Android Studio, React-Native, Grafana & MaterialUI
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Database & ETL tools:</strong> PostgreSQL, OracleDB, MongoDB, Redis (caching), GCP: Hadoop, Dataflow (map/reduce)
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Cloud Computing:</strong> AWS: S3, EC2, DynamoDb, Lambda, SNS/SQS, CloudFormation. GCP: Cloud Run/build & Artifact Registry
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Relevant Skills:</strong> Docker, Terraform, Kubernetes, Jenkins, CI/CD, Git, Infrastructure-as-a-code, Kafka, Microservices
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Machine Learning:</strong> LLMs, Deep learning, ML Models, data cleaning and pre-processing, Data Science, NLP
                            </Typography>
                        </DialogContent>
                    </Dialog>

                    <Typography variant="h6" gutterBottom>
                        My Certifications
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Certified AWS Cloud Practitioner [May 2023] - Amazon Corp.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Java 9 functional programming, Java EE concurrency and multithreading, and data science fundamentals [Jan 2021] – LinkedIn Learning.
                    </Typography>
                    <Typography variant="body2">
                        Advanced Java and DevOps learning paths [Dec 2021] – Oracle Corp.
                    </Typography>
                </Grid>
                {/* Experiences Section */}
                <Grid item xs={12}>
                    <Experiences />
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;
