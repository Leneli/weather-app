import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../constants/colors';
import { scale } from '../../helpers/scalingUtils';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(15),
  },

  box: {
    width: '50%',
  },

  boxCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  temperature: {
    fontSize: scale(90),
    fontWeight: '400',
    fontFamily: 'PTSans',
    color: COLOR_WHITE,
  },

  description: {
    fontSize: scale(18),
    fontFamily: 'Lato',
    color: COLOR_WHITE,
    textAlign: 'center',
  },
});

export { styles };
