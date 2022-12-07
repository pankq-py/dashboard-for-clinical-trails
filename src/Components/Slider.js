import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

import Routing from './Routing';
import Footer from './Footer';

import SignUpForm from '../Pages/SignUpForm';
import SignInForm from '../Pages/SignInForm';

import ThemeSwitcher from './ThemeSwitcher';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import useScrollTrigger from '@mui/material/useScrollTrigger';


// drawer icons
import DashboardRoundedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
// import PieChartOutlineRoundedIcon from '@mui/icons-material/PieChartOutlineRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import AlignVerticalBottomRoundedIcon from '@mui/icons-material/AlignVerticalBottomRounded';
import LineAxisRoundedIcon from '@mui/icons-material/LineAxisRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndOutlined';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// hiding header
import Slide from '@mui/material/Slide';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { alertClasses, Collapse } from '@mui/material';

// model requirements

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

// sign in drop
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';

// import SaamaLogo from '../Images/Saama-Logo-white.png';
import HomeLogo from '../Images/HomeLogo.png';

// for toast

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
toast.configure();

const drawerWidth = 230;
// consider it as css
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '0px',

    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // backgroundColor: '#00add9',
        background: 'linear-gradient(to left top, #2193b0, #0d4956)'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        // backgroundColor: '#00add9',
        background: 'linear-gradient(to left top, #2193b0, #0d4956)'
    },
    drawer: {
        // width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: 'linear-gradient(to left top, #2193b0, #0d4956)'
    },
    drawerHeader: {
        display: 'flex',
        color: "white",
        alignItems: 'center',
        padding: theme.spacing(0),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: '80px 0 0 0',
        // padding: '`theme.spacing(20)` 5% `theme.spacing(10)` 5%',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // marginLeft: drawerWidth,
    },
    contentShift: {
        // padding: '`{theme.spacing(10)}` 5% `{theme.spacing(10)}` 5%',
        // width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    typography: {
        fontSize: 16,
        color: 'white',
    },
    list: {
        color: "white",
        padding: '',
    },
    link: {
        textDecoration: 'none',
        // color: "white",
    },
    listItem: {
        // paddingLeft: theme.spacing(2),
        fontSize: '80%',
    },
    sliderIcons: {
        color: 'white',
        marginRight: '10px',
        // paddingBottom: theme.spacing(1),
        // height: '1.2em',
        // fontSize: 'medium',
    },
    subIcons: {
        color: 'white',
        marginLeft: '25px',
        marginRight: '10px',
    }
}));

// below 2 function are required for hiding header
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
// HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

// model css
const modelStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    // bgcolor: 'transparent',
    border: '2px solid #0d4956',
    boxShadow: 24,
    p: 1,
};


