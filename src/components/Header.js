import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationIcon from '@material-ui/icons/LocationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MoreIcon from '@material-ui/icons/MoreVert';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import LandingPage from './LandingPage';
import About from './About';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import Parents from './Parents';
import Employment from './Employment';
import Enroll from './EnrollNow';
import Contact from './Contact';
import logo from '../images/foxy.png';
import pyramid from '../images/pyramid.jpg';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    root: {
        justifyContent: "center",
     
    },
    scroller: {
        flexGrow: "0",
      },

    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    tabs:{
        border:'2px solid #96d17f',
        marginRight:'10px',
        '&:hover': {
            background: "#96d17f",
            borderTopRightRadius:'0px',
	        borderBottomLeftRadius:'0px'
         },
    },
    logo:{
        maxWidth: 60,
    },
    logo1:{
        maxWidth: 30,
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const [alert, closeAlert] = React.useState(true);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <div>
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={()=> window.open("https://goo.gl/maps/X4AbK37XxdbwquYm8", "_blank")}>
                <IconButton  aria-label="show location" color="inherit" >
                        <LocationIcon />
                </IconButton>
                    <span>Find Us</span>                
            </MenuItem>        
            <MenuItem onClick={()=> window.open("https://www.facebook.com/storyplacepreschool/?view_public_for=159882220699589", "_blank")}>
                <IconButton
                    aria-label="facebook"
                    color="inherit"
                >
                    <FacebookIcon />
                </IconButton>
                
                <span>Facebook</span>
            </MenuItem>

            <MenuItem onClick={()=> window.open("https://u4664138.ct.sendgrid.net/ls/click?upn=Q86FZvQw4wIV8FPdHW9fVEO9oCGSzegRiLkDEzcGrwUNikVc7lhccC6VOe8nkMoMkAn-2BXDZIxNRb1zgXD6ax1w-3D-3DyVnh_HNE8ALO3E0RdfHbskSVlg4LEscKPr6nxJCHjG6WWa4AI3Ar8xGa6qHy-2FqPG4RO1OEj4FlU9JUchECuAmdrTsH7jDIPVkYpXyQSLiUAMGfeHTuzl4IViypMjTIgaGKatLwLhbScvBIOhi-2FmTH4H0Uc-2B3T1qGjRhKpYAjhklA1lltdSOaqWjQrziw9XPXm8TOzc7SGeHx9UPTFp2t3mMbJoQFLkWNUHEESTxKJa3NBcxKvgDMsTQ8sMw6qPUO2ar7L2JxYtwfCeOS8-2BRaw6O6IRQ-3D-3D", "_blank")}>
                <IconButton  aria-label="show location" color="inherit" >
                        <AssignmentIndIcon />
                </IconButton>
                    <span>Staff</span>                
            </MenuItem>  
            </Menu>
            </div>
    );

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
            <div>
                   <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && <Box p={3}>{children}</Box>}
          </Typography>
            </div>
       
        );
      }

    return (
        <div className={classes.grow}>
               <Collapse in={alert}>
                   {/*The Banner for the website*/}
        <Alert severity='success'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                closeAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         <span>Welcome To Story Place Preschool's New Website !! </span> 
        </Alert>
      </Collapse>
            <AppBar position="static">
                <Toolbar >
                <img src={logo} alt="logo" className={classes.logo} />
          
                    <Typography variant="h6" noWrap>
                        Story Place Preschool, Inc.
          </Typography>
                    <div className={classes.grow} />
                    <img src={pyramid} alt="logo" className={classes.logo1} />
                    <div className={classes.sectionDesktop}>

                        <IconButton onClick={()=> window.open("https://goo.gl/maps/X4AbK37XxdbwquYm8", "_blank")} aria-label="show location" color="inherit">
                                <LocationIcon />
                        </IconButton>
                        
                        <IconButton onClick={()=> window.open("https://www.facebook.com/storyplacepreschool/?view_public_for=159882220699589", "_blank")} aria-label="facebook" color="inherit">
                                <FacebookIcon />
                        </IconButton>    
                        <IconButton onClick={()=> window.open("https://u4664138.ct.sendgrid.net/ls/click?upn=Q86FZvQw4wIV8FPdHW9fVEO9oCGSzegRiLkDEzcGrwUNikVc7lhccC6VOe8nkMoMkAn-2BXDZIxNRb1zgXD6ax1w-3D-3DyVnh_HNE8ALO3E0RdfHbskSVlg4LEscKPr6nxJCHjG6WWa4AI3Ar8xGa6qHy-2FqPG4RO1OEj4FlU9JUchECuAmdrTsH7jDIPVkYpXyQSLiUAMGfeHTuzl4IViypMjTIgaGKatLwLhbScvBIOhi-2FmTH4H0Uc-2B3T1qGjRhKpYAjhklA1lltdSOaqWjQrziw9XPXm8TOzc7SGeHx9UPTFp2t3mMbJoQFLkWNUHEESTxKJa3NBcxKvgDMsTQ8sMw6qPUO2ar7L2JxYtwfCeOS8-2BRaw6O6IRQ-3D-3D", "_blank")} aria-label="facebook" color="inherit">
                                <AssignmentIndIcon />
                        </IconButton>                  
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <p></p>
            <Tabs classes={{ root: classes.root, scroller: classes.scroller }}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor = "secondary"
                variant="scrollable"
                scrollButtons="on"
            >
                <Tab className={classes.tabs} label="Home" {...a11yProps(0)} />
                <Tab className={classes.tabs} label="About" {...a11yProps(1)} />
                <Tab className={classes.tabs} label="Parents" {...a11yProps(2)} />
                <Tab className={classes.tabs} label="Career" {...a11yProps(3)} />
                <Tab className={classes.tabs} label="Enroll Now" {...a11yProps(4)} />
                <Tab className={classes.tabs} label="Contact" {...a11yProps(5)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <LandingPage />
            </TabPanel>
            <TabPanel value={value} index={1}>
               <About />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Parents/>
            </TabPanel>
            <TabPanel value={value} index={3}>
               <Employment/>
            </TabPanel>
            <TabPanel value={value} index={4}>
            <Enroll/>
            </TabPanel>
            <TabPanel value={value} index={5}>
               <Contact/>
            </TabPanel>
            {renderMobileMenu}
            </div>
    );
}
