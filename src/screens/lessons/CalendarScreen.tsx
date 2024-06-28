import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MonthlyCalendar from './calendar/MonthlyCalendar';
import WeeklyCalendar from './calendar/WeeklyCalendar';

const CalendarScreen = () => {
  const [BtnFlag, setBtnFlag] = useState(true);
  const [getDate, setGetData] = useState(null);
  return (
    <>
      <View style={styles.calendarContainer}>
        {BtnFlag ? (
          <MonthlyCalendar setGetData={setGetData} setBtnFlag={setBtnFlag} />
        ) : (
          <WeeklyCalendar
            setGetData={setGetData}
            getDate={getDate}
            BtnFlag={BtnFlag}
          />
        )}
        <View style={styles.calendarBtn}>
          <View style={styles.calendarInnerBtn}>
            <TouchableOpacity onPress={() => setBtnFlag(true)}>
              <Text style={[BtnFlag ? styles.BtnContainer : styles.btnText]}>
                This month
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBtnFlag(false)}>
              <Text style={[BtnFlag ? styles.btnText : styles.BtnContainer]}>
                This week
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 100}} />
      </View>
    </>
  );
};

export default CalendarScreen;
