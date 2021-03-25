import React from 'react';
import './Keypad.css';

const keypad = (props) => {
  const handleOnDigit = (e) => {
    props.onDigit(e.target.value);
  };

  return (
    <div className="container">
      <div className="Keypad">
        <button className="Button" value="clear-all" onClick={props.onClearAll}>
          CE
        </button>
        <button className="Button" value="clear" onClick={props.onClear}>
          C
        </button>
        <button className="Button" value="backspace" onClick={props.onDelete}>
          DE
        </button>
        <button className="Button" value="/" onClick={props.onDivide}>
          &divide;
        </button>
      </div>

      <div className="Keypad">
        <button className="Button" value="7" onClick={handleOnDigit}>
          7
        </button>
        <button className="Button" value="8" onClick={handleOnDigit}>
          8
        </button>
        <button className="Button" value="9" onClick={handleOnDigit}>
          9
        </button>
        <button className="Button" value="*" onClick={props.onMultiply}>
          &times;
        </button>
      </div>
      <div>
        <button className="Button" value="4" onClick={handleOnDigit}>
          4
        </button>
        <button className="Button" value="5" onClick={handleOnDigit}>
          5
        </button>
        <button className="Button" value="6" onClick={handleOnDigit}>
          6
        </button>
        <button className="Button" value="-" onClick={props.onSubtract}>
          &minus;
        </button>
      </div>
      <div>
        <button className="Button" value="1" onClick={handleOnDigit}>
          1
        </button>
        <button className="Button" value="2" onClick={handleOnDigit}>
          2
        </button>
        <button className="Button" value="3" onClick={handleOnDigit}>
          3
        </button>
        <button className="Button" value="/" onClick={props.onAdd}>
          &#43;
        </button>
      </div>
      <div>
        <button className="Button" value="+-" onClick={props.onToggleSign}>
          &plusmn;
        </button>
        <button className="Button" value="0" onClick={handleOnDigit}>
          0
        </button>
        <button className="Button" value="." onClick={props.onDecimalPoint}>
          .
        </button>
        <button className="Button" value="=" onClick={props.onEquals}>
          =
        </button>
      </div>
    </div>
  );
};

export default keypad;
