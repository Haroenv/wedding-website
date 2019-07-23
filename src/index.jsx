import React from 'react';
import ReactDOM from 'react-dom';
import Rsvp from './Rsvp';
import './index.css';
import * as Reach from '@reach/router';

/**
 * @type React.FunctionComponent<Reach.RouteComponentProps>
 */
const Index = () => (
  <div className="vertical-center">
    <h1 className="futura">Abi &amp; Haroen are getting married!</h1>
    <p>More info soon</p>
  </div>
);

ReactDOM.render(
  <Reach.Router id="reach-root">
    <Index path="/" default />
    <Rsvp path="/rsvp" />
  </Reach.Router>,
  document.getElementById('root')
);
