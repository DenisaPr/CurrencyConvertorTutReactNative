import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ checkMark, visible }) => {
  const iconStyle = [styles.icon];

  if (visible) {
    iconStyle.push(styles.iconVisible);
  }

  return (
    <View style={iconStyle}>
      {checkMark ? (
        <Image
          resizeMode="contain"
          style={styles.checkIcon}
          source={require('../../images/check.png')}
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  checkMark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Icon;
