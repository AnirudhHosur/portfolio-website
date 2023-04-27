import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardActions, Button, Container } from '@mui/material';

function Projects() {

    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/AnirudhHosur/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    return (
        <Container>
        <Grid container spacing={2}>
        {repositories.map(repository => (
            <Grid item xs={12} sm={6} md={4} key={repository.id}>
            <Card>
                <CardContent>
                <h2>{repository.name}</h2>
                <p>{repository.description}</p>
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