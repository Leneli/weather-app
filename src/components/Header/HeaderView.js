import React, { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { TEMPERATURE_UNITS } from '../../constants/temperatureUnits';
import { WeatherContext } from '../../context/weatherContext';
import { LocationSVG } from '../SVG';
import { Switch } from '../Switch';
import { stylesView as styles } from './styles';

const propTypes = {
  onShowSearch: PropTypes.func,
  onGeo: PropTypes.func,
};

const defaultProps = {
  onShowSearch: () => {},
  onGeo: () => {},
};

const HeaderView = ({ onShowSearch, onGeo }) => {
  const { city, unitTemperature, switchTemperatureUnit } = useContext(WeatherContext);
  const pressedStyles = ({ pressed }) => ({ opacity: pressed ? 0.5 : 1 });

  return (
    <>
      <View style={[styles.box, styles.boxBottom]}>
        <Text style={styles.city} numberOfLines={1}>{city}</Text>

        <View style={styles.box}>
          <Text style={styles.grad}>º</Text>
          <Switch value={unitTemperature} options={TEMPERATURE_UNITS} onPress={switchTemperatureUnit} />
        </View>
      </View>

      <View style={styles.box}>
        <Pressable style={pressedStyles} onPress={onShowSearch}>
          <Text style={styles.button}>Сменить город</Text>
        </Pressable>

        <Pressable style={pressedStyles} onPress={onGeo}>
          <View style={styles.buttonWithIcon}>
            <LocationSVG />
            <Text style={styles.button}>Мое местоположение</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

HeaderView.propTypes = propTypes;
HeaderView.defaultProps = defaultProps;

export { HeaderView };
