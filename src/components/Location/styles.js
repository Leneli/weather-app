import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalingUtils';
import { COLOR_BLACK, COLOR_WHITE } from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR_WHITE,
    borderRadius: 4,
    paddingHorizontal: scale(16),
    paddingVertical: scale(14),
    elevation: 8,
    shadowColor: COLOR_BLACK,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },

  input: {
    flex: 1,
    fontSize: scale(15),
    fontFamily: 'Lato',
    color: COLOR_BLACK,
  },
});

export { styles };
