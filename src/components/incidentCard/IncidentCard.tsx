import {View, Text, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';

interface Props {
  date: string;
  image: ImageSourcePropType;
  heading: string;
  description: string;
  name:string
}
export default function IncidentCard(props: Props) {
  return (
    <View style={styles.constainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.dateText}>{props.date}</Text>
        <View style={styles.flexRow}>
          <Image source={props.image} style={styles.img} />
          <Text style={styles.nameText}>{props.name}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.headingText}>{props.heading}</Text>
        <Text style={styles.nameText}>{props.description}</Text>
        <TouchableOpacity style={styles.flexRow}>
          <Text style={styles.detailText}>Lesson details</Text>
          <Image source={Theme.icons.NextBtn} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