export default function Slider(props) {
    const classes = useStyles();
    const [ope, setOpe] = useState(false);
    const [opes, setOpes] = useState(false);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const inputRef = useRef(null)

    function changeHeader(e) {
        // console.log(event.target.id);
        // console.log(event.target);
        // inputRef.current.innerHTML="users";
        var btnId = e.target.id;
        var updatedValue = document.getElementById(btnId).id;
        inputRef.current.innerHTML = updatedValue;
        // console.log(btnId);
    }

    // signup/signin model
    // const [openModelSignUp, setOpenModelSignUp] = React.useState(false);
    // const [openModelSignIn, setOpenModelSignIn] = React.useState(false);


    const [openModelDemo, setOpenModelDemo] = React.useState(false);
    const handleOpenModelDemo = (e) => {
        if (isLoggedInValue) {
            sessionStorage.setItem('isLoggedIn', false);
            toast("You have successfully logged out", { autoClose: 8000, position: toast.POSITION.TOP_CENTER })
        } else {
            // setOpenModelSignIn(true);
            setOpenModelDemo(true);
        }
    }
    const handleCloseModelDemo = (e) => {
        setOpenModelDemo(false);
    }

    const handleOpenModel = (e) => {
        if (e.target.id === "Sign Up") {
            setOpenModelSignUp(true);
        } else if (e.target.id === "Sign In") {
            if (isLoggedInValue) {
                sessionStorage.setItem('isLoggedIn', false);
                toast("You have successfully logged out", { autoClose: 8000, position: toast.POSITION.TOP_CENTER })
            } else {
                setOpenModelSignIn(true);
            }
        } else {
            // alert("selected sth else");
            toast.warning("Please click button again", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
        }
    }
    const handleCloseModel = () => {
        setOpenModelSignUp(false);
        setOpenModelSignIn(false);
    }

    // dropdown button for sign up
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openDrop = Boolean(anchorEl);
    const handleClickDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseDrop = () => {
        setAnchorEl(null);
    };

    const isLoggedInValue = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    // console.log("is logged in: " + isLoggedInValue);

    const [openSignUpForm, setOpenSignUpForm] = useState(true);
    const [isSignInOpen, setIsSignInOpen] = useState(true);

    const sampleHandler = (params) => {
        setOpenSignUpForm(params)
    }

    const changeThemeMode = () => {
        alert("nothing");
    }

    const [themeMode, setThemeMode] = useState('light');

    const darkTheme = createTheme({
        palette: {
            mode: themeMode,
        },
    });

    return (
        <>
            <span id="back-to-top-anchor"></span>
            <div className={classes.root} >
                <CssBaseline />
                <ThemeProvider theme={darkTheme}>
                    <HideOnScroll {...props}>
                        <AppBar
                            position="fixed"
                            className={clsx(classes.appBar, {
                                [classes.appBarShift]: open,
                            })}

                        >
                            <Grid >
                                <Toolbar>
                                    <Grid item xs={10}>
                                        {/* {open == false ? "ltr" : "rtr"} */}
                                        {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                                        <IconButton
                                            color="inherit"
                                            aria-label="open drawer"
                                            // onClick={handleDrawerOpen}
                                            onClick={open == false ? handleDrawerOpen : handleDrawerClose}
                                            edge="start"
                                        >
                                            <MenuIcon style={{ color: 'inherit' }} />
                                        </IconButton>
                                        <Typography id="header" variant="h5" component="div" noWrap ref={inputRef} style={{ display: 'inline', verticalAlign: 'middle', color: 'white' }}>
                                            Dashboard
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <IconButton
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClickDrop}
                                            style={{ color: 'white', fontSize: 'medium', float: 'right', fontSize: 'medium', textTransform: 'none', textDecoration: 'none' }}
                                        >
                                            <AccountCircleOutlinedIcon fontSize='large' />
                                        </IconButton>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={openDrop}
                                            onClose={handleCloseDrop}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            {isLoggedInValue ?
                                                <MenuItem>
                                                    <Link to='/profile' id="Profile" onClick={() => { handleCloseDrop(), changeHeader() }} style={{ color: 'black', fontSize: 'medium', textDecoration: 'none', marginRight: '10px' }}>
                                                        <AccountCircleOutlinedIcon className={classes.sliderIcons} style={{ color: 'black' }} />
                                                        Profile
                                                    </Link>
                                                </MenuItem>
                                                : ''}
                                            <MenuItem onClick={() => { handleOpenModelDemo(); handleCloseDrop() }} id="Sign In" style={{ color: 'black', fontSize: 'medium', textDecoration: 'none', marginRight: '10px' }}>
                                                {!isLoggedInValue ?
                                                    <>
                                                        <LoginOutlinedIcon className={classes.sliderIcons} style={{ color: 'black' }} />
                                                        Sign In
                                                    </>
                                                    :
                                                    <>

                                                        <LogoutOutlinedIcon className={classes.sliderIcons} style={{ color: 'black' }} />
                                                        Logout
                                                    </>
                                                }
                                            </MenuItem>
                                            {/* <MenuItem onClick={handleCloseDrop}>Logout</MenuItem> */}
                                        </Menu>
                                        {/* <Button variant="outlined" style={{ color: 'white', textTransform: 'none', float: 'right' }}>
                                        <Link to="/signin" style={{ color: 'white', fontSize: 'medium', textDecoration: 'none' }}>
                                            Sign In
                                        </Link>
                                        </Button> */}

                                        {/* <ThemeSwitcher /> */}
                                    </Grid>
                                    <IconButton onClick={() => themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light')} color="inherit">
                                        {/* {darkTheme.palette.mode} */}
                                        {darkTheme.palette.mode === 'dark' ? <Brightness7RoundedIcon fontSize='large' /> : <Brightness4RoundedIcon fontSize='large' />}
                                    </IconButton>
                                    {/* <Button onClick={handleOpenModel} style={{ color: 'white', fontSize: 'medium', textDecoration: 'none' }}>Open modal</Button> */}
                                    {/* <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={openModelSignUp}
                                    onClose={handleCloseModel}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={openModelSignUp}>
                                        <Box sx={modelStyle}>
                                            <SignUpForm />
                                        </Box>
                                    </Fade>
                                </Modal> */}
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        open={openModelDemo}
                                        
                                        onClose={handleCloseModelDemo}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                        sx={{overflow:'scroll'}}
                                    >
                                        <Fade in={openModelDemo}>
                                            <Box sx={modelStyle} >
                                                {openSignUpForm ?
                                                    <SignInForm openSignUpForm={sampleHandler} closeHandle={handleCloseModelDemo} />
                                                    // backup:- openSignUpForm={setOpenSignUpForm(true)}
                                                    :
                                                    <SignUpForm openSignInForm={sampleHandler} />
                                                }
                                            </Box>
                                        </Fade>
                                    </Modal>
                                    {/* <Button color="inherit" onClick={handleOpenModelDemo}>Login12</Button> */}
                                    {/* <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={openModelDemo}
                                    onClose={handleCloseModel}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                >
                                    <Fade in={openModelDemo}>
                                        <Box sx={modelStyle}>
                                            <SignInForm />
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2, bgcolor: '#2193b0', '&:hover': { bgcolor: "#1d87a1" }, }}
                                                onClick={handleCloseModelDemo}
                                            >
                                                Close
                                            </Button>
                                        </Box>
                                    </Fade>
                                </Modal> */}
                                </Toolbar>
                            </Grid>
                        </AppBar>
                    </HideOnScroll>

                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <div className={classes.drawerHeader}>
                            <Link to="/" >
                                <img src={HomeLogo} alt="HomeLogo" style={{ paddingLeft: theme.spacing(8), width: '70%' }} id="Dashboard" onClick={changeHeader} ></img>
                                {/* <h2 style={{ color: "white", width: '30%', textAlign:'center' }}>HomeLogo</h2> */}
                            </Link>
                            {/* <IconButton onClick={handleDrawerClose}> */}
                            {/* <MenuIcon style={{ color: "white" }} /> */}
                            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                            {/* </IconButton> */}
                        </div>
                        <Divider />
                        <List className={classes.list}>
                            <Link to="/" className={classes.link} style={{ textDecoration: 'none' }}>
                                <ListItem button className={classes.listItem}>
                                    <DashboardRoundedIcon className={classes.sliderIcons} />
                                    <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="Dashboard">Dashboard</Typography></ListItemText>
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                        <List className={classes.list}>
                            <Link to="/listofparticipants" className={classes.link} style={{ textDecoration: 'none' }}>
                                <ListItem button className={classes.listItem} >
                                    <PeopleOutlineRoundedIcon className={classes.sliderIcons} />
                                    <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="List Of Participants" >List Of Participants</Typography></ListItemText>
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                        <List className={classes.list} >
                            <ListItem button onClick={() => setOpes(!opes)} className={classes.listItem}>
                                <TableChartRoundedIcon className={classes.sliderIcons} />
                                <ListItemText ><div style={{ fontSize: '15px' }} className={classes.typography}>Advanced Reports ▼</div></ListItemText>
                            </ListItem>
                            <Collapse in={opes} >
                                <Link to="/byclinicaltrials" className={classes.link} style={{ textDecoration: 'none' }}>
                                    <ListItem button className={classes.listItem}>
                                        <BarChartRoundedIcon className={classes.subIcons} />
                                        <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="Advanced Reports by Clinical Trials" >by Clinical Trials</Typography></ListItemText>
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link to="/bylocationtype" className={classes.link} style={{ textDecoration: 'none' }}>
                                    <ListItem button className={classes.listItem} >
                                        {/* <PieChartRoundedIcon className={classes.subIcons} /> */}
                                        <PublicRoundedIcon className={classes.subIcons} />
                                        <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="Advanced Reports by Location Type" >by Location Type</Typography></ListItemText>
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link to="/bytrialstatus" className={classes.link} style={{ textDecoration: 'none' }}>
                                    <ListItem button className={classes.listItem} >
                                        <AlignVerticalBottomRoundedIcon className={classes.subIcons} />
                                        <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="Advanced Reports by Trial Status">by Trial Status</Typography></ListItemText>
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link to="/bystudytype" className={classes.link} style={{ textDecoration: 'none' }}>
                                    <ListItem button className={classes.listItem}  >
                                        <LineAxisRoundedIcon className={classes.subIcons} />
                                        <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="Advanced Reports by Study Type">by Study Type</Typography></ListItemText>
                                    </ListItem>
                                </Link>
                            </Collapse>
                        </List>
                        <Divider />
                        <List className={classes.list}>
                            <Link to="/piinsight" className={classes.link} style={{ textDecoration: 'none' }}>
                                <ListItem button className={classes.listItem}  >
                                    <AssignmentIndRoundedIcon className={classes.sliderIcons} />
                                    <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="PI Insight">PI Insight</Typography></ListItemText>
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                        <List className={classes.list}>
                            <Link to="/newsandevents" className={classes.link} style={{ textDecoration: 'none', boxShadow: '20px' }}>
                                <ListItem button className={classes.listItem} >
                                    <NewspaperRoundedIcon className={classes.sliderIcons} />
                                    <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="News And Events">News & Events</Typography></ListItemText>
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                        {/* <List className={classes.list}>
                        <Link to="/signup" className={classes.link} style={{ textDecoration: 'none', boxShadow: '20px' }}>
                            <ListItem button className={classes.listItem} >
                                <AccountCircleOutlinedIcon className={classes.sliderIcons} />
                                <ListItemText onClick={changeHeader}><Typography className={classes.typography} id="Sign Up">Sign Up</Typography></ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                    <Divider /> */}
                    </Drawer>

                    <div
                        position="fixed"
                        onClick={handleDrawerClose}
                        className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}
                    >
                        <Routing />
                        <Footer />
                    </div>
                </ThemeProvider>
            </div>
        </>
    );
}   