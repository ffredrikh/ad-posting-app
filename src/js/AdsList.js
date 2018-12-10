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
//import GetAdsData from './TestData';

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

  class AdsList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],     
      };
    }

    componentDidMount() {
        fetch("https://localhost:5001/api/ads")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result             
              });
            },
       
            // let ads = GetAdsData();
                       
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ); 
      }

      render() {
        
        const { error, isLoaded, items } = this.state;
        const { classes } = this.props; 

        const listItems = items.map((ad) =>
        <Items key={ad.id} value={this.props} adinfo={ad} />);

        console.log(this.state);

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <List className={classes.root}>
          {listItems}
            </List>
          );
        }
      }
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
  
