import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  constainer: {
    flex: Theme.responsiveSize.size1,
    borderColor: Theme.colors.inputBackground,
    borderWidth: Theme.responsiveSize.size1,
    height: Theme.responsiveSize.size200,
    marginVertical: Theme.responsiveSize.size10,
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.responsiveSize.size8,
  },
  innerContainer: {
    width: '100%',
    height: Theme.responsiveSize.size52,
    backgroundColor: Theme.colors.bgColor36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.responsiveSize.size10,
    borderTopRightRadius: Theme.responsiveSize.size6,
    borderTopLeftRadius: Theme.responsiveSize.size6,
  },
  img: {
    width: Theme.responsiveSize.size20,
    height: Theme.responsiveSize.size20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.responsiveSize.size10,
  },
  contentContainer: {
    padding: Theme.responsiveSize.size10,
    rowGap: Theme.responsiveSize.size10,
  },
  dateText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '600',
    color: Theme.colors.textColor29,
  },
  nameText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '400',
    color: Theme.colors.textColor29,
  },
  headingText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.textColor29,
  },
  detailText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '600',
    color: Theme.colors.textColor30,
  },
});

export default styles;
