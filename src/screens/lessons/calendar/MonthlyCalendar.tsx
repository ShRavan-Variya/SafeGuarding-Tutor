import React, {useState, useMemo, useCallback} from 'react';
import {Text, View} from 'react-native';
import {CalendarList, DateData} from 'react-native-calendars';
import styles from './styles';
import Theme from '../../../theme/Theme';

const RANGE = 24;
const initialDate = new Date().toISOString().split('T')[0];
const nextWeekDate = new Date('2024-06-20').toISOString().split('T')[0];
const nextMonthDate = new Date('2024-07-14').toISOString().split('T')[0];

function renderCustomHeader(date: any) {
  const header = date.toString('MMMM yyyy');
  const [month, year] = header.split(' ');
  return (
    <View style={styles.monthHeader}>
      <Text style={styles.monthHeading}>{`${month}`}</Text>
      <Text
        style={[
          styles.monthHeading,
          {marginRight: Theme.responsiveSize.size20},
        ]}>
        {year}
      </Text>
      <View style={styles.line} />
    </View>
  );
}
const CalendarScreen = (props: any) => {
  const [selected, setSelected] = useState(initialDate);
  const marked = useMemo(() => {
    return {
      [nextWeekDate]: {
        selected: selected === nextWeekDate,
        dots: [
          {color: Theme.colors.appColorTutor},
          {color: Theme.colors.pending},
          {color: Theme.colors.planned_online},
        ],
      },
      [nextMonthDate]: {
        selected: selected === nextMonthDate,
        dots: [
          {color: Theme.colors.notAttended},
          {color: Theme.colors.delivered_approved},
        ],
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: Theme.colors.appColorTutor,
        selectedTextColor: Theme.colors.white,
      },
    };
  }, [selected]);

  const onDayPress = useCallback((day: DateData) => {
    props.setGetData(day.dateString);
    props.setBtnFlag(false);
    setSelected(day.dateString);
  }, []);

  return (
    <>
      <View style={styles.dayContainer}>
        <Text style={styles.monthNameText}>Sun</Text>
        <Text style={styles.monthNameText}>Mon</Text>
        <Text style={styles.monthNameText}>Tue</Text>
        <Text style={styles.monthNameText}>Wen</Text>
        <Text style={styles.monthNameText}>Thu</Text>
        <Text style={styles.monthNameText}>Fri</Text>
        <Text style={styles.monthNameText}>Sat</Text>
      </View>
      <View style={styles.line} />
      <CalendarList
        hideDayNames={true}
        current={initialDate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        onDayPress={onDayPress}
        markingType={'multi-dot'}
        markedDates={marked}
        renderHeader={renderCustomHeader}
        calendarHeight={300}
        theme={{}}
        minDate={initialDate}
      />
    </>
  );
};

// const theme = {
//   stylesheet: {
//     calendar: {
//       header: {
//         dayHeader: {
//           fontWeight: '600',
//           color: '#48BFE3',
//         },
//       },
//     },
//   },
//   'stylesheet.day.basic': {
//     today: {
//       borderColor: '#48BFE3',
//       borderWidth: 0.8,
//     },
//     todayText: {
//       color: '#5390D9',
//       fontWeight: '800',
//     },
//   },
// };

export default CalendarScreen;
