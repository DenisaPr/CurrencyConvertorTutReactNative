import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  selected = false,
  checkMark = true,
  visible = true,
  customIcon = '',
}) => (
  <TouchableHighlight underlayColor={styles.$underlayColor} onPress={onPress}>
    <View style={styles.listContainer}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkMark={checkMark} visible={visible} /> : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkMark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.string,
};

export default ListItem;
