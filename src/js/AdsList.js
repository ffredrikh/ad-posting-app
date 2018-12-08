import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// Tmp testdata
import GetAdsData from './TestData';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  });

  function AdsList(props) {
    const { classes } = props;
    let ads = GetAdsData();

    const listItems = ads.map((ad) =>
      <Items key={ad.id} value={props} adinfo={ad} />
    );

    return (
      <List className={classes.root}>
        {listItems}
      </List>
    );
  }

  function Items(props)
  {
    const { classes } = props.value;   
    return(
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="t" src="/img/wolf.png">          
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={props.adinfo.title}
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                {props.adinfo.text}
                </Typography>
                <br />
                {props.adinfo.category}
              </React.Fragment>
            }
          />
        </ListItem>
    )
  }
  
  AdsList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AdsList);
  
