import { Box, Container, Typography, TextField, Button } from "@mui/material";

function Contact() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const subject = formData.get('subject');
        const message = formData.get('message');
        const recipient = 'an516658@dal.ca';
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.open(mailtoLink);
    };

    return(
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Let's Connect
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField fullWidth label="Subject" name="subject" margin="normal" required/>
        <TextField fullWidth label="Message" name="message" multiline rows={5} margin="normal" required/>
        <Button type="submit" variant="contained" color="success" sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </Container>
    )
}

export default Contact;