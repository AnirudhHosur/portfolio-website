import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import Typed from 'react-typed'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Appbar(props) {

    function handleDownload() {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1EfAl7oq48nJvSBQlKingv2iKKct7ECE8/view?usp=sharing';
        link.download = 'CV.pdf';
        link.target = '_blank'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            ANIRUDH HOSUR
        </Typography>
        <Divider />
        <List>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
        <CssBaseline />
        <AppBar component="nav">
            <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                ANIRUDH HOSUR
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                </Button>
                ))}
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}>
            {drawer}
            </Drawer>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typed strings={[
                    "I'm a Software Developer", 
                    "I love coding",
                    "I'm into AWS"
                ]}
                typeSpeed={35} backSpeed={35} loop></Typed>
                <h1>Get to know me better ...</h1>
                <Button color='success' onClick={handleDownload} variant='contained'>Download CV</Button>
            </Box>
        </Box>
        </Box>
    );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appbar;