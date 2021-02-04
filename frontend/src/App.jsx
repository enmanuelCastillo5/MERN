import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NotesList from './components/NotesList';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={NotesList} />
        <Route path='/edit/:id' component={CreateNote} />
        <Route path='/create' component={CreateNote} />
        <Route path='/user' component={CreateUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
