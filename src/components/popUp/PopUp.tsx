import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Overlay} from 'react-native-elements';
import Theme from '../../theme/Theme';

interface Props {
  // isvisible: boolean;
}
export default function PopUp(props: Props) {
  return (
      <View style={style.overlay}>
        <Image source={Theme.icons.Child1} />
        <Text>sdfsdfsdfsf</Text>
      </View>
  );
}

const style = StyleSheet.create({
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    opacity: 0.9,
    height: 200,
    width: 200,
    alignSelf:'center',
  
  },
});
