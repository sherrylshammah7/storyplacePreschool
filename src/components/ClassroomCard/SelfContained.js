import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CardMedia from "@material-ui/core/CardMedia";
import img1 from '../../images/todd.jpg';

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
    height: 175,
},
}));

export default function SelfContained() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    
        <Grid item xs={12} sm={4}>
          <Card className={classes.paper}>
            <CardMedia
    className={classes.cardmedia}
    image={
    img1
    }
    /></Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card className={classes.paper}>
              <Typography>
              Story Place Preschool is licensed to operate two full day (five hour) center-based classrooms
               for children from 3-5 years. The classroom is staffed by a special
                education teacher and 2 teacher assistants with a maximum of between 10-12 students in each class. 
              This class meets five days per week from 9:00 - 2:00 and follows the regional school calendar.
              </Typography>
          </Card>
        </Grid>       
      </Grid>
    </div>
  );
}











