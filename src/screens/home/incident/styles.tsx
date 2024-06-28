import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flex: Theme.responsiveSize.size1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.responsiveSize.size10,
    paddingTop: Theme.responsiveSize.size15,
  },
  incidentContainer: {
    marginTop: Theme.responsiveSize.size10,
    justifyContent: 'space-between',
    rowGap: Theme.responsiveSize.size45,
    //   height: '94%',
  },
  padding: {
    rowGap: Theme.responsiveSize.size15,
  },
  line:{
    width:'100%',
    
    height:Theme.responsiveSize.size2,
    backgroundColor:Theme.colors.inputBackground,
    marginVertical:Theme.responsiveSize.size20
  }
});

export default styles;
