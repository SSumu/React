// import React from 'react'

const Unit = ({ image, name, city, position }) => (
  /*{
  return*/ <div className="unit__container">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>
      <span>{city}</span>
      <span>{position}</span>
    </p>
  </div>
); /*;
};*/

// As there is only a return, we can take a direct return.
// We can take a direct return in a component if there is only a return.
// In a direct return, component is covered from brackets.

export default Unit;

// By typing rafce that we can create arrow function.
