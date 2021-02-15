import React from 'react';
import { Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { stylesButton as styles } from './styles';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

const defaultProps = {
  active: false,
  onPress: () => {},
};

const SwitchButton = ({ label, value, active, onPress }) => {
  const buttonStyles = ({ pressed }) => {
    return [
      styles.button,
      active && styles.buttonActive,
      { opacity: pressed ? 0.5 : 1 }
    ];
  };

  const handlePress = () => onPress(value);

  return (
    <Pressable onPress={handlePress} style={buttonStyles}>
      <Text style={[styles.value, active && styles.valueActive]}>{label}</Text>
    </Pressable>
  );
};

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;

export { SwitchButton };
