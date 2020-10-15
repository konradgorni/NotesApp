import React from 'react';
import { useSelector } from 'react-redux';
// import { showName, selectTasks } from 'data/testSlice';
import Nav from 'components/organic/Nav/Nav';
import { HeaderWrapper } from 'components/atoms/HeaderWrapper';
import { StyledWrapper, StyledContainer, StyledNote } from './NotesView.css';
import { notesList } from 'data/slices/notesSlice';
import { useHistory } from 'react-router-dom';

const NotesView = () => {
  const notes = useSelector(notesList);
  const history = useHistory();

  return (
    <StyledWrapper>
      <HeaderWrapper>Your Notes</HeaderWrapper>
      <StyledContainer>
        {notes.map((note) => (
          <StyledNote onClick={() => history.push(`/authpagehome/note/${note.id}`)} key={note.id}>
            {note.title}
          </StyledNote>
        ))}
      </StyledContainer>
      <Nav />
    </StyledWrapper>
  );
};

export default NotesView;

//  const name = useSelector(showName);
//  const tasks = useSelector((state) => state.tasks.zadania);

//  const tasks = useSelector((state) => state);

//  console.log(tasks);

// return <div>{ {tasks.map((task) => (
//       <p>{task}</p>
//     ))} }</div>;
