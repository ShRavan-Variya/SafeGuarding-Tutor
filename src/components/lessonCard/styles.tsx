import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  constainer: {
    borderColor: Theme.colors.inputBackground,
    borderWidth: Theme.responsiveSize.size1,
    minHeight: Theme.responsiveSize.size160,
    marginVertical: Theme.responsiveSize.size10,
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.responsiveSize.size8,
  },
  innerContainer: {
    width: '100%',
    height: Theme.responsiveSize.size52,
    backgroundColor: Theme.colors.bgColor35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.responsiveSize.size10,
    borderTopRightRadius: Theme.responsiveSize.size6,
    borderTopLeftRadius: Theme.responsiveSize.size6,
  },
  flexRow: {
    flexDirection: 'row',
    gap: Theme.responsiveSize.size8,
    alignItems: 'center',
  },
  pading: {
    padding: Theme.responsiveSize.size10,
    rowGap: Theme.responsiveSize.size12,
  },
  dateText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '400',
    color: Theme.colors.textColor29,
  },
  typeText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '600',
    color: Theme.colors.textColor29,
    backgroundColor: Theme.colors.planned_face,
    paddingVertical: Theme.responsiveSize.size5,
    paddingHorizontal: Theme.responsiveSize.size10,
    borderRadius: Theme.responsiveSize.size15,
  },
  subjectText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '700',
    color: Theme.colors.textColor29,
  },
  messageText: {
    fontSize: Theme.responsiveSize.size13,
    color: Theme.colors.textColor29,
    fontWeight: '400',
  },
  img: {
    width: Theme.responsiveSize.size20,
    height: Theme.responsiveSize.size20,
    borderRadius: Theme.responsiveSize.size10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Theme.colors.inputBackground,
  },
  redBox: {
    width: Theme.responsiveSize.size20,
    height: Theme.responsiveSize.size20,
    borderRadius: Theme.responsiveSize.size10,
    backgroundColor: Theme.colors.bgColor37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRedBox: {
    width: Theme.responsiveSize.size10,
    height: Theme.responsiveSize.size10,
    borderRadius: Theme.responsiveSize.size5,
    backgroundColor: Theme.colors.red_notification,
  },
});
export default styles;
