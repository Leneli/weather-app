import React, { useContext } from 'react';
import { View } from 'react-native';
import { WeatherContext } from '../../context/weatherContext';
import { WeatherInfoItem } from './WeatherInfoItem';
import { styles } from './styles';

const WeatherInfo = () => {
  const { weatherDetails } = useContext(WeatherContext);

  return (
    <View style={styles.wrapper}>
      {weatherDetails.map((detail, i) => <WeatherInfoItem key={`el_${i}`} { ...detail } />)}
    </View>
  );
};

export default WeatherInfo;
