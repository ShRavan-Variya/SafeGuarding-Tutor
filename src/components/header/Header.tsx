import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  isGoBack?: boolean;
  isLesson?: boolean;
  studentName?: string;
}
export default function Header(props: Props) {
  const nav: any = useNavigation();
  return (
    <View style={style.container}>
      {props.isGoBack ? (
        <View
          style={[
            style.notificationContainer,
            props.isLesson && {alignItems: 'flex-start'},
          ]}>
          <TouchableOpacity onPress={() => nav.goBack()}>
            <Image source={Theme.icons.goBack} />
          </TouchableOpacity>
          <View style={style.lessonContainer}>
            <Text style={style.notificationText}>{props.title}</Text>
            {props.isLesson && (
              <Text style={style.lessonText}>
                Lesson with{' '}
                <Text style={[style.lessonText, {fontWeight: '700'}]}>
                  {props.studentName}
                </Text>
              </Text>
            )}
          </View>
        </View>
      ) : (
        <View style={style.textContainer}>
          <Text style={style.mainText}>{props.title}</Text>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Theme.colors.white,
    // height: Theme.responsiveSize.size70,
    borderBottomWidth: 1,
    borderColor: Theme.colors.inputBackground,
    padding: Theme.responsiveSize.size10,
  },
  textContainer: {
    justifyContent: 'flex-end',
    marginTop: Theme.responsiveSize.size20,
  },
  mainText: {
    fontSize: Theme.responsiveSize.size16,
    color: Theme.colors.black,
    fontWeight: '600',
  },
  notificationText: {
    fontSize: Theme.responsiveSize.size16,
    color: Theme.colors.black,
    fontWeight: '600',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: Theme.responsiveSize.size20,
  },
  lessonContainer: {
    width: '90%',
    rowGap: Theme.responsiveSize.size5,
    alignItems: 'center',
  },
  lessonText: {
    fontSize: Theme.responsiveSize.size14,
    color: Theme.colors.black,
    fontWeight: '400',
  },
});
