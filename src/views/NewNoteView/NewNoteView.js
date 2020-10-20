import React, { useState } from 'react';
import { HeaderWrapper } from 'components/atoms/HeaderWrapper';
import firebase from 'firebase';
import { Formik, Field } from 'formik';
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
import { useSelector, useDispatch } from 'react-redux';
import { user } from 'data/slices/userInfoSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from 'components/atoms/Notify';
import { fetchNotesFirebase } from 'data/slices/notesSlice';
import Nav from 'components/organic/Nav/Nav';
import { StyledWrapper } from './NewNoteView.css';

const NewNoteView = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();


  const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Required').min(3, 'Too Short!').max(12,"Too Long"),
    content: Yup.string().min(5, 'Too Short!').required('Required'),
  });
  const userID = useSelector(user);

  const addNewNote = (title, content, important) => {
    const generatorID = () => {
      return Math.random().toString(36).substr(2, 9);
    };

    const docRef = db.collection('users').doc(userID);
    const note = {
      title,
      content,
      date: startDate.toLocaleDateString(),
      important,
      id: generatorID(),
    };
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

      .catch((error) => {
        console.log('Error getting document:', error);
      });
    dispatch(fetchNotesFirebase(note));
 
  };

  return (
    <>
      <HeaderWrapper>New Note</HeaderWrapper>
      <StyledWrapper>
        <Formik
          initialValues={{
            title: '',
            content: '',
            important: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={({ title, content, important },{ setSubmitting, resetForm }) => {
           resetForm({
            title: '',
            content: '',
            important: false,
          });
           addNewNote(title, content, important);
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

              <label className="test" htmlFor="important">
                <Field id="important" type="checkbox" name="important" />
                <p className="checkbox">Important Note</p>
              </label>
              <Button type="Submit" btn name="Add" />
              <ToastContainer />
            </StyledForm>
          )}
        </Formik>
        <Nav />
      </StyledWrapper>
    </>
  );
};

export default NewNoteView;
