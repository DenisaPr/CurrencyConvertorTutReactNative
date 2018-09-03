import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const {
    onPress, buttonText, editable = true, textColor,
  } = props;

  const containerStyles = [styles.container];
  const underlayColor = color(styles.$buttonBackgroundColor).darken(
    styles.$buttonBackgroundModifier,
  );

  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonStyle = [styles.buttonText];
  if (textColor) {
    buttonStyle.push({ color: textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonStyle}>{buttonText}</Text>
      </TouchableHighlight>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

export default InputWithButton;
