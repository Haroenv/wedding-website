import React from 'react';
import ReactDOM from 'react-dom';
import Rsvp from './Rsvp';
import SaveTheDate from './SaveTheDate';
import './index.css';
import * as Reach from '@reach/router';
import Home from './Home';

ReactDOM.render(
  <Reach.Router id="reach-root">
    <Home path="/" default />
    <Rsvp path="/rsvp" />
    <SaveTheDate path="/save-the-date" />
  </Reach.Router>,
  document.getElementById('root')
);
