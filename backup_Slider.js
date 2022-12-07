import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

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
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// scroll up button
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';

// drawer icons
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';

import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

// hiding header
import Slide from '@mui/material/Slide';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse } from '@mui/material';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import SaamaLogo from '../Images/Saama-Logo-white-tag.png';

const drawerWidth = 230;
// consider it as css
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#6fa6e8',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#6fa6e8',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        // color: 'white',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#6fa6e8',
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
        padding: theme.spacing(3),
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // marginLeft: drawerWidth,
    },
    contentShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    list: {
        color: "white",
        padding: '',
    },
    link: {
        textDecoration: 'none',
        color: "white",
        // alignItems: 'left',
    },
    listItem: {
        // paddingLeft: theme.spacing(2),
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
        marginLeft: '20px',
        marginRight: '10px',
    }
}));

// below 2 function are required for scrollTop arrow
function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

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

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function PersistentDrawerLeft(props) {
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

    function changeHeader() {
        // inputref.current.innerHTML="users";
        var btnId = event.target.id;
        var updatedValue = document.getElementById(btnId).id;
        inputRef.current.innerHTML = updatedValue;
    }

    // hiding drawer after clicking in rest of the area of page
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <div className={classes.root} >
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}>
                        <Toolbar>
                            {/* {open == false ? "ltr" : "rtr"} */}
                            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                // onClick={handleDrawerOpen}
                                onClick={open == false ? handleDrawerOpen : handleDrawerClose}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography id="header" variant="h6" noWrap ref={inputRef}>
                                Home Page
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <div className={classes.drawerHeader}>
                        <Link to="/" >
                            <img src={SaamaLogo} alt="SaamaLogo" style={{ paddingLeft: theme.spacing(4), width: '80%' }} id="Home Page" onClick={changeHeader} ></img>
                            {/* <h2 style={{ color: "white", width: '80%' }}>SaamaLogo</h2> */}
                        </Link>
                        {/* <IconButton onClick={handleDrawerClose}> */}
                        {/* <MenuIcon style={{ color: "white" }} /> */}
                        {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                        {/* </IconButton> */}
                    </div>
                    <Divider />
                    <List className={classes.list}>
                        <Link to="/dashboard" className={classes.link}>
                            <ListItem button className={classes.listItem}>
                                <DashboardRoundedIcon className={classes.sliderIcons} />
                                <ListItemText onClick={changeHeader}><Typography id="Dashboard" >Dashboard</Typography></ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List className={classes.list}>
                        <Link to="/listofparticipants" className={classes.link}>
                            <ListItem button className={classes.listItem} >
                                <PeopleOutlineRoundedIcon className={classes.sliderIcons} />
                                <ListItemText onClick={changeHeader}><Typography id="List Of Participants" >List Of Participants</Typography></ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List className={classes.list} >
                        <ListItem button onClick={() => setOpes(!opes)} className={classes.listItem}>
                            <TableChartRoundedIcon className={classes.sliderIcons} />
                            <ListItemText className={classes.list} primary="Advanced Reports ▼" />
                        </ListItem>
                        <Collapse in={opes} sx={{ backgroundColor: '#a3cdffd4' }}>
                            <Link to="/byclinicaltrials" className={classes.link} >
                                <ListItem button className={classes.listItem}>
                                    <BarChartRoundedIcon className={classes.subIcons} />
                                    <ListItemText onClick={changeHeader}><Typography id="Advanced Reports by Clinical Trials" >by Clinical Trials</Typography></ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/bylocationtype" className={classes.link} >
                                <ListItem button className={classes.listItem} >
                                    <edti className={classes.subIcons} />
                                    <ListItemText onClick={changeHeader}><Typography id="Advnaced Reports by Location Type" >by Location Type</Typography></ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/bytrialstatus" className={classes.link}>
                                <ListItem button className={classes.listItem} >
                                    <edti className={classes.subIcons} />
                                    <ListItemText onClick={changeHeader}><Typography id="Advnaced Reports by Trial Status">by Trial Status</Typography></ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/bystudytype" className={classes.link}>
                                <ListItem button className={classes.listItem}  >
                                    <edti className={classes.subIcons} />
                                    <ListItemText onClick={changeHeader}><Typography id="Advanced Reports by Study Type">by Study Type</Typography></ListItemText>
                                </ListItem>
                            </Link>
                        </Collapse>
                    </List>
                    <List className={classes.list}>
                        <Link to="/piavailability" className={classes.link}>
                            <ListItem button className={classes.listItem}  >
                                <AssignmentIndRoundedIcon className={classes.sliderIcons} />
                                <ListItemText onClick={changeHeader}><Typography id="PI Availability">PI Availability</Typography></ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                    <List className={classes.list}>
                        <Link to="/newsandevents" className={classes.link}>
                            <ListItem button className={classes.listItem} >
                                <NewspaperRoundedIcon className={classes.sliderIcons} />
                                <ListItemText onClick={changeHeader}><Typography id="News And Events">Events & News</Typography></ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>


                <main
                    position="fixed"
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                    id="back-to-top-anchor"
                >
                    <Container>

                    </Container>
                    {/* for contentShift area */}

                </main>
            </div>
            <ScrollTop {...props}>
                <Fab color="white" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
}