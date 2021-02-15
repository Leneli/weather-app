import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../constants/colors';
import { scale } from '../../helpers/scalingUtils';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: scale(16),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

const stylesItem = StyleSheet.create({
  wrapper: {
    width: '48%',
    paddingVertical: scale(16),
  },

  title: {
    fontSize: scale(15),
    lineHeight: scale(22),
    fontFamily: 'Lato',
    color: COLOR_WHITE,
    opacity: 0.6,
  },

  value: {
    fontSize: scale(18),
    lineHeight: scale(26),
    fontFamily: 'Lato',
    color: COLOR_WHITE,
  },
});

export { styles, stylesItem };
