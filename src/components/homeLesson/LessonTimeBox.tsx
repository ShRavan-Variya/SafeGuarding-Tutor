import React from 'react'
import { Image, Text, View } from 'react-native';
import Theme from '../../theme/Theme';
import styles from './styles';

interface props {
  title:string;
  startingIn:string;
  startTime:string;
  endTime:string;
  duration:string
}
const LessonTimeBox = (props:props) => {
  return (
    <View style={[styles.container, styles.row, {padding: Theme.responsiveSize.size15}]}>
      <View style={styles.firstColumn}>
        <Image style={styles.timmerImage} source={Theme.icons.timer} />
      </View>
      <View style={styles.secondColumn}>
        <View style={styles.row}>
          <Text style={styles.heading}>{props.title}</Text>
          <View style={styles.startingInWrrapper}>
            <Text style={styles.subText} >{'Starting in '+props.startingIn}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.subText}>{props.startTime+" - "+props.endTime}</Text>
          <View style={styles.separator}/>
          <Text style={styles.subText}>{props.duration}</Text>
        </View>
      </View>
    </View>
  )
}

export default LessonTimeBox