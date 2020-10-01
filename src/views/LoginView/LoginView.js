import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth } from 'data/firebase/firebase';
import { firebaseTasks, setName } from 'data/slices/testSlice';
import { fireStoreFetch } from 'helpfulFunctions/fetchFirebaseData';
import { setAuth, setID } from 'data/slices/userInfoSlice';
import { StyledWrapper } from './LoginView.css';
import HeaderText from 'components/atoms/Header.js';
import { StyledField, ErrorMessage, StyledForm } from 'components/atoms/FormikComponents';
import Button from 'components/atoms/Button';

const LoginView = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });

  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        dispatch(setAuth(true));
        dispatch(setID(u.user.uid));
        return history.push('/authpagehome/boardview');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledWrapper>
      <HeaderText>Login</HeaderText>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={({ email, password }) => {
          login(email, password);
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledField name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
            <StyledField name="password" type="password" placeholder="password" />
            {errors.password && touched.password ? (
              <ErrorMessage>{errors.password}</ErrorMessage>
            ) : null}

            <Button type="Submit" btn name="Login" />
            {/* <button type="Submit">aa</button> */}
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default LoginView;
