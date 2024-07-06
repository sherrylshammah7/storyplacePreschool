import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import img1 from '../../images/Integrated.jpg';
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
    height: 265,
}
}));

export default function IntegratedClassroom() {
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
                Our full day integrated preschool program will be open from 9:00 - 2:00 on a daily basis.
               The integrated classroom utilizes a team teaching approach through collaborative 
               effort between Story Place Preschool and typical daycare housed on our campus.
                The integrated class includes children, ages three to five, and is staffed by
                 a special education teacher, a nursery school teacher and up to two teacher
                  assistants depending on enrollment. Therapy services are provided during the
                   preschool day both in and out of the classroom depending on the goals being 
                   addressed. The class can accommodate up to 6 children with special needs and 
                   up to 10 typically developing children. Parents enrolling their children in the
                    daycare program have the option to enroll their children two,
                     three or five days a week. Classroom activities are
                      play-based and facilitate learning through small, large group and self-directed play.               
          </Card>
        </Grid>
        </Grid>
    </div>
  );
}











