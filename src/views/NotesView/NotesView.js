import React from 'react';
import { useSelector } from 'react-redux';
import Nav from 'components/organic/Nav/Nav';
import { HeaderWrapper } from 'components/atoms/HeaderWrapper';
import { useHistory } from 'react-router-dom';
import { notesList } from 'data/slices/notesSlice';
import { StyledWrapper, StyledContainer, StyledNote } from './NotesView.css';



const NotesView = () => {
  const notes = useSelector(notesList);
  const history = useHistory();

  return (
    <StyledWrapper>
      <HeaderWrapper>Your Notes</HeaderWrapper>
      <StyledContainer>
        {notes.map((note) => (
          <StyledNote onClick={() => history.push(`/authpagehome/note/${note.id}`)} key={note.id}>
            {`${note.title.slice(0,15)}...`}
          </StyledNote>
        ))}
      </StyledContainer>
      <Nav />
    </StyledWrapper>
  );
};

export default NotesView;
