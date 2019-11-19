import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './Header';
import { Button } from '@material-ui/core';
import * as yup from 'yup';

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

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('First Name is required')
    .max(20),
  lastName: yup
    .string()
    .required('Last Name is required')
    .max(20),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
});

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
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <Field
              name='firstName'
              label='First Name *'
              margin='normal'
              as={TextField}
              error={touched.firstName && errors.firstName}
              helperText={touched.firstName && errors.firstName}
            />
            <Field
              name='lastName'
              label='Last Name *'
              margin='normal'
              as={TextField}
              error={touched.lastName && errors.lastName}
              helperText={touched.lastName && errors.lastName}
            />
            <Field
              type='email'
              name='email'
              label='Email *'
              margin='normal'
              as={TextField}
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
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
        )}
      </Formik>
    </>
  );
};

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
