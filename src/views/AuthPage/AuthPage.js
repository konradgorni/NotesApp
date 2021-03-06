import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotesView from 'views/NotesView/NotesView';
import NewNoteView from 'views/NewNoteView/NewNoteView';
import BoardView from 'views/BoardView/BoardView';
import styled from 'styled-components';
import SingleNote from 'components/atoms/SingleNote/SingleNote';

const StyledWrapper = styled.div`
  height: 90vh;
  width: 100%;
`;

const AuthPage = () => {
  return (
    <>
      <StyledWrapper>
        <Switch>
          <Route path="/authpagehome/boardview" component={BoardView} />
          <Route path="/authpagehome/notesview" component={NotesView} />
          <Route path="/authpagehome/newnoteview" component={NewNoteView} />
          <Route path="/authpagehome/note/:id" component={SingleNote} />
        </Switch>
      </StyledWrapper>
    </>
  );
};

export default AuthPage;
