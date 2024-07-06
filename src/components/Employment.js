import React from 'react';
import { withStyles, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import cx from 'clsx';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import EmploymentCard from './Policies/EmploymentCard';

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
      
      height: 50,
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
      backgroundColor:'#cce7e8'
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

function Employment({classes}) {
  const shadowStyles = useBouncyShadowStyles();
return (
  <div>
    <Card className={classes.card}>    
      <CardContent className={classes.content}>
         <Grid className={cx(classes.root, shadowStyles.root)}container spacing={3}>
            <Grid item xs>
              <Card className={cx(classes.root,classes.cardColor)}>
              <CardContent>
              <p></p>
                <Typography align='center'  variant="h5" component="h2">
                  Our Opportunities,
                </Typography>
                  <p></p>
                <Typography align='center' variant="h6" color="textSecondary" component="h2">
                 By doing what you love, you inspire and awaken the hearts of others.
                </Typography>
                  <p></p>
              </CardContent>
            <p></p>
            </Card>
        </Grid>
      </Grid>
      </CardContent>
    </Card>
<EmploymentCard/>
</div> 
)
}

const WrappedApp = withStyles(styles)(Employment);
export default WrappedApp;