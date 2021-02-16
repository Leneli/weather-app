import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalingUtils';
import { COLOR_WHITE } from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },

  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  boxBottom: {
    marginBottom: scale(10),
  },

  city: {
    flex: 1,
    fontSize: scale(30),
    lineHeight: scale(36),
    fontFamily: 'Lato',
    color: COLOR_WHITE,
  },

  grad: {
    marginRight: scale(9),
    fontSize: scale(18),
    lineHeight: scale(23),
    fontFamily: 'Lato',
    color: COLOR_WHITE,
    opacity: 0.4,
  },
});

export { styles };
