import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotesView from 'views/NotesView/NotesView';
import NewNoteView from 'views/NewNoteView/NewNoteView';
import BoardView from 'views/BoardView/BoardView';
import styled from 'styled-components';
import Nav from 'components/organic/Nav/Nav.js';

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
        </Switch>
      </StyledWrapper>
      <Nav />
    </>
  );
};

export default AuthPage;
