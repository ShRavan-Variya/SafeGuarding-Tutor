import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const styles = StyleSheet.create({
  monthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: Theme.responsiveSize.size10,
    gap: Theme.responsiveSize.size10,
  },
  monthHeading: {
    fontSize: Theme.responsiveSize.size16,
    fontWeight: '700',
    color: Theme.colors.black,
  },
  line: {
    width: '100%',
    height: Theme.responsiveSize.size2,
    backgroundColor: Theme.colors.inputBackground,
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: Theme.responsiveSize.size50,
    paddingHorizontal: Theme.responsiveSize.size15,
  },
  monthNameText: {
    width: '14.4%',
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '500',
    color: Theme.colors.disabled,
  },
  //
  // weekly calendar style
  //
  dayDateContainer: {
    marginTop: Theme.responsiveSize.size20,
    marginVertical: Theme.responsiveSize.size3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    gap: Theme.responsiveSize.size19,
    marginBottom: Theme.responsiveSize.size15,
  },
  dayDateInnerContainer: {
    rowGap: Theme.responsiveSize.size5,
  },
  flagContainer: {
    width:Theme.responsiveSize.size35,
    backgroundColor: Theme.colors.delivered_approved,
    borderRadius: Theme.responsiveSize.size20,
    paddingVertical: Theme.responsiveSize.size10,
  },
  flagText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.white,
  },
  dateText: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '600',
    color: Theme.colors.textColor29,
  },
  padding: {
    rowGap: Theme.responsiveSize.size10,
    paddingTop: Theme.responsiveSize.size10,
  },
  timeText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '500',
    color: Theme.colors.disabled,
  },
  //
  // Event PopUp
  //
  eventContainer: {
    flexDirection: 'row',
    width: '90%',
    height: Theme.responsiveSize.size100,
    backgroundColor: Theme.colors.bgHeading1,
    marginLeft: Theme.responsiveSize.size30,
    marginTop: Theme.responsiveSize.size10,
    padding: Theme.responsiveSize.size10,
    gap: Theme.responsiveSize.size20,
    elevation: Theme.responsiveSize.size2,
    borderTopRightRadius: Theme.responsiveSize.size16,
    borderBottomLeftRadius: Theme.responsiveSize.size16,
    borderBottomRightRadius: Theme.responsiveSize.size16,
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Theme.responsiveSize.size10,
  },
  nameText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.textColor29,
  },
  subjectText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '400',
    color: Theme.colors.textColor29,
  },
  dottedLine: {
    borderColor: Theme.colors.disabled,
    borderWidth: Theme.responsiveSize.size1,
    borderStyle: 'dashed',
    borderRadius: Theme.responsiveSize.size1,
    width: '100%',
    height: Theme.responsiveSize.size1,
  },
});

export default styles;
