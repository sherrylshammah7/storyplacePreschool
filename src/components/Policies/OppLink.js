import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
   
  },
}));

export default function OppLink() {
  const classes = useStyles();
  return (
    <Typography className={classes.root}>
        Please call Michele Rose at 518-477-7103 for current openings.
        <div><p></p></div>
    <Link href="#" onClick={()=> window.open("https://www.olasjobs.org/", "_blank")}>
        Online Application System for K12 Education
    </Link>
   </Typography>
  );
}
