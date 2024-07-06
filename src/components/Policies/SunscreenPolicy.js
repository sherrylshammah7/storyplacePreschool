import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import DescriptionIcon from '@material-ui/icons/Description';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'theme.palette.background.paper',
  },
  listFont:{
    fontSize: "15px",
  },
  listItemText1: {
   
    color: "#afde77"
  },
  listItemText2: {
   
    color: "#ef7d12"
  },
  listItemText3: {
    
    color: "#cf9b6f"
  },
  listItemText4: {
   
    color: "#e0dfe4"
  },
  listItemText5: {
   
    color: "#14b9d2"
  },
}));

export default function SunscreenPolicy() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
                <EmojiNatureIcon className={classes.listItemText1} />
        </ListItemAvatar>
        <ListItemText primary={<Typography className={classes.listFont}>Please be aware that you will be
         responsible for applying sunscreen/ bug repellent to
          your child’s skin before school each day.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemAvatar className={classes.listItemText2} >
            <WbSunnyIcon />
        </ListItemAvatar>
        <ListItemText primary={<Typography className={classes.listFont}>If your child stays for after care, one application
         of sunscreen will be applied to your
          child after nap each day that we plan to go outside.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemAvatar className={classes.listItemText3}>
            <EmojiEmotionsIcon />
        </ListItemAvatar>
        <ListItemText primary={<Typography className={classes.listFont}>Please be aware that the
         sunscreen must be provided by you and should be labeled with your child’s name on it.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemAvatar className={classes.listItemText4}>
            <DescriptionIcon />
        </ListItemAvatar>
        <ListItemText primary={<Typography className={classes.listFont}>You will also need to fill out the attached
         form in order for us to apply the sunscreen.</Typography>} />
      </ListItem>
      <ListItem>
        <ListItemAvatar className={classes.listItemText5}>
            <BorderColorIcon />
        </ListItemAvatar >
        <ListItemText primary={<Typography className={classes.listFont}>Please sign the form
         to indicate that you have read and understand this sun screen/ bug repellent policy.</Typography>} />
      </ListItem>
    </List>
  );
}
