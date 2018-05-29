import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';

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
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }
}

export default LoadingScreen;
