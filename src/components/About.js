import React from 'react';
import { withStyles, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Gallery from './Policies/Gallery';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import cx from 'clsx';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import NatureIcon from '@material-ui/icons/Nature';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';
import CreateIcon from '@material-ui/icons/Create';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import ComputerIcon from '@material-ui/icons/Computer';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import health from '../images/health.png';
import education from '../images/education.jpg';
import family from '../images/family.jpg';

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
    fontSize:'18px'
  },
  subheading: {
      lineHeight: 1.8,
      fontSize:'15px'
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
      height: 100,
  },
  buttonstyle:{
      justifyContent: 'center'
  },
  cardColor:{
      backgroundColor:'#f3e5e0'
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  
orange:{
  color:'#fc8c03'
},
blue:{
  color:'#0324fc'
},
yellow:{
  color:'#ab079a'
},
green:{
  color:'#038037'
},
red:{
  color:'#d6000c'
}
});

    function About({classes}) {
      const shadowStyles = useBouncyShadowStyles();
    return (
      <div>
      <Card className={classes.card}>    
      <CardContent className={classes.content}>
      <Grid className={cx(classes.root, shadowStyles.root)}container spacing={3}>
    <Grid item xs>
      <Card className={cx(classes.root,classes.cardColor)}  >
          <CardContent>
          <div><p></p></div>
          <Typography align='center'  variant="h5" component="h2">
          Our Gallery
          </Typography>
          <div><p></p></div>
          <Typography align='center' variant="h6" color="textSecondary" component="h2">
          Every Child Is An Artist
          </Typography>
          <div><p></p></div>
          <Gallery/>
          </CardContent>
          <div><p></p></div>
      </Card>
      
    </Grid>
    </Grid>
    <Divider className={classes.divider} light />
    <div><p></p></div>
    <div><p></p></div>
    <Card className={cx(classes.root, shadowStyles.root)}>
    <CardContent className={classes.content}>
    <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>General Information :</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <List noWrap subheader={<ListSubheader noWrap className={classes.subheading}>We offer group and individual instruction to children from birth to 5 years in the following areas:</ListSubheader>} >
      <ListItem  divider>
        <ListItemIcon >
          <AccessibilityIcon className={classes.orange}/>
        </ListItemIcon>
        <ListItemText className={classes.orange}   id="self-help" primary="Self Help (activities of daily living)" />
        <ListItemSecondaryAction>
         
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <NatureIcon  className={classes.green}/>
        </ListItemIcon>
        <ListItemText className={classes.green} id="ssience" primary="Science (body awareness, senses, nature)" />
        <ListItemSecondaryAction>
          
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <FormatListNumberedIcon className={classes.blue} />
        </ListItemIcon>
        <ListItemText className={classes.blue} id="math" primary="Math (number concepts, size discrimination, seriation)" />
        <ListItemSecondaryAction>
         
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <FavoriteIcon className={classes.red} />
        </ListItemIcon>
        <ListItemText className={classes.red} id="Health" primary="Health (nutrition, safety)" />
        <ListItemSecondaryAction>
          
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <PeopleIcon className={classes.yellow}/>
        </ListItemIcon>
        <ListItemText className={classes.yellow} id="social" primary="Social Studies (social and community awareness)" />
        <ListItemSecondaryAction>
         
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <SportsHandballIcon className={classes.orange} />
        </ListItemIcon>
        <ListItemText className={classes.orange} id="phy-education" primary="Physical Education (outdoor and indoor motor play)" />
        <ListItemSecondaryAction>
          
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <CreateIcon  className={classes.green}/>
        </ListItemIcon>
        <ListItemText className={classes.green} id="motor" primary="Fine Motor (writing, scissors, utensil use)" />
        <ListItemSecondaryAction>
         
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <ComputerIcon className={classes.blue} />
        </ListItemIcon>
        <ListItemText className={classes.blue} id="tech-edu" primary="Technology Education (use of computers and assistive technology)" />
        <ListItemSecondaryAction>
          
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <RecordVoiceOverIcon className={classes.red} />
        </ListItemIcon>
        <ListItemText className={classes.red} id="communication" primary="Communication (speech and language skills)" />
        <ListItemSecondaryAction>
         
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <QuestionAnswerIcon className={classes.yellow} />
        </ListItemIcon>
        <ListItemText className={classes.yellow} id="emotional" primary="Social/Emotional Development (interactions with others, self image, self regulation)" />
        <ListItemSecondaryAction>
          
        </ListItemSecondaryAction>
      </ListItem>
    </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </CardContent>
    </Card>
    <Divider className={classes.divider} light />
    <div><p></p></div>
    <div><p></p></div>
    <Card>
      <CardContent>
      <Typography  className={classes.heading}>
      Story Place Preschool, Inc operates with approval from:
    </Typography>
    <div><p></p></div>
    <div><p></p></div><div><p></p></div>
    <div><p></p></div>
    <Grid className={classes.root} container spacing={4}>
  
    <Grid item xs={12} sm={4}>
  
    <Card className={cx(classes.root, shadowStyles.root)}>

    <CardActionArea onClick={()=> window.open("https://www.health.ny.gov/", "_blank")}>
    <CardMedia
    className={classes.cardmedia}
    image={health}
    title="New York State Department of Health"
    />
      </CardActionArea>

    </Card>
    </Grid>
    <Grid item  xs={12} sm={4}>
      <Card className={cx(classes.root, shadowStyles.root)}>
        <CardActionArea onClick={()=> window.open("http://www.nysed.gov/", "_blank")}>
          <CardMedia
          className={classes.cardmedia}
          image={education}
          title="New York State Education Department"
          />
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item  xs={12} sm={4}>
    <Card className={cx(classes.root, shadowStyles.root)}>
    <CardActionArea onClick={()=> window.open("https://ocfs.ny.gov/main/", "_blank")}>
    <CardMedia
    className={classes.cardmedia}
    image={family}
    title="New York State Office of Child and Family Services"
    />
    </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    </CardContent>
    </Card>
    <Divider className={classes.divider} light />
    </CardContent>
    </Card>
    </div> 
    )
    }
   
    const WrappedApp = withStyles(styles)(About);

    export default WrappedApp;