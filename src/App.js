import React from 'react';
import image from './us-two.jpg';

function Form({ name, number }) {
  return (
    <form className="futura">
      <div className="input-group">
        <label htmlFor="name">Names</label>
        <input type="text" id="name" name="name" defaultValue={name} required />
      </div>
      <div className="input-group">
        <label htmlFor="number">Number of guests</label>
        <input
          type="number"
          id="number"
          name="number"
          defaultValue={number}
          min="0"
          max={number + 2}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="comments">Other comments</label>
        <textarea
          id="comments"
          name="comments"
          rows="5"
          placeholder="e.g. “I would prefer if the food is vegetarian and the venue is wheelchair accessible.”"
        />
      </div>

      <fieldset className="inline-radio">
        <legend>RSVP</legend>
        <div className="inner">
          <input required type="radio" name="rsvp" id="yes" />
          <label htmlFor="yes">Will come</label>
          <hr />
          <input required type="radio" name="rsvp" id="maybe" />
          <label htmlFor="maybe">Might come</label>
          <hr />
          <input required type="radio" name="rsvp" id="no" />
          <label htmlFor="no">Won’t come</label>
        </div>
      </fieldset>

      <div className="input-group">
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}

function App({ name, number }) {
  return (
    <div className="App">
      <h1 className="futura">You are invited</h1>
      <p className="script subtitle">{name}</p>
      <p className="futura">to the wedding of</p>
      <p className="subtitle script">Abi &amp; Haroen</p>
      <img src={image} alt="us together, looking amazing" className="border" />
      <p className="futura">Early August</p>
      <p className="futura medium">2021</p>
      <hr />
      <p>
        Of course it's still too early now to decide on an exact date or venue,
        but we would love to have you attend! We know it will be around the
        beginning of August 2021, and somewhere in France so all of you will
        have to travel a bit.
      </p>
      <Form name={name} number={number} />
    </div>
  );
}

export default App;
