import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LanguageIcon from '@material-ui/icons/Language';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subheading: {
    lineHeight: 1.8,
    fontSize:'17px',
   
  },
  card: {
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
}
  },
  cardmedia: {
    height: 110,
    maxwidth:40
},
margin: {
    justifyContent:'center',
    textAlign:'center' ,
  },

  cardmargin:{
    justifyContent:'center',
    textAlign:'center' ,
    height:112,
  },
 
}));

export default function OtherResources() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Parent to Parent of New York State:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           
            <Grid container spacing={3}>
                     <Grid item xs={12} sm={6}>
                    <Card>
                    <List noWrap subheader={<ListSubheader noWrap className={classes.subheading}>List of Capital District Resources</ListSubheader>} >    
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar  />
                </ListItemAvatar>
                <ListItemText
                  primary="Contact"
                  secondary={
                    <React.Fragment>
                       <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Tina Beauparlant
                      </Typography> 
                      {" — (518) 381-4350"}<br></br>
              <Link href="mailto:tbeauparlant@ptopnys.org"> 
              <Typography noWrap>tbeauparlant@ptopnys.org</Typography></Link>
                    </React.Fragment>
                  }
                />
              </ListItem>
              
             </List>
                    </Card>
                </Grid>
  
                <Grid item xs={12} sm={6} >
                <Card>
                    <List>     
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <LanguageIcon  />
                </ListItemAvatar>
                <ListItemText
                  primary="For More Information,"
                  secondary={
                    <React.Fragment>
                       <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Please click the link below
                      </Typography> 
                   <br></br>
              <Link target="_blank" rel="noopener" href="http://parenttoparentnys.org/offices/capital-district/"> 
              <Typography noWrap>http://parenttoparentnys.org/offices/capital-district/</Typography></Link>
                    </React.Fragment>
                  }
                />
              </ListItem>
             </List>
                    </Card>
                </Grid>
            </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>The Bus Stop Club : </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid container spacing={3}>
                     <Grid item xs={12} sm={6}>
                    <Card>
                    <List noWrap subheader={<ListSubheader noWrap className={classes.subheading}>For siblings of children with special needs</ListSubheader>} >      
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar  />
                </ListItemAvatar>
                <ListItemText
                  primary="Contact"
                  secondary={
                    <React.Fragment>
                       <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        The Bus Stop Club, Inc.
                      </Typography> 
                      {" — 518-221-4402"}<br></br>
                      {" PO Box 473 East Greenbush, NY 12061 "}<br></br>
              <Link href="mailto:info@busstopclub.com"> <Typography noWrap>info@busstopclub.com</Typography></Link>
                    </React.Fragment>
                  }
                />
              </ListItem>
              
             </List>
                    </Card>
                </Grid>
  
                <Grid item xs={12} sm={6} >
                <Card>
                    <List>     
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <LanguageIcon  />
                </ListItemAvatar>
                <ListItemText
                  primary="For More Information,"
                  secondary={
                    <React.Fragment>
                       <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Please click the link below 
                      </Typography> 
                   <br></br>
              <Link href="https://www.busstopclub.com/" target="_blank" rel="noopener"> 
              
              <Typography noWrap> https://www.busstopclub.com/</Typography>
                </Link>
                    </React.Fragment>
                  }
                />
              </ListItem>
              
             </List>
                    </Card>
                </Grid>
            </Grid>
           
             
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Kids Out and About: </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid container spacing={3}>
                <Grid item xs={12} >
                <Card>
                <List noWrap subheader={<ListSubheader noWrap className={classes.subheading}>The Capital District online guide to everything for kids, teens and families.</ListSubheader>} >      
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <LanguageIcon  />
                </ListItemAvatar>
                <ListItemText
                  primary="For More Information,"
                  secondary={
                    <React.Fragment>
                       <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Please click the link below 
                      </Typography> 
                   <br></br>
              <Link target="_blank" rel="noopener" href="https://albany.kidsoutandabout.com/"> 
              
              <Typography noWrap> https://albany.kidsoutandabout.com/</Typography>
               </Link>
                    </React.Fragment>
                  }
                />
              </ListItem>
              
             </List>
                    </Card>
                </Grid>
            </Grid>
           
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
