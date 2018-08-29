import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  Keyboard,
  Animated,
} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeConainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardShow,
    );

    this.keyboardHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardHide,
    );
  }

  componentWillUnmount() {
    this.keyboardHideListener.remove();
    this.keyboardShowListener.remove();
  }

  keyboardShow = () => {
    // Animated.timing(this.containerImageWidth, {
    //   toValue: styles.$smallContainerSize,
    //   duration: ANIMATION_DURATION,
    // }).start();

    Animated.timing(this.imageWidth, {
      toValue: styles.$smallImageSize,
      duration: ANIMATION_DURATION,
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.imageWidth, {
      toValue: styles.$largeImageSize,
      duration: ANIMATION_DURATION,
    }).start();
  };

  render() {
    // const containerImageStyle = [
    //   styles.logoBackgroundImage,
    //   {
    //     width: this.containerImageWidth,
    //     height: this.containerImageWidth,
    //   },
    // ];
    const imageStyle = [styles.logoImage, { width: this.imageWidth }];

    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={styles.logoBackgroundImage}
          source={require('../../images/background.png')}
        >
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('../../images/logo.png')}
          />
        </ImageBackground>

        <Text style={styles.logoText}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
