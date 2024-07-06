import React from 'react';
import Grid from '@material-ui/core/Grid';
import CalendarSummer  from './Calendar/CalendarSummer';
import CalendarSchool from './Calendar/CalendarSchool'; 
import CalendarKey  from './Calendar/LegendsCalendarSummer';
import SchoolCalendarKey from './Calendar/LengendsCalendarSchool';
import cx from 'clsx';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pdf from '../Documents/newsletter.pdf';
import Sun from '../Documents/sunpolicy.pdf';
import Medic from '../Documents/medic.pdf';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import SimpleExpansionPanel from './Classrooms';
import SunscreenPolicy from './Policies/SunscreenPolicy';
import img1 from '../images/landingimage.jpg';
import img2 from '../images/calendar.jpg';
import img3 from '../images/letter.jpg';
import img4 from '../images/bugsun.jpg';

import PricingCard from './Policies/Reopening';


    const dialogstyles = (theme) => ({
        root: {
        margin: 0,
        padding: theme.spacing(2),
        },
        closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(dialogstyles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <div>
                 <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
            </IconButton>
            ) : null}
            </MuiDialogTitle>
            </div>
           
        );
    });

    const DialogContent = withStyles((theme) => ({
        root: {
        padding: theme.spacing(2),
        },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
        root: {
        margin: 0,
        padding: theme.spacing(1),
        },
    }))(MuiDialogActions);

    const styles = muiBaseTheme => ({
        card: {
            margin: "auto",
            transition: "0.3s",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
        },
        media: {
            paddingTop: "26.25%"
        },
        content: {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 3
        },
        divider: {
             margin: `${muiBaseTheme.spacing.unit * 3}px 0`
        },
        heading: {
            fontWeight: "bold"
        },
        subheading: {
            lineHeight: 1.8,
            fontSize:'17px'
        },
        avatar: {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
            marginLeft: -muiBaseTheme.spacing.unit
        }
        },
        root: {
            flexGrow: 1,
        },
        cardmedia: {
            height: 140,
        },
        buttonstyle:{
            justifyContent: 'center'
        },
        cardColor:{
            backgroundColor:'#e1ebe3'
        },
        infoColor:{
            backgroundColor:'#F1E2FD'
        },
        impUpdate: {
            lineHeight: 1.8,
            fontSize:'17px',
        },
    });

    function LandingPage({ classes }) {
    const [open, setOpen] = React.useState(false);
    const [openClass, setOpenClass] =React.useState(false);
    const [openCalendar, setOpenSchoolCalendar]= React.useState(false);
    const openSummerCalendar = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const openSunscreenPolicy = () => {
        setOpenClass(true);
    };
    
    const policyClose = () => {
        setOpenClass(false);
    };
    const openSchoolCalendar = () => {
        setOpenSchoolCalendar(true);
    };
    
    const closeCalendar = () => {
        setOpenSchoolCalendar(false);
    };
    const shadowStyles = useBouncyShadowStyles();
    return (
    <div>
    <Card className={classes.card}>
    <CardMedia
    className={classes.media}
    image={img1}
    />
   
      
    <Divider className={classes.divider} light />

<Grid className={cx(classes.root, shadowStyles.root)}container spacing={3}>
<Grid item xs>
<Card className={cx(classes.root,classes.infoColor)}  >

<CardContent>
<div><p></p></div>
{/* <Typography align='center'  variant="h5" component="h2">
    Important Update
</Typography>
<div><p></p></div>
<Typography align='center' className={classes.impUpdate}
    variant={"caption"}>
Please join us Wednesday, August 12th from 6-7pm or Friday, August 14th from 1:30-2:30pm for a community meeting to discuss our reopening plan.
</Typography>
<div><p></p></div>
<Typography align='center' className={classes.impUpdate}
    variant={"caption"}>
All parents should have received an email regarding the reopening schedule.
</Typography> */}
<Typography align='center' className={classes.impUpdate}
    variant={"caption"} color="textSecondary" >
"THE SAFETY, GROWTH AND HAPPINESS OF YOUR CHILDREN IS OUR TOP PRIORITY".
</Typography>
</CardContent>    
<CardActions className={classes.buttonstyle}>
<div><p></p></div>
  <PricingCard/> 
</CardActions>
<div><p></p></div>
</Card>
</Grid>
</Grid>
<Divider className={classes.divider} light />

    <CardContent className={classes.content}>
    <Typography
    className={"MuiTypography--heading"}
    variant={"h6"}
    gutterBottom
    >
    We Welcome You
    </Typography>
    <Typography
    className={classes.subheading}
    variant={"caption"}
    >
    Story Place Preschool, Inc is a special needs preschool providing
    educational and therapeutic services
    for children identified with special needs
    as well as daycare and preschool
    services for typically developing children.
    We provide a continuum of individualized,
    quality educational services, therapeutic services and family support
    to children from
    birth to 5 years old with special needs. Story Place utilizes
    a child-centered philosophy
    incorporating learning through play. Our interdisciplinary teams
    focus on nurturing
    the whole child by enhancing interests and strengths to overcome needs.
    </Typography>
    <Divider className={classes.divider} light />
    <Grid className={classes.root} container spacing={3}>
    <Grid item xs>
    <Card className={cx(classes.root, shadowStyles.root)}>
    <CardActionArea>
    <CardMedia
    className={classes.cardmedia}
    image={img2}
    title="Calendar"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    School Calendar
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions>
    <Button  variant="contained" onClick={openSummerCalendar}
    size="small" color="primary">
    Summer, 2023
    </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Summer Program 2023 
        </DialogTitle>
        <DialogContent >
        <Typography align='center' variant="body2" color="textSecondary" component="p">
        Begins July 10th and ends August 18th 
        </Typography> 
        <p></p>
        <CalendarSummer />
        <CalendarKey/>
        </DialogContent>
        </Dialog> 
    <Button variant="contained" onClick={openSchoolCalendar} 
    size="small" color="primary">
    School Year, 2023-2024
    </Button>
    <Dialog onClose={closeCalendar} aria-labelledby="customized-dialog-title" open={openCalendar}>
        <DialogTitle id="customized-dialog-title" onClose={closeCalendar}>
        School Calendar 2023-2024
        </DialogTitle>
        <DialogContent >
        <CalendarSchool />
        <SchoolCalendarKey/>
        </DialogContent>
        </Dialog>
    </CardActions>
    </Card>
    </Grid>
    <Grid item xs>
    <Card className={cx(classes.root, shadowStyles.root)}>
    <CardActionArea>
    <CardMedia
    className={classes.cardmedia}
    image={img3}
    title="Newsletter"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    Newsletter
    </Typography>

    </CardContent>
    </CardActionArea>
    <CardActions>
    <Button target='_blank' href={Pdf} variant="contained" size="small" color="primary">
    Learn More
    </Button>
    </CardActions>
    </Card>
    </Grid>
    <Grid item xs>
    <Card className={cx(classes.root, shadowStyles.root)}>
    <CardActionArea>
    <CardMedia
    className={classes.cardmedia}
    image={img4}
    title="sunscreen"
    />
    <CardContent>
    <Typography gutterBottom variant="h6" component="h2">
    Sunscreen/Bug Repellent Policy
    </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions>
    <Button variant="contained" size="small" color="primary" onClick={openSunscreenPolicy}>
    Learn More
    </Button>
    <Dialog onClose={policyClose} aria-labelledby="customized-dialog-title" open={openClass}>
        <DialogTitle id="customized-dialog-title" onClose={policyClose}>
        Sunscreen and Bug Repellant Policy
        </DialogTitle>
        <DialogContent >
       <SunscreenPolicy/>    
        </DialogContent>
        <DialogActions className={classes.buttonstyle}>
          <Button target='_blank' href={Medic}  variant="contained" autoFocus  color="primary">
            Non-Medication Consent
          </Button>
          <Button target='_blank' href={Sun}  variant="contained" autoFocus  color="primary">
            Permission Slip
          </Button>
        </DialogActions>
        </Dialog>
    </CardActions>
    </Card>
    </Grid>
    </Grid>
    <Divider className={classes.divider} light />

    <Grid className={cx(classes.root, shadowStyles.root)}container spacing={3}>
    <Grid item xs>
    <Card className={cx(classes.root,classes.cardColor)}  >

    <CardContent>
    <div><p></p></div>
    <Typography align='center'  variant="h5" component="h2">
    Come See Our Classrooms.
    </Typography>
    <div><p></p></div>
    <Typography align='center' variant="body2" color="textSecondary" component="p">
    SMALL HANDS CHANGE THE WORLD.
    </Typography>
    <div><p></p></div>
    </CardContent>    
    <CardActions className={classes.buttonstyle}>
   <SimpleExpansionPanel/>
    </CardActions>
    <div><p></p></div>
    </Card>
    </Grid>
    </Grid>
    </CardContent>
    </Card>
    </div>
    );
    }
const WrappedApp = withStyles(styles)(LandingPage);

export default WrappedApp;