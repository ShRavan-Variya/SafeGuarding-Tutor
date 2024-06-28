import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  lessonsContainer: {
    flex: Theme.responsiveSize.size1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.responsiveSize.size10,
    // paddingVertical: Theme.responsiveSize.size15,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Theme.responsiveSize.size15,
    alignItems: 'center',
    marginVertical: Theme.responsiveSize.size10,
  },
  upComingTrueBtn: {
    backgroundColor: Theme.colors.textColor30,
    color: Theme.colors.white,
    padding: Theme.responsiveSize.size10,
    borderRadius: Theme.responsiveSize.size30,
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '500',
  },
  upComingFalseBtn: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '500',
    color: Theme.colors.black,
  },

  //Calendar Screen Style
  calendarContainer: {
    flex: Theme.responsiveSize.size1,
    backgroundColor: Theme.colors.white,
  },
  calendarBtn: {
    position: 'absolute',
    bottom: 0,
    height:Theme.responsiveSize.size150,
    alignItems: 'center',
    width: '100%',
  },
  calendarInnerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.white,
    width: Theme.responsiveSize.size190,
    height: Theme.responsiveSize.size50,
    borderRadius: Theme.responsiveSize.size30,
    gap: Theme.responsiveSize.size10,
    elevation: Theme.responsiveSize.size4,
  },
  BtnContainer: {
    borderWidth: Theme.responsiveSize.size1,
    paddingVertical:Theme.responsiveSize.size7,
    paddingHorizontal:Theme.responsiveSize.size10,
    borderRadius: Theme.responsiveSize.size20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: Theme.colors.appColorTutor,
    fontWeight: '600',
    fontSize: Theme.responsiveSize.size14,
    color: Theme.colors.appColorTutor,
  },
  btnText: {
    fontWeight: '600',
    fontSize: Theme.responsiveSize.size14,
    color: Theme.colors.textColor29,
  },
});

export default styles;
