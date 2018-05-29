import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CustomCard extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const strFirstName = this.props.data.first_name;
    const strLastName = this.props.data.last_name;
    const strFullName = strFirstName.concat(' ', strLastName);
    const strImgUrl = this.props.data.avatar;

    return (
      <View style={styles.container}>
        <View style={styles.contLeft}>
          <View style={styles.placeholderImg}>
            <Image
              style={styles.placeholderImg}
              source={{ uri: strImgUrl }}
            />
          </View>
        </View>
        <View style={styles.contRight}>
          <Text style={styles.txtTitle}>
            { strFullName }
          </Text>
        </View>
      </View>
    );
  }
}

export default CustomCard;
