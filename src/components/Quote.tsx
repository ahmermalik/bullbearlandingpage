import React from 'react';
import './Quote.scss';

const Quote = () => {
  return (
    <blockquote className="quote">
      <p>"The strength of the team is each individual member. The strength of each member is the team."</p>
      <cite>- Pepe Jackson</cite>
    </blockquote>
  );
};

export default Quote;