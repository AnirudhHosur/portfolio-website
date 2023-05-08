import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardActions, Button, Container, Typography } from '@mui/material';

function Projects() {

    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/AnirudhHosur/repos')
        .then(response => response.json())
        .then(data => {
            const sortedRepositories = data.sort((a, b) => {
                const dateA = new Date(a.created_at);
                const dateB = new Date(b.created_at);
                return dateB - dateA;
            });
            setRepositories(sortedRepositories);
        });
    }, []);

    const formatDate = date => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <Container>
        <Grid container spacing={2}>
        {repositories.map(repository => (
            <Grid item xs={12} sm={6} md={4} key={repository.id}>
            <Card>
                <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                                    {repository.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {repository.description}
                                </Typography>
                                <Typography variant="overline" color="textSecondary" component="h4">
                                    Created On: {formatDate(repository.created_at)}
                                </Typography>
                </CardContent>
                <CardActions>
                <Button color='success' href={repository.html_url} target="_blank">
                    View on Github
                </Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
        </Grid>
        </Container>
    )
}

export default Projects