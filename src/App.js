import React from 'react';
import Header from './components/Header/Header';
import Calculator from './container/Calculator/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'REACT CALCULATOR',
    };
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
