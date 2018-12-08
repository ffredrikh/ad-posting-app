import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 30,
  },
});


function PostAd(props) {
    const { classes } = props;
    return (
      <div>
        <Button variant="contained" color="default" className={classes.button}>      
          <Icon className={classes.icon}>add_circle</Icon>
          POST AD!
        </Button>      
      </div>
    );
  }
  
  PostAd.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PostAd);