import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import LoadingScreen from '../LoadingScreen';

class GenericContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.isLoading ? <LoadingScreen /> : this.props.children
        }
      </View>
    );
  }
}

export default GenericContainer;

