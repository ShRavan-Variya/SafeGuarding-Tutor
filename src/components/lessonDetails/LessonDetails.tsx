import {View, Text, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';
import styles from './styles';

interface Props {
  date: string;
  startTime: string;
  duration: string;
  format: string;
  Subject: string;
  booked: string;
  studentName: string;
  status: string;
  image: ImageSourcePropType;
}
export default function LessonDetails(props: Props) {
  return (
    <View>
      <Text style={styles.lessonDetailsText}>Lesson Details</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.padding}>
          <Text style={styles.lebalText}>Date</Text>
          <Text style={styles.lebalText}>Start</Text>
          <Text style={styles.lebalText}>Duration</Text>
          <Text style={styles.lebalText}>Format</Text>
          <Text style={styles.lebalText}>Subject</Text>
          <Text style={styles.lebalText}>Booked</Text>
          <Text style={styles.lebalText}>Student</Text>
          <Text style={styles.lebalText}>Status</Text>
          <Text style={styles.lebalText}>Student</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.dataText}>{props.date}</Text>
          <Text style={styles.dataText}>{props.startTime}</Text>
          <Text style={styles.dataText}>{props.duration}</Text>
          <Text style={styles.formatType}>{props.format}</Text>
          <Text style={styles.dataText}>{props.Subject}</Text>
          <Text style={styles.dataText}>{props.booked}</Text>
          <Text style={styles.dataText}>{props.studentName}</Text>
          <Text
            style={[
              styles.formatType,
              {
                backgroundColor: Theme.colors.notAttended,
                color: Theme.colors.white,
              },
            ]}>
            {props.status}
          </Text>
          <View style={styles.row}>
            <Image source={props.image} style={styles.img} />
            <Text style={styles.dataText}>{props.studentName}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
