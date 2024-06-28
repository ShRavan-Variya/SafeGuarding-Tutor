import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const style = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.responsiveSize.size10,
    paddingVertical: Theme.responsiveSize.size10,
    height: '100%',
  },
});

export default style;
