import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  lessonDetailsText: {
    fontSize: Theme.responsiveSize.size16,
    fontWeight: '600',
    color: Theme.colors.textColor29,
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: Theme.responsiveSize.size30,
    marginTop: Theme.responsiveSize.size20,
  },
  lebalText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '400',
    color: Theme.colors.textColor29,
    height: Theme.responsiveSize.size35,
    textAlignVertical: 'center',
  },
  dataText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.textColor29,
    height: Theme.responsiveSize.size35,
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  padding: {
    rowGap: Theme.responsiveSize.size5,
  },
  row: {
    flexDirection: 'row',
    gap: Theme.responsiveSize.size10,
    alignItems: 'center',
  },
  img: {
    width: Theme.responsiveSize.size20,
    height: Theme.responsiveSize.size20,
  },
  formatType: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.textColor29,
    backgroundColor: Theme.colors.planned_face,
    width: Theme.responsiveSize.size100,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: Theme.responsiveSize.size20,
    height: Theme.responsiveSize.size35,
  },
});

export default styles;
