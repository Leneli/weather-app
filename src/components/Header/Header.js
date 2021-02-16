import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WeatherContext } from '../../context/weatherContext';
import { LocationSVG } from '../SVG';
import { Switch } from '../Switch';
import { LButton } from '../LButton';
import { TEMPERATURE_UNITS } from '../../constants/temperatureUnits';
import { styles } from './styles';

const Header = () => {
  const { city, unit } = useContext(WeatherContext);

  return (
    <View style={[styles.wrapper]}>
      <View style={[styles.box, styles.boxBottom]}>
        <Text style={styles.city} numberOfLines={1}>{city}</Text>

        <View style={styles.box}>
          <Text style={styles.grad}>º</Text>
          <Switch value={unit} options={TEMPERATURE_UNITS} onPress={() => {}} />
        </View>
      </View>

      <View style={styles.box}>
        <LButton label="Сменить город" onPress={() => {}} />
        <LButton label="Мое местоположение" Icon={<LocationSVG />} onPress={() => {}} />
      </View>
    </View>
  );
};

export default Header;
