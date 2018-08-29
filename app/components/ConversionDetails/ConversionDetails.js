import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const ConversionDetails = ({
  curencyConversionFrom,
  curencyConversionTo,
  rateConversion,
  dateConversion,
}) => (
  <Text style={styles.text}>
    {`1 ${curencyConversionFrom} = ${rateConversion} ${curencyConversionTo} as ${moment(
      dateConversion,
    ).format('MMMM D, YYYY')}`}
  </Text>
);

ConversionDetails.propTypes = {
  curencyConversionFrom: PropTypes.string,
  curencyConversionTo: PropTypes.string,
  rateConversion: PropTypes.number,
  dateConversion: PropTypes.object,
};

export default ConversionDetails;
