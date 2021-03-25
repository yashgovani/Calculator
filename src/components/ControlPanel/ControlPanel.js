import React from 'react';
import './ControlPanel.css';

const controlPanel = (props) => (
  <div className="container">
    <button
      className="Button2"
      disabled={!props.anyHistory}
      onClick={props.onToggleHistory}
    >
      Toggle
    </button>
  </div>
);

export default controlPanel;
