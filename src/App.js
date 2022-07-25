import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Jusak',
        age: '27',
        gender: 'Laki - Laki',
      }
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
        <h1>Nama : {this.state.person.name}</h1>
        <h1>Age : {this.state.person.age}</h1>
        <h1>Gender : {this.state.person.gender}</h1>

        <button onClick={() => this.editData()}>
          Ubah Data
        </button>
       </div>
    );
  }
}

export default App;