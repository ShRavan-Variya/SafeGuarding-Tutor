import React, {useState} from 'react';
import StudentCard from '../../components/studentCard/StudentCard';
import {ScrollView, View} from 'react-native';
import style from './styles';
import Header from '../../components/header/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {apiError, isNetworkAvailable} from '../../api/api';
import {RNToasty} from 'react-native-toasty';
import {get_students_for_tutor} from '../../services/Get';
import Loader from '../../components/Loader/Loader';
import { Constants } from '../../utils';

const Students = () => {
  const nav:any = useNavigation()
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getStudentData();
    }, []),
  );

  const getStudentData = async () => {
    const isConnected = await isNetworkAvailable();
    setLoading(true);
    if (isConnected) {
      try {
        const res = await get_students_for_tutor();
        console.log(res)
        if(res.status==="Success"){
          setStudentData(res.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error: any) {
        setLoading(false);
        RNToasty.Show({
          title: apiError(error),
        });
        if(error?.response.status===401){
          nav.navigate(Constants.LOGIN_SCREEN)
        }
      }
    } else {
      setLoading(false);
      RNToasty.Show({
        title: 'No internet connection available!',
      });
    }
  };
  return (
    <>
      <Header title={'Students'} />
      <ScrollView style={style.container}>
        {studentData?.map((val: any, index: any) => (
          <View key={index}>
            <StudentCard
              upComing={val.upComing}
              image={val.image}
              studentName={val.student}
              scheduled={val.scheduledLesson + ' scheduled lessons'}
              subject={val.subject}
              type={val.lessonFormat}
              date={val.dateOfLesson}
              time={val.startTime.slice(0, 5) + ' - ' + val.endTime.slice(0, 5)}
              location={val.venue}
            />
          </View>
        ))}
        <Loader isLoading={loading} />
        <View style={{height: 100}} />
      </ScrollView>
    </>
  );
};

export default Students;
