import React, { useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import { WeatherContext } from '../../context/weatherContext';
import { styles } from './styles';

const propTypes = {
  visible: PropTypes.bool,
  onSearch: PropTypes.func,
};

const defaultProps = {
  visible: false,
  onSearch: () => {},
};

const Location = ({ visible, onSearch }) => {
  const { city, changeCity } = useContext(WeatherContext);

  const [value, onChangeText] = React.useState(city);

  const handleChangeLocation = () => {
    changeCity(value);
    onSearch(value);
  };

  if (!visible) return null;

  return (
    <View style={styles.wrapper}>
      <TextInput value={value} onChangeText={text => onChangeText(text)} style={styles.input} />
      <Button title={'OK'} onPress={handleChangeLocation} />
    </View>
  );
};

Location.propTypes = propTypes;
Location.defaultProps = defaultProps;

export default Location;
