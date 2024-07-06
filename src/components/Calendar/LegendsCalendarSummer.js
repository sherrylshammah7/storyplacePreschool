import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';


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
  }
}));

export default function CalendarKey() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <EventTwoToneIcon fontSize="small" className={classes.listItemText1} />
        </ListItemIcon>
        <ListItemText
        classes={{ secondary: classes.listItemText1 }}
            secondary={
            <React.Fragment>
              {"Vacation Days:   Childcare available"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon >
          <EventTwoToneIcon fontSize="small" className={classes.listItemText2}/>
        </ListItemIcon>
        <ListItemText
        classes={{ secondary: classes.listItemText2 }}
          secondary={
            <React.Fragment>              
              {"Holidays:   School will be closed"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
