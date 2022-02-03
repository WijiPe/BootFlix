import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BootFlixLogo from './BootFlixLogo';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import bootflix from '../pngs/bootflix.png';
import '../style/logo.css'


const pages = ['Popular', 'Action', 'Kids'];


const NavBar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const history = useHistory()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const logout = () =>{
        axios.get("http://localhost:8000/api/user/logout", {withCredentials: true})
                .then (res => {
                    console.log(res)
                    history.push('/')
                })
                .catch (err =>{
                    console.log(err)
                })
            }
    const edituser = (e) => {
        e.preventDefault();
        history.push(`/edit/user/${props.id}`)
    }

    const home = (e) =>{ 
        e.preventDefault();
        let path="/home"; 
        history.push(path);
    }
    
    const goToFavorites = (e) => {
        e.preventDefault();
        history.push('/catagory/myList')
    }


    return (
        <AppBar  style={{ background: '#303030' }} position="static">
            <Container  maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 20, display: { xs: 'none', md: 'flex' } }}
                    >
                        <button className='clear' onClick={home}><img className='logo' src={bootflix}></img></button>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            
                                {/* <MenuItem onClick={handleCloseNavMenu}>
                                    <Button onClick={() => history.push('/home')}> Home</Button>
                                    <Button onClick={() => history.push('/catagory/action')}> Action</Button>
                                    <Button onClick={() => history.push('/catagory/horror')}> Horror</Button>
                                </MenuItem> */}
                            
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <BootFlixLogo />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu, ()=> history.push(`/catagory/${page.toLowerCase()}`)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                                <Avatar alt={props.username} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Button onClick={edituser}>Edit Profile</Button>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Button onClick={goToFavorites}>Favorites</Button>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Button onClick={logout}>Logout</Button>
                                </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
