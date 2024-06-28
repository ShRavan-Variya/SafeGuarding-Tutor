import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  style: any;
  innerContainerStyle?:any;
  image: ImageSourcePropType;
  textColor?: string;
  imgContainer?: any;
  onPress: () => void;
}
const HomeLessonArriveCard = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}>
      <View style={[styles.innerContainer,props.innerContainerStyle]}>
        <View style={props.imgContainer}>
          <Image style={styles.image} source={props.image} />
        </View>
        <Text
          style={[
            styles.title,
            props.textColor ? {color: props.textColor} : {},
          ]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeLessonArriveCard;
