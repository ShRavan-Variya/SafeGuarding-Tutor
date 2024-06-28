import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flex: Theme.responsiveSize.size1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.responsiveSize.size10,
    paddingVertical: Theme.responsiveSize.size10,
  },
  incidentContainer: {
    marginTop: Theme.responsiveSize.size10,
    justifyContent: 'space-between',
    height: '94%',
  },
  padding: {
    rowGap: Theme.responsiveSize.size15,
  },
});

export default styles;
