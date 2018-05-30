import React, { Component } from 'react';
import { View } from 'react-native';
import LoadingScreenAnimation from './animation';

import styles from './styles';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <LoadingScreenAnimation />
      </View>
    );
  }
}

export default LoadingScreen;
