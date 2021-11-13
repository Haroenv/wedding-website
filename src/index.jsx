import React from 'react';
import ReactDOM from 'react-dom';
import FirstRsvp from './FirstRsvp';
import SaveTheDate from './SaveTheDate';
import Rsvp from './Rsvp';
import './index.css';
import * as Reach from '@reach/router';
import Home from './Home';

ReactDOM.render(
  <Reach.Router id="reach-root">
    <Home path="/" default />
    <FirstRsvp path="/first-rsvp" />
    <SaveTheDate path="/save-the-date" />
    <Rsvp path="/rsvp" />
  </Reach.Router>,
  document.getElementById('root')
);
