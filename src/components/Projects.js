import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardActions, Button, Container, Typography, Chip, Box } from '@mui/material';
import { green, blue, orange, red, purple } from '@mui/material/colors';

function Projects() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch('https://api.github.com/users/AnirudhHosur/repos');
                const data = await response.json();

                const sortedRepositories = data.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return dateB - dateA;
                });

                // Fetch programming languages for each repository
                const repositoriesWithLanguages = await Promise.all(
                    sortedRepositories.map(async (repo) => {
                        const languagesResponse = await fetch(repo.languages_url);
                        const languagesData = await languagesResponse.json();
                        return {
                            ...repo,
                            languages: Object.keys(languagesData) || [], // Ensure languages is always an array
                        };
                    })
                );

                setRepositories(repositoriesWithLanguages);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchRepositories();
    }, []);

    const formatDate = date => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const getColorForLanguage = (lang) => {
        switch (lang.toLowerCase()) {
            case 'javascript':
                return blue[500];
            case 'python':
                return green[500];
            case 'java':
                return orange[500];
            case 'c++':
                return red[500];
            case 'html':
                return purple[500];
            default:
                return 'grey';
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                {repositories.map(repository => (
                    <Grid item xs={12} sm={6} md={4} key={repository.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {repository.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                    {repository.description || 'No description available'}
                                </Typography>
                                <Typography variant="overline" color="textSecondary" component="h4" gutterBottom>
                                    Created On: {formatDate(repository.created_at)}
                                </Typography>
                                <Box mt={2}>
                                    <Typography variant="body2" color="textSecondary">
                                        Languages:
                                    </Typography>
                                    <Box mt={1}>
                                        {repository.languages.length > 0 ? (
                                            repository.languages.map((lang, index) => (
                                                <Chip
                                                    key={index}
                                                    label={lang}
                                                    sx={{
                                                        mr: 0.5,
                                                        mb: 0.5,
                                                        backgroundColor: getColorForLanguage(lang),
                                                        color: '#fff'
                                                    }}
                                                />
                                            ))
                                        ) : (
                                            <Typography variant="body2" color="textSecondary">
                                                No languages detected
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button color='success' href={repository.html_url} target="_blank">
                                    View on GitHub
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Projects;