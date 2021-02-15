import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalingUtils';
import { COLOR_WHITE, COLOR_WHITE_20, COLOR_WHITE_40 } from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR_WHITE_40,
    overflow: 'hidden',
  },
});

const stylesButton = StyleSheet.create({
  button: {
    paddingHorizontal: scale(14),
    paddingVertical: scale(4),
  },

  buttonActive: {
    backgroundColor: COLOR_WHITE_20,
  },

  value: {
    fontSize: scale(18),
    lineHeight: scale(22),
    fontFamily: 'Lato',
    color: COLOR_WHITE_40,
  },

  valueActive: {
    color: COLOR_WHITE,
  },
});

export { styles, stylesButton };
