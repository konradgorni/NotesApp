import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from 'components/atoms/HeaderWrapper';
import Nav from 'components/organic/Nav/Nav';
import { notesList } from 'data/slices/notesSlice';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledWrapper, StyledContainer, StyledNote } from './BoardView.css';


const BoardView = () => {
  const [lastNote, setLastNote] = useState({});
  const [importantListNotes, setImportantNotes] = useState([]);
  const notes = useSelector(notesList);
  const history = useHistory();

  const notesImportantChecker = (list) => {
    const result = list.filter(({ important }) => important === true);
    return result;
  };

  useEffect(() => {
    if (notes) {
      const LastNoteFromArray = notes.slice(-1).pop();
      setLastNote(LastNoteFromArray);
      setImportantNotes(notesImportantChecker(notes));

    }
  }, []);

  return (
    <StyledWrapper>
      <HeaderWrapper>Board</HeaderWrapper>
      <StyledContainer>
        <div className="wrapper">
          <h2>Last Note</h2>
          {lastNote ? (
            <StyledNote onClick={() => history.push(`/authpagehome/note/${lastNote.id}`)}>
              <h2>{lastNote.title}</h2>
              <p>{lastNote.content}</p>
            </StyledNote>
          ) : (
            <StyledNote>
              <h2>You don't have any note</h2>
            </StyledNote>
          )}
        </div>
        <div className="wrapper">
          <h2>Important Notes</h2>
          {importantListNotes.length !== 0 ? importantListNotes.map(note =>(
          <StyledNote key={note.id} onClick={()=>history.push(`/authpagehome/note/${note.id}`) }>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
          </StyledNote>
          )) : (      <StyledNote><h2>You don't have any import note</h2></StyledNote> )}

         
        
        </div>
      </StyledContainer>
      <Nav />
    </StyledWrapper>
  );
};

export default BoardView;
