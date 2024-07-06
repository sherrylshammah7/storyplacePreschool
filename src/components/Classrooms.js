import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IntegratedClassroom from './ClassroomCard/IntegratedClassrooms';
import DevelopmenToddler from './ClassroomCard/DevelopmentToddler';
import SelfContained from './ClassroomCard/SelfContained';
import DayCare from './ClassroomCard/DayCare';
import BeforeAndAfter from './ClassroomCard/BefoeAndAfter'; 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Full Day Integrated Classrooms</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <IntegratedClassroom/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Full Day Self Contained Classrooms</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SelfContained/>          
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Developmental Toddler Group</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <DevelopmenToddler/> 
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Day Care Options</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <DayCare/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Before and After School Enrichment</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <BeforeAndAfter/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
