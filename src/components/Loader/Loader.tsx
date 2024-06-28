import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import Theme from '../../theme/Theme';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = props => {
  return (
    <Overlay isVisible={props.isLoading}>
      <View style={styles.viewLoader}>
        <ActivityIndicator size="large" color={Theme.colors.appColorTutor} />
      </View>
    </Overlay>
  );
};

export default Loader;
const styles = StyleSheet.create({
  viewLoader: {
    backgroundColor: Theme.colors.white,
    height: Theme.responsiveSize.size80,
    width: Theme.responsiveSize.size80,
    borderRadius: Theme.responsiveSize.size20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
