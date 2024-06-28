import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.responsiveSize.size10,
    // paddingVertical: Theme.responsiveSize.size70,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    marginTop: Theme.responsiveSize.size10,
    height: Theme.responsiveSize.size210,
  },
  innerContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: Theme.responsiveSize.size15,
    
  },
  image: {
    width: Theme.responsiveSize.size60,
    height: Theme.responsiveSize.size60,
  },
  title: {
    fontSize: Theme.responsiveSize.size16,
    fontWeight: '700',
    color: Theme.colors.black,
  },
});

export default styles;
