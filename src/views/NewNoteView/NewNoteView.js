import React, { useState } from 'react';
import { StyledWrapper } from './NewNoteView.css';
import { HeaderWrapper } from 'components/atoms/HeaderWrapper';
import firebase from 'firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { db } from 'data/firebase/firebase';
import {
  StyledFieldNote,
  ErrorMessage,
  StyledForm,
  StyledFieldContent,
  StyledPicker,
} from 'components/atoms/FormikComponents';
import Button from 'components/atoms/Button';

import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const NewNoteView = () => {
  const [startDate, setStartDate] = useState(new Date());

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Required').min(3, 'Too Short!'),
    content: Yup.string().min(5, 'Too Short!').required('Required'),
  });

  const addNewNote = (title, content) => {
    alert(title);
    alert(content);
    alert(startDate);
  };

  return (
    <>
      <HeaderWrapper>New Note</HeaderWrapper>
      <StyledWrapper>
        <Formik
          initialValues={{
            title: '',
            content: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={({ title, content }) => {
            addNewNote(title, content);
          }}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <StyledFieldNote name="title" type="text" placeholder="Title" />
              {errors.title && touched.title ? <ErrorMessage>{errors.title}</ErrorMessage> : null}
              <StyledFieldContent
                name="content"
                type="text"
                placeholder="Your note"
                component="textarea"
              />
              {errors.content && touched.content ? (
                <ErrorMessage>{errors.content}</ErrorMessage>
              ) : null}
              <StyledPicker
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <Button type="Submit" btn name="Add" />
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    </>
  );
};

export default NewNoteView;
