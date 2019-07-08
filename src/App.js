import React from 'react';
import image from './us-two.jpg';

const onSubmit = e => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log([...data]);
};

function Form({ name, number }) {
  return (
    <form className="futura" onSubmit={onSubmit}>
      <div className="input-group">
        <label htmlFor="form-names">Names</label>
        <input
          type="text"
          id="form-names"
          name="names"
          defaultValue={name}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="form-number-guests">Number of guests</label>
        <input
          type="form-number-guests"
          id="number"
          name="guests"
          defaultValue={number}
          min="0"
          max={number + 2}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="form-comments">Other comments</label>
        <textarea
          id="form-comments"
          name="comments"
          rows="5"
          placeholder="e.g. “I would prefer if the food is vegetarian and the venue is wheelchair accessible.”"
        />
      </div>

      <fieldset className="inline-radio">
        <legend>RSVP</legend>
        <div className="inner">
          <div>
            <input
              className="visibly-hidden"
              required
              type="radio"
              name="rsvp"
              id="form-rsvp-yes"
              value="yes"
            />
            <label htmlFor="form-rsvp-yes">Will come</label>
          </div>
          <hr />
          <div>
            <input
              className="visibly-hidden"
              required
              type="radio"
              name="rsvp"
              id="form-rsvp-maybe"
              value="maybe"
            />
            <label htmlFor="form-rsvp-maybe">Might come</label>
          </div>
          <hr />
          <div>
            <input
              className="visibly-hidden"
              required
              type="radio"
              name="rsvp"
              id="form-rsvp-no"
              value="no"
            />
            <label htmlFor="form-rsvp-no">Won’t come</label>
          </div>
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
      <hr className="flourish" />
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
