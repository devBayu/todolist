import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  componentDidMount = async () => {}

  editData = () => {
    const newData = {
      name: 'Andrean',
      age: '30',
      gender: 'Laki - Laki'
    }
    this.setState({ person: newData });
  }

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