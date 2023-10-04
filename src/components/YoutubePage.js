import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

function YoutubePage() {
    const [videos, setVideos] = useState([]);
    const CHANNEL_ID = 'UCfSbPJredtPkBFaWcXifDXw'; 
    const API_KEY = 'AIzaSyCABaH37hSZy9VbjJ2c9DgwCU88KTmdXOs';

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`);
                
                setVideos(response.data.items);
            } catch (error) {
                console.error("Error fetching YouTube videos:", error);
            }
        }

        fetchVideos();
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                Something I also like to do..
            </Typography>
            <Grid container spacing={4}>
                {videos.map((video, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card variant="outlined">
                            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={video.snippet.thumbnails.medium.url}
                                    alt={video.snippet.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        {video.snippet.title}
                                    </Typography>
                                </CardContent>
                            </a>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default YoutubePage;