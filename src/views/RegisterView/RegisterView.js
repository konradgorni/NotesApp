import React from 'react';
import Button from 'components/atoms/Button';
import { auth } from 'data/firebase/firebase';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import HeaderText from 'components/atoms/Title';
import { StyledField, ErrorMessage, StyledForm } from 'components/atoms/FormikComponents';
import { setAuth, setID } from 'data/slices/userInfoSlice';
import { StyledWrapper } from './RegisterView.css';

const RegisterView = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .required('Required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters,One Uppercase, One Lowercase, One Number and one special case Character',
      ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const singup = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
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
      <HeaderText>Register</HeaderText>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={({ email, password }) => {
          singup(email, password);
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
            <StyledField
              name="passwordConfirmation"
              type="password"
              placeholder="confirm password"
            />
            {errors.passwordConfirmation && touched.password ? (
              <ErrorMessage>{errors.passwordConfirmation}</ErrorMessage>
            ) : null}

            <Button type="Submit" btn name="Register" />
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default RegisterView;
