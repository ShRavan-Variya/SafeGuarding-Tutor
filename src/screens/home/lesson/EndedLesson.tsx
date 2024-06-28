import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../../components/header/Header';
import LessonDetails from '../../../components/lessonDetails/LessonDetails';
import Theme from '../../../theme/Theme';
import styles from './styles';
import Notes from '../../../components/notes/Notes';
import Buttons from '../../../components/button/Buttons';
import { useNavigation } from '@react-navigation/native';
import { Constants } from '../../../utils';

const EndedLesson = () => {
  const nav :any= useNavigation()
  return (
    <>
      <Header
        title="Lesson"
        isGoBack={true}
        isLesson={true}
        studentName={'Oliver Jones'}
      />
      <ScrollView style={styles.container}>
        <View>
          <LessonDetails
            date={'6/4/2024'}
            startTime={'9:00 AM'}
            duration={'2h'}
            format={'Face to face'}
            Subject={'Math'}
            booked={'Hobs Moat Library'}
            studentName={'Oliver Jones'}
            status={'Not Attended'}
            image={Theme.icons.Child1}
          />
        </View>
        <View style={styles.line} />
        <Notes heading="Lesson Notes" isIncident={false} />
        <View style={styles.row}>
          <View style={{width: '50%'}}>
            <Buttons
              title={'Incident'}
              onPress={() => {nav.navigate(Constants.Send_Incident_Screen)}}
              image={Theme.icons.add_incident}
              style={{
                flexDirection: 'row',
                gap: Theme.responsiveSize.size10,
                backgroundColor: Theme.colors.planned_face,
              }}
              lebalStyle={{color: Theme.colors.textColor29}}
            />
          </View>
          <View style={{width: '50%'}}>
            <Buttons title={'Send Lesson Notes'} onPress={() => {}} />
          </View>
        </View>
        <View style={{height: 50}} />
      </ScrollView>
    </>
  );
};

export default EndedLesson;
