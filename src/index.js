import React, { Component } from 'react';
import Users from './containers/users';
import LoadingScreen from './components/LoadingScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 3000);
  }

  render() {
    const { didMount } = this.state;
    const oView = didMount ? <Users /> : <LoadingScreen />;
    return oView;
  }
}

export default App;
