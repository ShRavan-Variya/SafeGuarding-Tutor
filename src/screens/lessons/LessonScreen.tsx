import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import LessonCard from '../../components/lessonCard/LessonCard';
import {useFocusEffect} from '@react-navigation/native';
import {apiError, isNetworkAvailable} from '../../api/api';
import {get_Past_Lesson, get_Upcoming_Lesson} from '../../services/Get';
import {RNToasty} from 'react-native-toasty';

const LessonScreen = () => {
  const [btnFlag, setBtnFlag] = useState<boolean>(true);
  const [pastLessonData, setPastLessonData] = useState([]);
  const [upcomingLessonData, setUpcomingLessonData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getLessonData();
    }, []),
  );
  const getLessonData = async () => {
    const isConnected = await isNetworkAvailable();
    if (isConnected) {
      try {
        const res2 = await get_Upcoming_Lesson();
        setUpcomingLessonData(res2);
        const res1 = await get_Past_Lesson();
        setPastLessonData(res1);
      } catch (error: any) {
        RNToasty.Show({
          title: apiError(error),
        });
      }
    } else {
      RNToasty.Show({
        title: 'No internet connection available!',
      });
    }
  };
  return (
    <View style={styles.lessonsContainer}>
      <View style={styles.flexRow}>
        <TouchableOpacity onPress={() => setBtnFlag(true)}>
          <Text
            style={[
              btnFlag ? styles.upComingTrueBtn : styles.upComingFalseBtn,
            ]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBtnFlag(false)}>
          <Text
            style={[
              btnFlag ? styles.upComingFalseBtn : styles.upComingTrueBtn,
            ]}>
            Past Lessons
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          {btnFlag ? (
            <>
              {upcomingLessonData.map((val: any, index: any) => (
                <View key={index}>
                  <LessonCard
                    subject={val.subject}
                    type={val.lessonFormat}
                    date={val.dateOfLesson}
                    time={
                      val.startTime.slice(0, 5) +
                      ' - ' +
                      val.endTime.slice(0, 5)
                    }
                    location={val.venue}
                    image={val.image}
                    name={val.student}
                    isMessage={false}
                    btnFlag={btnFlag}
                  />
                </View>
              ))}
            </>
          ) : (
            <>
              {pastLessonData.map((val: any, index: any) => (
                <View key={index}>
                  <LessonCard
                    approved={val.approved}
                    subject={val.subject}
                    type={val.lessonFormat}
                    date={val.dateOfLesson}
                    time={
                      val.startTime.slice(0, 5) +
                      ' - ' +
                      val.endTime.slice(0, 5)
                    }
                    location={val.venue}
                    image={val.image}
                    name={val.student}
                    isMessage={false}
                    btnFlag={btnFlag}
                  />
                </View>
              ))}
            </>
          )}
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
};

export default LessonScreen;
