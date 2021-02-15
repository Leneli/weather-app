import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLOR_WHITE_40 } from '../../constants/colors';
import { styles } from './styles';

const Preloader = () => (
  <View style={styles.wrapper}>
    <ActivityIndicator color={COLOR_WHITE_40} size="large" />
  </View>
);

export default Preloader;
