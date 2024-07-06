import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import WorkIcon from '@material-ui/icons/Work';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  font:{
    fontSize:17,
    textAlign:'left',
  }
}));

export default function Benefits() {
  const classes = useStyles();

  return (
    <List subheader={<ListSubheader className={classes.font}>Benefits :</ListSubheader>} className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText  primary="School Calendar" />
     
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="Benefits Package (Medical/Dental/401K)" />
    
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText  primary="Competitive salary" />
      
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText  primary="Birth- 5 years with a center and community based caseload." />
    
      </ListItem>
    </List>
  );
}
