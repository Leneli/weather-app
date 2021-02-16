import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WeatherContext } from '../../context/weatherContext';
import { WeatherSVG } from './WeatherSVG';
import { styles } from './styles';

const Temperature = () => {
  const { temperature, weatherIcon, weatherDescription } = useContext(WeatherContext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={[styles.box, styles.boxCenter]}>
          <WeatherSVG type={weatherIcon} />
        </View>
        <View style={styles.box}>
          <Text style={styles.temperature}>{temperature}º</Text>
        </View>
      </View>

      <Text style={styles.description}>{weatherDescription}</Text>
    </View>
  );
};

export default Temperature;
