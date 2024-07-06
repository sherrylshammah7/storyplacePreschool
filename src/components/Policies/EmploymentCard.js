import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import VerticalLinearStepper from './Opportunities';

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
}
}));

export default function EmploymentCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    
        <Grid item xs={12}>
          <Card>
            <VerticalLinearStepper/>
          </Card>
        </Grid> 
      </Grid>
    </div>
  );
}











