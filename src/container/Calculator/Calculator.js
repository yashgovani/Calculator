import React from 'react';
import Display from '../../components/Display/Display';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import CalculatorEngine from '../CalculatorEngine/CalculatorEngine';
import Keypad from '../../components/Keypad/Keypad';
import History from '../../components/History/Histroy';
import './Calculator.css';

const calculator = new CalculatorEngine();

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      value: '',
      history: [],
      showHistory: false,
    };
  }

  handleOnAdd = () => {
    calculator.add();
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString(),
    }));
  };

  handleOnClear = () => {
    calculator.clear();

    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString(),
    }));
  };

  handleOnClearAll = () => {
    calculator.clearAll();
    this.setState(() => ({
      expression: calculator.getExpression(),
      history: calculator.getHistory(),
      value: calculator.getValue().toString(),
    }));
  };

  handleOnClearHistory = () => {
    calculator.clearHistory();

    this.setState(() => ({
      history: calculator.getHistory(),
      showHistory: false,
    }));
  };

  handleOnDecimalPoint = () => {
    calculator.inputDecimal();

    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString(),
    }));
  };

  handleOnDelete = () => {
    calculator.delete();
    this.setState(() => ({
      value: calculator.getValue().toString(),
    }));
  };

  handleOnDigit = (number) => {
    calculator.inputDigit(number);
    this.setState(() => ({
      value: calculator.getValue(),
    }));
  };

  handleOnDivide = () => {
    calculator.divide();

    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString(),
    }));
  };

  handleOnEquals = () => {
    calculator.equals();

    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString(),
      history: calculator.getHistory(),
    }));
  };

  handleOnHistorySelected = (index) => {
    calculator.loadHistory(index);

    this.setState((prevState) => ({
      expression: prevState.history[index].expression,
      value: calculator.getValue().toString(),
    }));
  };

  handleOnMultiply = () => {
    calculator.multiply();

    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString(),
    }));
  };

  handleOnSubtract = () => {
    calculator.subtract();

    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString(),
    }));
  };

  handleOnToggleHistory = () => {
    this.setState((prevState) => ({ showHistory: !prevState.showHistory }));
  };

  handleOnToggleSign = () => {
    calculator.toggleSign();

    this.setState(() => ({
      value: calculator.getValue().toString(),
    }));
  };

  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.value} expression={this.state.expression} />
        <ControlPanel
          anyHistory={this.state.history.length > 0}
          onToggleHistory={this.handleOnToggleHistory}
        />
        {!this.state.showHistory && (
          <Keypad
            onDigit={this.handleOnDigit}
            onAdd={this.handleOnAdd}
            onSubtract={this.handleOnSubtract}
            onMultiply={this.handleOnMultiply}
            onDivide={this.handleOnDivide}
            onDecimalPoint={this.handleOnDecimalPoint}
            onEquals={this.handleOnEquals}
            onClear={this.handleOnClear}
            onClearAll={this.handleOnClearAll}
            onDelete={this.handleOnDelete}
            onToggleSign={this.handleOnToggleSign}
          />
        )}
        {this.state.showHistory && (
          <History
            history={this.state.history}
            onClearHistory={this.handleOnClearHistory}
            onSelected={this.handleOnHistorySelected}
          />
        )}
      </div>
    );
  }
}

export default Calculator;
