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
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [{label: 'Projects', path: '/projects'},
                {label: 'About', path: '/about'},
                {label: 'Contact', path: '/contact'}];

function Appbar(props) {
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
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: '#fff' }}>
                <ListItemText primary={item.label} />
                </Typography>
              </Link>
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
            <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
                <Button size="large" sx={{ color: '#fff' }}>
                    <Typography variant='h5'>Anirudh Hosur</Typography>
                </Button>
            </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/about">
                    <Button sx={{ color: '#fff' }}>About</Button>
                </Link>
                <Link to="/youtube">
                    <Button sx={{ color: '#fff' }}>Youtube</Button>
                </Link>
                <Link to="/projects">
                    <Button sx={{ color: '#fff' }}>Projects</Button>
                </Link>
                <Link to="/contact">
                    <Button sx={{ color: '#fff' }}>Contact</Button>
                </Link>
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