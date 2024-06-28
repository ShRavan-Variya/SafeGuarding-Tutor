import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';

interface Props {
  studentName: string;
  scheduled: string;
  subject: string;
  type: string;
  time: string;
  date: string;
  location: string;
  image: any;
  upComing: boolean;
}
export default function StudentCard(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        {props.image != null ? (
          <Image source={{uri: props.image}} style={styles.img} />
        ) : (
          <Image source={Theme.icons.Child1} />
        )}
        <View style={{rowGap: Theme.responsiveSize.size5}}>
          <Text style={styles.nameText}>{props.studentName}</Text>
          <Text style={styles.scheduledText}>{props.scheduled}</Text>
        </View>
      </View>
      <View
        style={[
          styles.subjectContainer,
          props.type == 'Online' && {
            backgroundColor: Theme.colors.bgColor36,
          },
        ]}>
        {props.upComing ? (
          <Text style={styles.upComingText}>{'Up Coming'}</Text>
        ) : (
          <Text style={styles.upComingText}>{'Past'}</Text>
        )}
        <View style={styles.subjectInnerContainer}>
          <Text numberOfLines={1} style={styles.subjectText}>
            {props.subject}
          </Text>
          <Text
            style={[
              styles.typeText,
              props.type == 'Online' && {
                backgroundColor: Theme.colors.planned_online,
                color: Theme.colors.white,
              },
            ]}>
            {props.type}
          </Text>
        </View>
      </View>
      <View style={styles.pading}>
        <View style={styles.flexRow}>
          <Image source={Theme.icons.tutor_calendar} />
          <Text
            style={[
              styles.scheduledText,
              {marginRight: Theme.responsiveSize.size30},
            ]}>
            {props.date}
          </Text>
          <Image source={Theme.icons.tutor_Clock} />
          <Text style={styles.scheduledText}>{props.time}</Text>
        </View>
        <View style={[styles.flexRow, {alignItems: 'flex-end'}]}>
          <Image source={Theme.icons.tutor_Location} />
          <Text style={styles.scheduledText}>{props.location}</Text>
        </View>
      </View>
    </View>
  );
}
