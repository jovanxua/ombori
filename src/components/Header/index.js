import React, { PureComponent } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>
          { this.props.title }
        </Text>
      </View>
    );
  }
}

export default Header;
