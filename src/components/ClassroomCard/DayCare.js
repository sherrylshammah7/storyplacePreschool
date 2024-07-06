import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from "@material-ui/core/CardMedia";
import img1 from '../../images/day.jpg';


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
    height: 168,
}
}));

export default function DayCare() {
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
  
          Day Care is offered to students ages 3-5 years old. 
          Two, three or five day options are available. Preschool hours are 9am-2pm, 
          with before care from 7:00-9:00am, and after care from 2:00-5:00pm.
           The New York State Pre-K Common Core Learning Standards are utilized
            in developing all lessons and activities. We also offer many enrichment activities such
             as therapy groups, field trips, and "guest" presenters on a specific topic or talent.
              The classroom staff consists of an early childhood education teacher,
               a certified special education teacher, and a certified teacher assistant. 
               The class size is a maximum of 16 students.              
          </Card>
        </Grid>     
      </Grid>
    </div>
  );
}











