import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class PostAd extends React.Component {
  state = {
    open: false,
    title: '',
    text: '',
    category: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleOk = () => {
    fetch('https://localhost:5001/api/ads', {
    method: 'POST',
    mode: "cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: this.state.title,
        text: this.state.text,
        category: this.state.category,
        })
    })
  };

  handleInputChange = (event) => {

    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>new ad posting!</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Post new add</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add some info to your ad!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={this.state.title}
              onChange={this.handleInputChange}
            />
            <TextField
              margin="dense"
              id="text"
              label="Text"
              type="text"
              fullWidth
              value={this.state.text}
              onChange={this.handleInputChange} 
            />
            <TextField
              margin="dense"
              id="category"
              label="Category"
              type="text"
              fullWidth
              value={this.state.category}
              onChange={this.handleInputChange} 
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOk} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}