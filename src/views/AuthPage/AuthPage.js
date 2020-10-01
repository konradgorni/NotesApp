import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotesView from 'views/NotesView/NotesView';
import NewNoteView from 'views/NewNoteView/NewNoteView';
import BoardView from 'views/BoardView/BoardView';

const AuthPage = () => {
  return (
    <>
      <Switch>
        <Route path="/authpagehome/boardview" component={BoardView} />
        <Route path="/authpagehome/notesview" component={NewNoteView} />
      </Switch>
    </>
  );
};

export default AuthPage;
