import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { stylesItem as styles } from './styles';

const propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const WeatherInfoItem = ({ title, value }) => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

WeatherInfoItem.propTypes = propTypes;

export { WeatherInfoItem };
