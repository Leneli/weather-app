import React from 'react';
import { View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
  label: PropTypes.string,
  Icon: PropTypes.node,
  onPress: PropTypes.func,
};

const defaultProps = {
  label: '',
  Icon: null,
  onPress: () => {},
};

const pressedStyles = ({ pressed }) => ({ opacity: pressed ? 0.5 : 1 });

const LButton = ({ label, Icon, onPress }) => (
  <Pressable style={pressedStyles} onPress={onPress}>
    {!!Icon ? (
      <View style={styles.buttonWithIcon}>
        {Icon}
        <Text style={styles.button}>{label}</Text>
      </View>
    ) : (
      <Text style={styles.button}>{label}</Text>
    )}
  </Pressable>
);

LButton.propTypes = propTypes;
LButton.defaultProps = defaultProps;

export default LButton;
