import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flex: Theme.responsiveSize.size1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.responsiveSize.size10,
    paddingTop: Theme.responsiveSize.size15,
  },
  lessonText: {
    fontSize: Theme.responsiveSize.size14,
    color: Theme.colors.textColor4,
  },
  studentName: {
    fontSize: Theme.responsiveSize.size16,
    color: Theme.colors.textColor2,
    fontWeight: '700',
    marginLeft: Theme.responsiveSize.size10,
  },
  firstRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Theme.responsiveSize.size10,
    alignItems: 'center',
  },
  subjectWrapper: {
    borderRadius: 20,
    paddingHorizontal: Theme.responsiveSize.size10,
    paddingVertical: Theme.responsiveSize.size5,
  },
  arrivedCardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Theme.responsiveSize.size10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  studentNameBox: {
    backgroundColor: Theme.colors.planned_face,
    width: '100%',
    flexDirection: 'row',
    gap: Theme.responsiveSize.size20,
    alignItems: 'center',
    height: Theme.responsiveSize.size100,
    borderRadius: Theme.responsiveSize.size12,
    padding: Theme.responsiveSize.size10,
    marginTop: Theme.responsiveSize.size10,
  },
  messageButton: {
    borderRadius: Theme.responsiveSize.size8,
    borderColor: Theme.colors.appColorTutor,
    borderWidth: Theme.responsiveSize.size2,
    paddingVertical: Theme.responsiveSize.size10,
    paddingHorizontal: Theme.responsiveSize.size10,
    marginTop: Theme.responsiveSize.size40,
    marginBottom:Theme.responsiveSize.size20,
    display: 'flex',
    flexDirection: 'row',
    gap: Theme.responsiveSize.size8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  messageButtonText: {
    color: Theme.colors.appColorTutor,
    fontSize: Theme.responsiveSize.size16,
    fontWeight: '600',
  },
  messageButtonImage: {
    width: Theme.responsiveSize.size22,
    height: Theme.responsiveSize.size22,
  },
});

export default styles;
