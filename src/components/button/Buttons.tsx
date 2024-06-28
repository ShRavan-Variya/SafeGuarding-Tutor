import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';

interface Props {
  title: string;
  style?: any;
  lebalStyle?: any;
  image?: ImageSourcePropType;
  onPress: () => void;
}
export default function Buttons(props: Props) {
  return (
    <>
      <TouchableOpacity
        style={[styles.arriveButton, props.style]}
        onPress={() => props.onPress()}>
        {props.image && <Image source={props.image} style={styles.img} />}
        <Text style={[styles.arriveButtonText, props.lebalStyle]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  arriveButton: {
    borderRadius: Theme.responsiveSize.size8,
    backgroundColor: Theme.colors.appColorTutor,
    paddingVertical: Theme.responsiveSize.size10,
    paddingHorizontal: Theme.responsiveSize.size10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  arriveButtonText: {
    color: Theme.colors.white,
    fontSize: Theme.responsiveSize.size16,
    fontWeight: '600',
  },
  img: {
    width: Theme.responsiveSize.size20,
    height: Theme.responsiveSize.size20,
  },
});
