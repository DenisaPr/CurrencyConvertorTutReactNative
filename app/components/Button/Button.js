import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import color from 'color';

import styles from './style';

const Button = (props) => {
  const { text, onPress } = props;

  const underlayColor = color(styles.$buttonBackgroundColor).darken(
    styles.$buttonBackgroundModifier,
  );

  return (
    <TouchableOpacity underlayColor={underlayColor} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.imageButton}
          source={require('../../images/icon.png')}
          resizeMode="contain"
        />
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
