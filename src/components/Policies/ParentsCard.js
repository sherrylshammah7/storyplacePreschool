import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Handbook from '../../Documents/parentHandbook.pdf';
import Bill from '../../Documents/billOfRights.pdf';
import CardMedia from "@material-ui/core/CardMedia";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Develop from '../../Documents/developmentalChart.pdf';
import ListSubheader from '@material-ui/core/ListSubheader';
import parents from '../../images/parents.jpg';
import OtherResources from './OtherResources';
import cx from 'clsx';
import CardContent from '@material-ui/core/CardContent';

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
    height: 290,
},
button: {
  textAlign:'center',
  justifyContent: 'center',
},
subheading: {
  lineHeight: 1.8,
  fontSize:'17px'
},
cardColor:{
backgroundColor:'#FBFDFC'
},
heading: {
  fontSize: theme.typography.pxToRem(17),
  color: theme.palette.text.primary,
  flexBasis: '33.33%',
  flexShrink: 0,
  textAlign:'center',
  justifyContent:'center'
},
}));


export default function ParentsCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    
        <Grid item xs={12} sm={5}>
            <Card className={classes.paper}>
              <CardMedia
                className={classes.cardmedia}
                image={parents }/>
            </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Card className={classes.paper}>
            <List subheader={<ListSubheader className={classes.subheading}>If you are interested in getting your Birth-3 year old evaluated, kindly contact the given number:</ListSubheader>} > 
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar  />
                </ListItemAvatar>
                <ListItemText
                  primary="Columbia"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        County Department of Health 
                      </Typography>
                      {" — 518-828-4278"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar  />
                </ListItemAvatar>
                <ListItemText
                  primary="Rensselaer "
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        County Department of Health
                      </Typography>
                      {" — 518-270-2654"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar  />
                </ListItemAvatar>
                <ListItemText
                  primary="Albany"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        County Department of Health
                      </Typography>
                      {' — 518-447-4820'}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
            </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.paper}>
          Together, with our families and the community, 
          we celebrate each child’s strengths and independence through safe, creative, and nurturing
           experiences. Our number one priority has always been and always will be
            providing quality and affordable childcare for families in our community.
              <div><p></p></div>
              <div><p></p></div>
              If you have any questions or want further information, please call 518-477-7103
              <div><p></p></div>
              <CardActions className={classes.button}>
                <Grid  container spacing={3}>
                  <Grid item xs>
                    <Button   target='_blank' href={Bill} variant="contained" size="small" color="primary" >
                    Parents Bill Of Rights
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <Button   target='_blank' href={Handbook} variant="contained" size="small" color="primary" >
                    Parent Handbook
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <Button   target='_blank' href={Develop} variant="contained" size="small" color="primary" >
                    Developmental Checklist
                    </Button>
                  </Grid>
                </Grid>
    </CardActions>
              
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={cx(classes.root,classes.cardColor)}  >
            <CardContent>
            <div><p></p></div>
              <Typography className={classes.heading} >
              Additional Resources
              </Typography>
            <div><p></p></div>
            </CardContent>
            <CardActions className={classes.buttonstyle}>
            <OtherResources/>
            </CardActions>
            <div><p></p></div>
          </Card>
        </Grid>        
      </Grid>
    </div>
  );
}











