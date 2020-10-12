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
import { useSelector } from 'react-redux';
import { user } from 'data/slices/userInfoSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from 'components/atoms/Notify';

const NewNoteView = () => {
  const [startDate, setStartDate] = useState(new Date());

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Required').min(3, 'Too Short!'),
    content: Yup.string().min(5, 'Too Short!').required('Required'),
  });
  // const userID = useSelector(user);
  const userID = 'ptj0FXu5raS7FekOiAwL0uNRR5s1';
  const addNewNote = (title, content) => {
    const docRef = db.collection('users').doc(userID);
    const note = { title, content, date: startDate };
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          db.collection('users')
            .doc(userID)
            .update({
              notes: firebase.firestore.FieldValue.arrayUnion(note),
            });
        } else {
          db.collection('users')
            .doc(userID)
            .set({
              notes: [note],
            });
        }
        notify('add');
      })

      .catch(function (error) {
        console.log('Error getting document:', error);
      });
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
          onSubmit={({ title, content }, { setSubmitting, resetForm }) => {
            addNewNote(title, content);
            resetForm();
            setSubmitting(false);
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
              <ToastContainer />
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    </>
  );
};

export default NewNoteView;
