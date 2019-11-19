import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './Header';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  const classes = useStyles();
  return (
    <>
      <Header title='Enter User Details' />
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          nextStep();
        }}
      >
        <Form className={classes.form}>
          <Field
            name='firstName'
            label='First Name'
            margin='normal'
            as={TextField}
          />
          <Field
            name='lastName'
            label='Last Name'
            margin='normal'
            as={TextField}
          />
          <Field
            type='email'
            name='email'
            label='Email'
            margin='normal'
            as={TextField}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Continue
          </Button>
        </Form>
      </Formik>
    </>
  );
};

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
