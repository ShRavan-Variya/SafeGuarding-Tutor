import React, {useEffect, useRef, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Theme from '../../theme/Theme';
import styles from './styles';
import LessonTimeBox from '../../components/homeLesson/LessonTimeBox';
import HomeMapCard from '../../components/homeLesson/HomeMapCard';
import HomeLessonArriveCard from '../../components/homeLessonArriveCard/HomeLessonArriveCard';
import {useNavigation} from '@react-navigation/native';
import {Constants} from '../../utils';
import BottomSheet from '../../components/bottomSheet/BottomSheet';
import { RNToasty } from 'react-native-toasty';
import { apiError, isNetworkAvailable } from '../../api/api';
import { get_Current_Lesson } from '../../services/Get';
import Loader from '../../components/Loader/Loader';
import { Add_SOS, Student_Arrived, Tutor_Arrived } from '../../services/Post';

interface lesson {
  dateOfLesson: string, 
  duration: string, 
  durationId: number, 
  endTime: string, 
  lessonId: string, 
  map: string, 
  startTime: string, 
  startingTime: string, 
  subject: string, 
  subjectId: string, 
  venue: string, 
  venueId: string
}
const HomeLesson = () => {
  const [isArrive, setIsArrive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lessonData, setLessonData] = useState<lesson>();
  const nav: any = useNavigation();
  const refRBSheet: any = useRef(null);

  useEffect(()=>{
    getData();
  },[])

  const getData = async () => {
    setIsLoading(true);
    const isConnected = await isNetworkAvailable();
    if (isConnected) {
      try {
        const res = await get_Current_Lesson();
        console.log('res: '+res);
        if(res){
          console.log('res');
          const dateFormated = new Date(res?.dateOfLesson);
          const dateString :any = String(dateFormated).split(' ');
          setLessonData({
            dateOfLesson: dateString[0]+' '+dateString[1]+' '+dateString[2], 
            duration: res?.duration, 
            durationId: res?.durationId, 
            endTime: res?.endTime, 
            lessonId: res?.lessonId, 
            map: res?.map, 
            startTime: res?.startTime, 
            startingTime: res?.startingTime, 
            subject: res?.subject, 
            subjectId: res?.subjectId, 
            venue: res?.venue, 
            venueId: res?.venueId
          });
          console.log(res);
        }
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        RNToasty.Show({
          title: apiError(error),
        });
      }
    } else {
      setIsLoading(false);
      RNToasty.Show({
        title: 'No internet connection available!',
      });
    }
  };

  const InitiateSOS = async () => {
    setIsLoading(true);
    const isConnected = await isNetworkAvailable();
    if (isConnected && lessonData?.lessonId !== "" && lessonData?.lessonId !== null && lessonData?.lessonId !== undefined) {
      try {
        const res = await Add_SOS(lessonData?.lessonId);
        console.log(res);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        RNToasty.Show({
          title: apiError(error),
        });
      }
    } else {
      setIsLoading(false);
      RNToasty.Show({
        title: 'No internet connection available!',
      });
    }
  }

  const StudentArrived = async () => {
    setIsLoading(true);
    const isConnected = await isNetworkAvailable();
    if (isConnected && lessonData?.lessonId !== "" && lessonData?.lessonId !== null && lessonData?.lessonId !== undefined) {
      try {
        const res = await Student_Arrived(lessonData?.lessonId);
        console.log(res);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        RNToasty.Show({
          title: apiError(error),
        });
      }
    } else {
      setIsLoading(false);
      RNToasty.Show({
        title: 'No internet connection available!',
      });
    }
  }

  const TutorArrived = async () => {
    setIsLoading(true);
    const isConnected = await isNetworkAvailable();
    if (isConnected && lessonData?.lessonId !== "" && lessonData?.lessonId !== null && lessonData?.lessonId !== undefined) {
      try {
        const res = await Tutor_Arrived(lessonData?.lessonId);
        console.log(res);
        setIsArrive(true);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        RNToasty.Show({
          title: apiError(error),
        });
      }
    } else {
      setIsLoading(false);
      RNToasty.Show({
        title: 'No internet connection available!',
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      {lessonData &&
        <>
          <Loader isLoading={isLoading} />
          <Text style={styles.lessonText}>{'Current Lesson'.toUpperCase()}</Text>
          <View style={styles.firstRow}>
            <View
              style={[
                styles.subjectWrapper,
                {backgroundColor: Theme.colors.planned_online},
              ]}>
              <Text
                style={[
                  styles.lessonText,
                  {color: Theme.colors.white, fontWeight: '500'},
                ]}>
                {lessonData?.subject?.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.studentName}>{'Oliver Jones'.toUpperCase()}</Text>
          </View>
          {isArrive ? (
            <>
              <View style={styles.studentNameBox}>
                <Image source={Theme.icons.Child1} />
                <View style={{rowGap: Theme.responsiveSize.size5}}>
                  <Text style={[styles.studentName, {marginLeft: 0}]}>
                    {'Oliver Jones'}
                  </Text>
                  <Text style={styles.lessonText}>{'14 years old'}</Text>
                </View>
              </View>
              <HomeLessonArriveCard
                title="SOS"
                style={{
                  backgroundColor: Theme.colors.notAttended,
                  width: '100%',
                  height: Theme.responsiveSize.size120,
                }}
                innerContainerStyle={{
                  flexDirection: 'row',
                  gap: Theme.responsiveSize.size20,
                }}
                image={Theme.icons.sos}
                textColor={Theme.colors.white}
                onPress={() => InitiateSOS()}
              />
              <View style={styles.arrivedCardsContainer}>
                <HomeLessonArriveCard
                  title="Student Arrived"
                  style={{
                    borderWidth: Theme.responsiveSize.size1,
                    borderColor: Theme.colors.appColorTutor,
                    rowGap: Theme.responsiveSize.size30,
                  }}
                  imgContainer={{
                    backgroundColor: Theme.colors.planned_online,
                    height: Theme.responsiveSize.size60,
                    width: Theme.responsiveSize.size60,
                    borderRadius: Theme.responsiveSize.size30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  image={Theme.icons.student_arrive}
                  onPress={() => {
                    // StudentArrived();
                    setIsArrive(false);
                  }}
                />
                <HomeLessonArriveCard
                  title="End Lesson"
                  style={{
                    borderWidth: Theme.responsiveSize.size1,
                    borderColor: Theme.colors.appColorTutor,
                    rowGap: Theme.responsiveSize.size30,
                  }}
                  image={Theme.icons.end_lesson}
                  onPress={() => nav.navigate(Constants.Ended_Lesson)}
                />
              </View>
              <TouchableOpacity
                style={styles.messageButton}
                onPress={() => refRBSheet.current.open()}>
                <Image
                  style={styles.messageButtonImage}
                  source={Theme.icons.send_message}
                />
                <Text style={styles.messageButtonText}>{'Send Meassage'}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <LessonTimeBox
                title={lessonData?.dateOfLesson}
                startingIn={lessonData?.startingTime}
                startTime={lessonData?.startTime}
                endTime={lessonData?.endTime}
                duration={lessonData?.duration}
              />
              <HomeMapCard
                refRBSheet={refRBSheet}
                Arrive={()=>TutorArrived()}
                name={lessonData?.venue}
                distance={'0.6mil'}
                address={lessonData?.venue}
              />
            </>
          )}
          <BottomSheet refRBSheet={refRBSheet} />
          <View style={{height: 100}} />
        </>
      }
    </ScrollView>
  );
};

export default HomeLesson;
