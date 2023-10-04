import { Container, Grid, Typography, Box, TableContainer, Table, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import AboutImage from '../assets/latest.jpg';

function About() {
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
                        I have over 3 years of industry experience in developing applications using Spring boot for the backend and MERN stack for the frontend.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Programming Languages and Tools
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Java, Python, C/C++, JavaScript/TypeScript, and more...
                    </Typography>

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
                    <Typography variant="h6" gutterBottom>
                        Experiences:
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Cloud Developer Intern, CloudOps</TableCell>
                                    <TableCell align="right">Montreal</TableCell>
                                    <TableCell align="right">Aug 2023 - Present</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Teaching Assistant and Marker, Dalhousie University</TableCell>
                                    <TableCell align="right">Halifax</TableCell>
                                    <TableCell align="right">Aug 2023 - Present</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Research Assistant, Dalhousie University</TableCell>
                                    <TableCell align="right">Halifax</TableCell>
                                    <TableCell align="right">Nov 2022 - Jan 2023</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Associate Consultant, Oracle</TableCell>
                                    <TableCell align="right">India</TableCell>
                                    <TableCell align="right">Aug 2021 - Aug 2022</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Developer Intern, Quinbay Technologies</TableCell>
                                    <TableCell align="right">India</TableCell>
                                    <TableCell align="right">Jan 2021 - Jul 2021</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Artificial Intelligence Engineer Intern, Myriadcara Technologies</TableCell>
                                    <TableCell align="right">India</TableCell>
                                    <TableCell align="right">Nov 2020 - Dec 2020</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Research Assistant, Yuan-Ze University</TableCell>
                                    <TableCell align="right">Taiwan</TableCell>
                                    <TableCell align="right">Apr 2020 - Jun 2020</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Data Science Intern, Flipr Innovation Labs</TableCell>
                                    <TableCell align="right">India</TableCell>
                                    <TableCell align="right">May 2020 - Jun 2020</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Machine Learning Intern, Smartbridge</TableCell>
                                    <TableCell align="right">India</TableCell>
                                    <TableCell align="right">Apr 2020 - May 2020</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;
