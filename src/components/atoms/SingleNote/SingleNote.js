import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams,useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button';
import { newArrayWithoutDeletedElement,notesList } from 'data/slices/notesSlice';
import firebase from 'firebase';
import { db } from 'data/firebase/firebase';
import { user } from 'data/slices/userInfoSlice';
import { StyledWrapper, ButtonsWrapper } from './SingleNote.css';

const SingleNote = () => {
  const [note, setNote] = useState({});
  const notes = useSelector(notesList);
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const userID = useSelector(user);

  useEffect(() => {
    const currentNote = notes.filter((not) => not.id === id);
    setNote(currentNote[0]);
  }, []);

  const deleteNote = () => {
    const newNotesList = notes.filter((not) => not.id !== id);
    dispatch(newArrayWithoutDeletedElement(newNotesList));

    const docRef = db.collection('users').doc(userID);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          db.collection('users').doc(userID).update({
            notes: newNotesList,
          });
        }
      })

      .catch((error) => {
        console.log('Error getting document:', error);
      });

    return history.push('/authpagehome/notesview');
  };

  return (
    <StyledWrapper>
      <h2>{note.title}</h2>
      <p className="content">{note.content}</p>
      <p className="data">{note.date}</p>
      <ButtonsWrapper>
        <Button btn name="DELETE" onClick={deleteNote} />

        <Button path="/authpagehome/notesview" name="BACK" />
      </ButtonsWrapper>
    </StyledWrapper>
  );
};

export default SingleNote;
