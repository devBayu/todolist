import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
  }

  componentDidMount = async () => {}

  render() {
    return (
       <div>
        <button>+</button>
        <h1>{this.state.value}</h1>
        <button>-</button>
       </div>
    );
  }
}

export default App;