import React, { useState } from 'react';
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

export const FormPersonalDetails = ({
  formData,
  setFormData,
  nextStep,
  prevStep
}) => {
  const classes = useStyles();
  const [direction, setDirection] = useState('back');
  return (
    <>
      <Header title='Enter Personal Details' />
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
        }}
      >
        <Form className={classes.form}>
          <Field
            name='occupation'
            label='Occupation'
            margin='normal'
            as={TextField}
          />
          <Field name='city' label='City' margin='normal' as={TextField} />
          <Field name='bio' label='Bio' margin='normal' as={TextField} />
          <div>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => setDirection('back')}
            >
              Back
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => setDirection('forward')}
            >
              Continue
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

FormPersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};
