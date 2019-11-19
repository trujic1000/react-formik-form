import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Header } from './Header';

const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export const Confirm = ({ formData, prevStep, nextStep }) => {
  const classes = useStyles();
  const { firstName, lastName, email, occupation, city, bio } = formData;
  return (
    <>
      <Header title='Confirm User Data' />
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary='First Name'
              secondary={firstName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Last Name'
              secondary={lastName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Email'
              secondary={email}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Occupation'
              secondary={occupation}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='City'
              secondary={city}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Bio'
              secondary={bio}
              className={classes.textCenter}
            />
          </ListItem>
        </List>
        <div className={classes.textCenter}>
          <Button
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={() => prevStep()}
          >
            Back
          </Button>

          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => nextStep()}
          >
            Confirm & Continue
          </Button>
        </div>
      </div>
    </>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
