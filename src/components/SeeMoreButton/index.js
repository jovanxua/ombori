import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class SeeMoreButton extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
        <View style={styles.contLabel}>
          <Text style={styles.txtLabel}>
              See More
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SeeMoreButton;

