import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import img1 from '../../images/p1.jpg';
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardmedia: {
    height: 207,
},
button: {
  textAlign:'center',
  justifyContent: 'center',
}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BeforeAndAfter() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    
        <Grid item xs={12} sm={4}>
          <Card className={classes.paper}>
            <CardMedia
    className={classes.cardmedia}
    image={img1}
    /></Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card className={classes.paper}>
  
          Story Place Preschool, Inc. offers a before care (7:00-9:00am) 
          and after care (2:00-5:00) enrichment program to all children 18 months – 5 years old.
           Our enrichment program is staffed with highly qualified and skilled employees, and
            includes fun opportunities for social skill development with peers, an optional rest period,
             nutritious snack, and developmentally appropriate indoor and outdoor activities in a safe 
             and supportive environment. The program operates year-round, including school breaks, Monday
              thru Friday.
              <p></p>
              <CardActions className={classes.button}>
    <Button  onClick={handleClickOpen} variant="contained" size="small" color="primary" >
    Click To See The Daily Schedule
    </Button>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Daily Schedule"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="7:00 – 8:00" secondary=" Open Play/Breakfast (optional)" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="8:00 – 8:30" secondary="Music & Movement/Yoga" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="8:30 – 9:00" secondary="Story Time/Toileting" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="2:00 – 2:30" secondary="Open Play/Rest Time (optional)" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="2:30 – 3:30" secondary="Snack Time/'Busy Boxes'" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="3:30 – 4:00" secondary="Sensory Stations/Toileting" />
      </ListItem>

<ListItem>
  <ListItemAvatar>
    <Avatar>
      <AccessAlarmIcon />
    </Avatar>
  </ListItemAvatar>
  <ListItemText primary="4:00 – 5:00" secondary="Motor Time (playground or gym)" />
</ListItem>


    </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
    </CardActions>
              
          </Card>
        </Grid>
       
      </Grid>
    </div>
  );
}











