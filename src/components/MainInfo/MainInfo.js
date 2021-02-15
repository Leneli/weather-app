import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WeatherContext } from '../../context/weatherContext';
import { MainInfoPicture } from './MainInfoPicture';
import { styles } from './styles';

const MainInfo = () => {
  const { weatherMain = {} } = useContext(WeatherContext);
  const { icon, temperature, description } = weatherMain;

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={[styles.box, styles.boxCenter]}>
          <MainInfoPicture type={icon} />
        </View>
        <View style={styles.box}>
          <Text style={styles.temperature}>{temperature}º</Text>
        </View>
      </View>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default MainInfo;
