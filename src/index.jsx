import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import FirstRsvp from './FirstRsvp';
import SaveTheDate from './SaveTheDate';
import Rsvp from './Rsvp';

import './index.css';

ReactDOM.render(
  <ErrorBoundary>
    <Router id="reach-root">
      <Home path="/" default />
      <FirstRsvp path="/first-rsvp" />
      <SaveTheDate path="/save-the-date" />
      <Rsvp path="/rsvp" />
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);
