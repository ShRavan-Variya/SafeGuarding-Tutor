import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flex: Theme.responsiveSize.size1,
    borderColor: Theme.colors.inputBackground,
    borderWidth: Theme.responsiveSize.size1,
    height: Theme.responsiveSize.size210,
    marginVertical: Theme.responsiveSize.size10,
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.responsiveSize.size8,
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.responsiveSize.size10,
    padding: Theme.responsiveSize.size10,
  },
  img:{
   width:Theme.responsiveSize.size60,
   height:Theme.responsiveSize.size60,
   borderRadius:Theme.responsiveSize.size30
  },
  subjectContainer: {
    height: Theme.responsiveSize.size42,
    backgroundColor: Theme.colors.bgColor35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.responsiveSize.size10,
    marginBottom: Theme.responsiveSize.size10,
  },
  subjectInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.responsiveSize.size15,
  },
  nameText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '700',
    color: Theme.colors.textColor29,
  },
  scheduledText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '400',
    color: Theme.colors.textColor29,
  },
  upComingText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '500',
    color: Theme.colors.textColor29,
  },
  subjectText: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '700',
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
  flexRow: {
    flexDirection: 'row',
    gap: Theme.responsiveSize.size8,
    alignItems:'center'
  },
  pading: {
    padding: Theme.responsiveSize.size10,
    rowGap: Theme.responsiveSize.size15,
  },
});

export default styles;
