import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';
import AcUnitIcon from '@material-ui/icons/AcUnit';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  listItemText2: {
   color: "#db413c"
  },
  listItemText1: {
    color: "#038037"
  },
  listItemText3: {
   color: "#ed8e00"
  },
  listItemText4: {
    color: "#973eb1"
  },
  listItemText5: {
    color: "#2c5cfc"
  }
}));

export default function SchoolCalendarKey() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <EventTwoToneIcon fontSize="small" className={classes.listItemText2} />
        </ListItemIcon>
        <ListItemText
        classes={{ secondary: classes.listItemText2 }}
            secondary={
            <React.Fragment>
              {"Holiday: School Closed"}
            </React.Fragment>
          }
        />
      </ListItem>
     
      <ListItem>
        <ListItemIcon >
          <EventTwoToneIcon fontSize="small" className={classes.listItemText4}/>
        </ListItemIcon>
        <ListItemText
        classes={{ secondary: classes.listItemText4 }}
          secondary={
            <React.Fragment>              
              {"Conference Day (No Students)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon >
          <EventTwoToneIcon fontSize="small" className={classes.listItemText1}/>
        </ListItemIcon>
        <ListItemText
        classes={{ secondary: classes.listItemText1 }}
          secondary={
            <React.Fragment>              
              {"Vacation Day (Child Care Available)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon >
          <EventTwoToneIcon fontSize="small" className={classes.listItemText3}/>
        </ListItemIcon>
        <ListItemText
        classes={{ secondary: classes.listItemText3 }}
          secondary={
            <React.Fragment>              
              {"Closing at 2:00~ No After Care"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon >
          <AcUnitIcon fontSize="small" className={classes.listItemText5}/>
        </ListItemIcon>
        <ListItemText
        classes={{ secondary: classes.listItemText5 }}
          secondary={
            <React.Fragment>              
              {"Snow day make up order"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
