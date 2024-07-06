import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CardMedia from "@material-ui/core/CardMedia";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import mappic from '../../images/MAP1.PNG';

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
number:{
  lineHeight: 1.8,
  fontSize:'15px'
}
}));


export default function ContactCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    
        <Grid item xs={12} sm={5}>
          <Card className={classes.paper}>
            
            <Link target="_blank" rel="noopener" href="https://goo.gl/maps/X4AbK37XxdbwquYm8">
            <CardMedia className={classes.cardmedia} image={mappic} />
              </Link>
<Typography> 1477 South Schodack Road
Castleton, NY 12033
</Typography>
    </Card>
        </Grid>       
        <Grid item xs={12} sm={7}>
          <Card className={classes.paper}>  
          <List> 



        
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  />
        </ListItemAvatar>
        <ListItemText
         primary={<React.Fragment><Typography className={classes.subheading}>Office</Typography></React.Fragment>}
          secondary={
            <React.Fragment>
            <Typography className={classes.number}> — (518)477-7103</Typography>
             
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
          primary="Michele Rose"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >
                Preschool Leader
              </Typography>
              {" — (518)-477-7103"}<br></br>
              <Link href="mailto:mrose@storyplacepreschool.com">
              <Typography noWrap>mrose@storyplacepreschool.com</Typography></Link>
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
          primary="Carol Altwerger "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >
                Executive Director
              </Typography>
              <Typography
                component="span"
                variant="body1"
                className={classes.number}
                color="textPrimary"
              >
              </Typography>
             
              {" — (518)-477-6072"}<br></br>
              <Link noWrap href="mailto:caltwerger@storyplacepreschool.com">
              <Typography noWrap>caltwerger@storyplacepreschool.com</Typography>
                </Link>
                            
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     {/*  <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  />
        </ListItemAvatar>
        <ListItemText
          primary={<React.Fragment><Typography className={classes.subheading}>Michael Penticuff</Typography></React.Fragment>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >
               Business Manager
              </Typography>
              {" - (518)-477-6072"}<br></br>
              <Link noWrap href="mailto:mpenticuff@storyplacepreschool.com">
              <Typography noWrap> mpenticuff@storyplacepreschool.com</Typography>
              </Link>
            </React.Fragment>
          }
        />
      </ListItem> */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  />
        </ListItemAvatar>
        <ListItemText
         primary={<React.Fragment><Typography className={classes.subheading}>Fax</Typography></React.Fragment>}
          secondary={
            <React.Fragment>
            <Typography className={classes.number}> — (518) 477-7167</Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
    </List>              
          </Card>
        </Grid>       
      </Grid>
      <Grid>
      </Grid>
    </div>
  );
}











