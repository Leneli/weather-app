import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalingUtils';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: scale(60),
    paddingBottom: scale(16),
    paddingHorizontal: scale(16),
  },
});

export { styles };
