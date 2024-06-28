import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

export const styles = StyleSheet.create({
  image_wrapper: {
    flex: Theme.responsiveSize.size1,
    backgroundColor: Theme.colors.appColorTutor,
  },
  image: {
    resizeMode: 'contain',
    width: '80%',
  },
  loginContainer: {
    flex: Theme.responsiveSize.size1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  padding: {
    flex: 1,
    alignItems: 'center',
    marginTop: Theme.responsiveSize.size10,
    rowGap: Theme.responsiveSize.size20,
  },
  errorTextStyle: {
    marginHorizontal: Theme.responsiveSize.size13,
    color: Theme.colors.red_notification,
    fontSize: Theme.responsiveSize.size13,
    alignSelf: 'flex-start',
    marginTop: -Theme.responsiveSize.size19,
  },
});
