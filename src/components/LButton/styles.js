import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalingUtils';
import { COLOR_WHITE } from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    fontSize: scale(15),
    lineHeight: scale(18),
    fontFamily: 'Lato',
    color: COLOR_WHITE,
    opacity: 0.6,
  },

  buttonWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export { styles };
