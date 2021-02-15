import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { SwitchButton } from './SwitchButton';
import { styles } from './styles';

const propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  onPress: PropTypes.func,
};

const defaultProps = {
  value: '',
  options: [],
  onPress: () => {},
};

const Switch = ({ value, options, onPress }) => {
  return (
    <View style={styles.wrapper}>
      {options.map((item, index) => (
        <SwitchButton
          key={`btn_${index}`}
          active={item.value === value}
          label={item.label}
          value={item.value}
          onPress={onPress}/>
      ))}
    </View>
  );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
