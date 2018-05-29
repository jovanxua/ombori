import React, { Component } from 'react';
import Users from './containers/users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Users />
    );
  }
}

export default App;
