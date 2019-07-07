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
          placeholder="e.g. I would prefer if the food is vegetarian and the venue is wheelchair accessible"
        />
      </div>
      <div className="input-group">
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}

function App({ name, number }) {
  return (
    <div className="App">
      <h1 className="header futura">Abi &amp; Haroen are getting married</h1>
      <img src={image} alt="us together, looking amazing" className="border" />
      <p className="script subtitle">{name}</p>
      <p className="futura">You are invited</p>
      <p>
        The date and venue are not yet decided, but we know it will be around
        the beginning of August 2021, and somewhere in France so all of you will
        have to travel a bit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste saepe,
        temporibus unde quia totam? Ratione sapiente, aut rem consectetur
        recusandae molestias molestiae, consequatur labore, quibusdam enim nemo
        ut sunt!
      </p>
      <Form name={name} number={number} />
    </div>
  );
}

export default App;
