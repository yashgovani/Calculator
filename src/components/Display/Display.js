import React from 'react';
import './Display.css';

const display = (props) => (
  <div className="container">
    <div>
      <input className="Display" value={props.value} />
      <div>{props.expression}</div>
    </div>
  </div>
);

export default display;
