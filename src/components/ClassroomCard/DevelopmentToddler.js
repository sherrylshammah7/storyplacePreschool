import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CardMedia from "@material-ui/core/CardMedia";
import img1 from '../../images/toddlers.jpg';

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

export default function DevelopmentToddler() {
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
              Our Develomental Toddler Group operates Monday through Friday, 9:00am-11:30am.
               Children 18 months to 3 years old attend two, three or five days per week.
                The classroom is staffed by a special education teacher and a teacher aide. 
                Speech/language, occupational , physical and play therapy services are offered
                 to children that are approved to receive these services. 
                 The classroom can accomodate up to 12 children. All classroom activities are play based
                  and children are exposed to the NYS Common Core Pre-K Learning Standards.
              </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}











