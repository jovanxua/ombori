import React, { Component } from 'react';
import {
  Animated,
  View,
} from 'react-native';

import styles from './styles';

const minSize = 60;
const maxSize = 150;
const minOpacity = 0;
const maxOpacity = 0.1;
const minBorderRad = 120;
const maxBorderRad = 300;
const gapMainFactor = 0.6;
const openDuration = 800;
const closeDuration = 1500;
const finalDuration = 800;

class LoadingScreenAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnimOuter: new Animated.Value(minOpacity),
      fadeAnimInner: new Animated.Value(minOpacity),
      sizeAnimOuter: new Animated.Value(minSize),
      sizeAnimInner: new Animated.Value(minSize),
      borderRadAnimOuter: new Animated.Value(minBorderRad),
      borderRadAnimInner: new Animated.Value(minBorderRad),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  calcIntialVal = (min, max) =>
    min + ((max - min) * gapMainFactor);

  startAnimation = () => {
    Animated.loop(Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.fadeAnimOuter, {
          toValue: maxOpacity,
          duration: openDuration,
        }),
        Animated.timing(this.state.sizeAnimOuter, {
          toValue: this.calcIntialVal(minSize, maxSize),
          duration: openDuration,
        }),
        Animated.timing(this.state.borderRadAnimOuter, {
          toValue: this.calcIntialVal(minBorderRad, maxBorderRad),
          duration: openDuration,
        }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.fadeAnimInner, {
          toValue: maxOpacity,
          duration: openDuration,
        }),
        Animated.timing(this.state.sizeAnimInner, {
          toValue: this.calcIntialVal(minSize, maxSize),
          duration: openDuration,
        }),
        Animated.timing(this.state.borderRadAnimInner, {
          toValue: this.calcIntialVal(minBorderRad, maxBorderRad),
          duration: openDuration,
        }),
        Animated.timing(this.state.sizeAnimOuter, {
          toValue: maxSize,
          duration: closeDuration,
        }),
        Animated.timing(this.state.fadeAnimOuter, {
          toValue: minOpacity,
          duration: closeDuration,
        }),
        Animated.timing(this.state.borderRadAnimOuter, {
          toValue: maxBorderRad,
          duration: closeDuration,
        }),
      ]),
      Animated.parallel([
        Animated.timing(this.state.sizeAnimInner, {
          toValue: maxSize,
          duration: finalDuration,
        }),
        Animated.timing(this.state.fadeAnimInner, {
          toValue: minOpacity,
          duration: finalDuration,
        }),
        Animated.timing(this.state.borderRadAnimInner, {
          toValue: maxBorderRad,
          duration: finalDuration,
        }),
      ]),
    ])).start();
  }

  render() {
    const {
      fadeAnimOuter,
      fadeAnimInner,
      sizeAnimOuter,
      sizeAnimInner,
      borderRadAnimOuter,
      borderRadAnimInner,
    } = this.state;

    return (
      <View style={styles.contPlaceholder}>
        <View style={styles.contCenter} />
        <Animated.View
          style={[
            styles.contInner,
            {
              opacity: fadeAnimInner,
              width: sizeAnimInner,
              height: sizeAnimInner,
              borderRadius: borderRadAnimInner,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.contOuter,
            {
              opacity: fadeAnimOuter,
              width: sizeAnimOuter,
              height: sizeAnimOuter,
              borderRadius: borderRadAnimOuter,
            },
          ]}
        />
      </View>
    );
  }
}

export default LoadingScreenAnimation;
