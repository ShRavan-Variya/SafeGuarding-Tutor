import {View, Text, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';

interface Props {
  subject: string;
  type: string;
  date: string;
  time: string;
  location: string;
  image: any;
  name: string;
  approved?: boolean;
  message?: string;
  isMessage: boolean;
  btnFlag?: boolean;
  messageName?: string;
  messageImage?: any;
}
export default function LessonCard(props: Props) {
  return (
    <View style={styles.constainer}>
      <View
        style={[
          styles.innerContainer,
          props.type == 'Online' && {backgroundColor: Theme.colors.bgColor36},
        ]}>
        <Text style={styles.subjectText}>{props.subject}</Text>
        <View style={styles.flexRow}>
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
          {props.btnFlag == false && (
            <Image
              source={props.approved ? Theme.icons.tick : Theme.icons.red_Clock}
            />
          )}
        </View>
      </View>
      <View style={styles.pading}>
        <View style={styles.flexRow}>
          <Image source={Theme.icons.tutor_calendar} />
          <Text
            style={[
              styles.dateText,
              {marginRight: Theme.responsiveSize.size30},
            ]}>
            {props.date}
          </Text>
          <Image source={Theme.icons.tutor_Clock} />
          <Text style={styles.dateText}>{props.time}</Text>
        </View>
        <View style={[styles.flexRow, {alignItems: 'flex-end'}]}>
          <Image source={Theme.icons.tutor_Location} />
          <Text style={styles.dateText}>{props.location}</Text>
        </View>
        <View style={styles.flexRow}>
          {props.image != null ? (
            <Image source={{uri: props.image}} style={styles.img} />
          ) : (
            <Image source={Theme.icons.Child1} style={styles.img} />
          )}
          <Text style={styles.dateText}>{props.name}</Text>
        </View>
      </View>
      {props.isMessage && (
        <>
          <View style={styles.line} />
          <View style={styles.pading}>
            <Text style={styles.subjectText}>Messages</Text>
            <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
              <View style={styles.flexRow}>
                <Image source={props.messageImage} style={styles.img} />
                <View>
                  <Text style={styles.dateText}>{props.messageName}</Text>
                  <Text style={styles.messageText}>{props.message}</Text>
                </View>
              </View>
              <View style={styles.redBox}>
                <View style={styles.innerRedBox} />
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
