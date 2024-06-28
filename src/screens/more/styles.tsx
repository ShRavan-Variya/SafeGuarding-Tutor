import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  profileContainer: {
    flex: Theme.responsiveSize.size1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.responsiveSize.size10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    alignItems: 'center',
    rowGap: Theme.responsiveSize.size5,
  },
  img: {
    width: Theme.responsiveSize.size118,
    height: Theme.responsiveSize.size118,
  },
  nameText: {
    fontSize: Theme.responsiveSize.size16,
    color: Theme.colors.textColor29,
    fontWeight: '700',
  },
  inputContainer: {
    marginTop: Theme.responsiveSize.size20,
    rowGap: Theme.responsiveSize.size15,
  },
  trainingContainer: {
    flexDirection: 'row',
    borderColor: Theme.colors.inputBackground,
    borderWidth: Theme.responsiveSize.size1,
    height: Theme.responsiveSize.size115,
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.responsiveSize.size8,
    padding: Theme.responsiveSize.size15,
  },
  trainingName: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.appColorTutor,
  },
  description: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '400',
    color: Theme.colors.textColor29,
    paddingRight: Theme.responsiveSize.size10,
    marginTop: Theme.responsiveSize.size10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    gap: Theme.responsiveSize.size10,
    padding: Theme.responsiveSize.size10,
    borderBottomWidth: Theme.responsiveSize.size1,
    borderColor: Theme.colors.inputBackground,
    height: Theme.responsiveSize.size85,
  },
  notificationTitle: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.textColor29,
    // width:'90%',
    marginRight:Theme.responsiveSize.size20,
  },
});

export default styles;
