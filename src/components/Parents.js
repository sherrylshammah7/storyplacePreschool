import React from 'react';
import { withStyles, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import cx from 'clsx';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import ParentsCard from './Policies/ParentsCard';

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
      backgroundColor:'#d1f0d9'
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
});

    function Parents({classes}) {
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
   Dear Parents,
    </Typography>
    <div><p></p></div>
    <Typography align='center' variant="h6" color="textSecondary" component="p">
    When we look at your children we are instantly reminded of what a gift they are...
    </Typography>
    <div><p></p></div>
  <ParentsCard/>
    </CardContent>  
    <div><p></p></div>
    </Card>
    </Grid>
    </Grid>
    </CardContent>
    </Card>
    </div> 
    )
    }
   
    const WrappedApp = withStyles(styles)(Parents);

    export default WrappedApp;