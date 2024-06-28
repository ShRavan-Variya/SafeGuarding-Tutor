import React from 'react';
import Header from '../../../components/header/Header';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import LessonDetails from '../../../components/lessonDetails/LessonDetails';
import Theme from '../../../theme/Theme';
import Notes from '../../../components/notes/Notes';
import {BlurView} from '@react-native-community/blur';

const IncidentSent = () => {
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
        <View>
          <Notes
            heading="Incident"
            title={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
            description={
              'Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
            isIncident={true}
          />
        </View>
        <View style={{height: 50}} />
      </ScrollView>
    </>
  );
};

export default IncidentSent;
