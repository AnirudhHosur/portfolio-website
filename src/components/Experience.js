import { Container, Typography, TableContainer, Table, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const experiences = {
    technical: [
        {
            title: "Software Consultant, Outlier",
            location: "Canada (Remote)",
            period: "Jan 2024 - May 2024"
        },
        {
            title: "Cloud Developer Intern, CloudOps",
            location: "Montreal",
            period: "Aug 2023 - Dec 2023"
        },
        {
            title: "Associate Consultant, Oracle Financial Services Software Limited",
            location: "Bengaluru, Karnataka, India",
            period: "Aug 2021 - Aug 2022"
        },
        {
            title: "Java Developer Intern, Quinbay",
            location: "Bengaluru, Karnataka, India",
            period: "Jan 2021 - Jun 2021"
        },
        {
            title: "Artificial Intelligence Engineer Intern, Myriadcara",
            location: "Bangalore Urban, Karnataka, India",
            period: "Nov 2020 - Dec 2020"
        },
        {
            title: "Research Assistant, Yuan-Ze University",
            location: "Taoyuan City, Taiwan",
            period: "Apr 2020 - Jun 2020"
        },
        {
            title: "Data Science Intern, Flipr Innovation Labs",
            location: "Bengaluru, Karnataka, India",
            period: "May 2020 - May 2020"
        },
        {
            title: "Machine Learning Engineer Intern, Smartbridge",
            location: "May 2020 - May 2020"
        }
    ],
    teaching: [
        {
            title: "Seasonal Computer Programming Instructor, Red Deer Polytechnic",
            location: "Red Deer, Alberta, Canada",
            period: "Jan 2024 - Jun 2024"
        },
        {
            title: "Undergraduate Teaching Assistant and Marker, Dalhousie University",
            location: "Halifax",
            period: "Jan 2023 - Dec 2023"
        },
        {
            title: "Graduate Teaching Assistant and Marker, Dalhousie University",
            location: "Halifax",
            period: "Jan 2023 - Aug 2023"
        },
        {
            title: "Research Assistant, Dalhousie University",
            location: "Halifax",
            period: "Nov 2022 - Dec 2022"
        }
    ]
};

function Experience() {
    return (
        <Container maxWidth="lg" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Typography variant="h6" gutterBottom>
                Technical Experience
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {experiences.technical.map((exp, index) => (
                            <TableRow key={index}>
                                <TableCell>{exp.title}</TableCell>
                                <TableCell align="right">{exp.location}</TableCell>
                                <TableCell align="right">{exp.period}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="h6" gutterBottom style={{ marginTop: '2rem' }}>
                Teaching Experience
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {experiences.teaching.map((exp, index) => (
                            <TableRow key={index}>
                                <TableCell>{exp.title}</TableCell>
                                <TableCell align="right">{exp.location}</TableCell>
                                <TableCell align="right">{exp.period}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Experience;