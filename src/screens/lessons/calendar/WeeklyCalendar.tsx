import React, {Fragment, useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Theme from '../../../theme/Theme';
import {apiError, isNetworkAvailable} from '../../../api/api';
import {RNToasty} from 'react-native-toasty';
import {get_this_week_calender} from '../../../services/Get';
import Loader from '../../../components/Loader/Loader';
var arrayday = [
  {
    id: 1,
    day: 'Mon',
    date: 8,
    isActive: false,
  },
  {
    id: 2,
    day: 'Tue',
    date: 9,
    isActive: false,
  },
  {
    id: 3,
    day: 'Wed',
    date: 10,
    isActive: false,
  },
  {
    id: 4,
    day: 'Thu',
    date: 11,
    isActive: false,
  },
  {
    id: 5,
    day: 'Fri',
    date: 12,
    isActive: false,
  },
  {
    id: 6,
    day: 'Sat',
    date: 13,
    isActive: false,
  },
  {
    id: 7,
    day: 'Sun',
    date: 14,
    isActive: false,
  },
];
var time = [
  {
    id: 1,
    time: '1:00',
    data: []
  },
  {
    id: 2,
    time: '2:00',
    data: []
  },
  {
    id: 3,
    time: '3:00',
    data: []
  },
  {
    id: 4,
    time: '4:00',
    data: []
  },
  {
    id: 5,
    time: '5:00',
    data: []
  },
  {
    id: 6,
    time: '6:00',
    data: []
  },
  {
    id: 7,
    time: '7:00',
    data: []
  },
  {
    id: 8,
    time: '8:00',
    data: []
  },
  {
    id: 9,
    time: '9:00',
    data: []
  },
  {
    id: 10,
    time: '10:00',
    data: []
  },
  {
    id: 11,
    time: '11:00',
    data: [{
      isEvent: true,
      image: Theme.icons.Child2,
      name: 'Oliver Jones',
      subject: 'Math',
      location: 'Ystrad mynach Library',
      duration: '1 hours',
      type: 'Online',
    }]
  },
  {
    id: 12,
    time: '12:00',
    data: []
  },
  {
    id: 13,
    time: '13:00',
    data: []
  },
  {
    id: 14,
    time: '14:00',
    data: []
  },
  {
    id: 15,
    time: '15:00',
    data: []
  },
  {
    id: 16,
    time: '16:00',
    data: []
  },
  {
    id: 17,
    time: '17:00',
    data: []
  },
  {
    id: 18,
    time: '18:00',
    data: []
  },
  {
    id: 19,
    time: '19:00',
    data: []
  },
  {
    id: 20,
    time: '20:00',
    data: []
  },
  {
    id: 21,
    time: '21:00',
    data: []
  },
  {
    id: 22,
    time: '22:00',
    data: []
  },
  {
    id: 23,
    time: '23:00',
    data: []
  },
  {
    id: 24,
    time: '24:00',
    data: []
  },
];
const WeeklyCalendar = (props: any) => {
  const [dateDataToggle, setDateDataToggle] = useState(false);
  const [reRender, setReRender] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isActive = (id: any) => {
    for (let i = 0; i < arrayday?.length; i++) {
      if (arrayday[i].id == id) {
        arrayday[i].isActive = true;
        const today = new Date();
        const dateFormate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+arrayday[i].date;
        console.log(dateFormate);
        props.setGetData(dateFormate);
        getData(dateFormate);
      } else {
        arrayday[i].isActive = false;
      }
    }
    setDateDataToggle(!dateDataToggle);
  };
  useEffect(() => {
    dayOfWeek();
  }, []);
  const getData = async (date: any) => {
    setIsLoading(true);
    const isConnected = await isNetworkAvailable();
    if (isConnected) {
      try {
        for(let j = 0; j < time?.length; j++){
          time[j].data = [];
          setReRender(!reRender);
        }
        const res = await get_this_week_calender(date);
        for(let j = 0; j < res?.length; j++){
          const hour = parseInt(res[j].startTime.split(':')[0])-1;
          time[hour].data = [{
            isEvent: true,
            image: res[j].image,
            name: res[j].student,
            subject: res[j].subject,
            location: res[j].venue,
            duration: res[j].duration,
            type: 'Online',
          },
          ...time[hour].data]
          setReRender(!reRender);
        }
        setIsLoading(false);
        // if (!res) {
        //   for (let i = 0; i < time?.length; i++) {
        //     for (let j = 0; j < res?.length; j++) {
        //       if (res[j].startTime >= time[i].time) {
        //         console.log('as');
        //         const hour = 2;
        //         //2:26 >= 2:00 && 2:26 <= 3:00
        //       }
        //     }
        //   }
        // }
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
  const dayOfWeek = () => {
    for (let i = 0; i < arrayday?.length; i++) {
      arrayday[i].isActive = false;
    }
    let newDate: any;

    if (props.BtnFlag == false) {
      props.setGetData(null);
    }
    if (props.getDate != null) {
      newDate = new Date(props.getDate);
    } else {
      newDate = new Date();
    }
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let date = newDate.getDate();
    let day = days[newDate?.getDay()];
    getData(newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate());
    if (day == 'Monday') {
      arrayday[0].date = date;
      arrayday[1].date = date + 1;
      arrayday[2].date = date + 2;
      arrayday[3].date = date + 3;
      arrayday[4].date = date + 4;
      arrayday[5].date = date + 5;
      arrayday[6].date = date + 6;
      arrayday[0].isActive = true;
      setDateDataToggle(!dateDataToggle);
    } else if (day == 'Tuesday') {
      arrayday[0].date = date - 1;
      arrayday[1].date = date;
      arrayday[2].date = date + 1;
      arrayday[3].date = date + 2;
      arrayday[4].date = date + 3;
      arrayday[5].date = date + 4;
      arrayday[6].date = date + 5;
      arrayday[1].isActive = true;
      setDateDataToggle(!dateDataToggle);
    } else if (day == 'Wednesday') {
      arrayday[0].date = date - 2;
      arrayday[1].date = date - 1;
      arrayday[2].date = date;
      arrayday[3].date = date + 1;
      arrayday[4].date = date + 2;
      arrayday[5].date = date + 3;
      arrayday[6].date = date + 4;
      arrayday[2].isActive = true;
      setDateDataToggle(!dateDataToggle);
    } else if (day == 'Thursday') {
      arrayday[0].date = date - 3;
      arrayday[1].date = date - 2;
      arrayday[2].date = date - 1;
      arrayday[3].date = date;
      arrayday[4].date = date + 1;
      arrayday[5].date = date + 2;
      arrayday[6].date = date + 3;
      arrayday[3].isActive = true;
      setDateDataToggle(!dateDataToggle);
    } else if (day == 'Friday') {
      arrayday[0].date = date - 4;
      arrayday[1].date = date - 3;
      arrayday[2].date = date - 2;
      arrayday[3].date = date - 1;
      arrayday[4].date = date;
      arrayday[5].date = date + 1;
      arrayday[6].date = date + 2;
      arrayday[4].isActive = true;
      setDateDataToggle(!dateDataToggle);
    } else if (day == 'Saturday') {
      arrayday[0].date = date - 5;
      arrayday[1].date = date - 4;
      arrayday[2].date = date - 3;
      arrayday[3].date = date - 2;
      arrayday[4].date = date - 1;
      arrayday[5].date = date;
      arrayday[6].date = date + 1;
      arrayday[5].isActive = true;
      setDateDataToggle(!dateDataToggle);
    } else if (day == 'Sunday') {
      arrayday[0].date = date - 6;
      arrayday[1].date = date - 5;
      arrayday[2].date = date - 4;
      arrayday[3].date = date - 3;
      arrayday[4].date = date - 2;
      arrayday[5].date = date - 1;
      arrayday[6].date = date;
      arrayday[6].isActive = true;
      setDateDataToggle(!dateDataToggle);
    }
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <View style={styles.dayDateContainer}>
        {arrayday.map((val: any, index: any) => (
          <TouchableOpacity
            onPress={() => {
              isActive(val.id);
            }}
            key={index}
            style={[
              styles.dayDateInnerContainer,
              val.isActive && styles.flagContainer,
            ]}>
            <Text
              style={[
                [styles.dateText, {fontWeight: '400'}],
                val.isActive && [styles.flagText, {fontWeight: '400'}],
              ]}>
              {val.day}
            </Text>
            <Text style={[styles.dateText, val.isActive && styles.flagText]}>
              {val.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.line} />
      <ScrollView>
        <View
          style={[styles.padding, {paddingLeft: Theme.responsiveSize.size10}]}>
          {time.map((val: any, index: any) => (
            <View key={index}>
              <View style={styles.flexRow}>
                <Text
                  style={[
                    styles.timeText,
                    val.isEvent && {color: Theme.colors.textColor29},
                  ]}>
                  {val.time}
                </Text>
                {val.data.length==0 && <View style={styles.dottedLine} />}
              </View>
              {val.data?.map((item: any, _index: any) => (
                <Fragment key={_index}>
                  {item?.isEvent && (
                    <View
                      style={[
                        styles.eventContainer,
                        item?.type == 'Online' && {
                          backgroundColor: Theme.colors.bgHeading2,
                        },
                      ]}>
                      <Image 
                        source={
                          String(item?.image).startsWith('https://')?
                          {uri:item?.image}:
                          Theme.icons.default
                        } 
                        style={{width:50, height:50, borderRadius:25}} />
                      <View style={{justifyContent: 'space-between'}}>
                        <Text style={styles.nameText}>{item?.name}</Text>
                        <View style={styles.flexRow}>
                          <Image source={Theme.icons.lesson_Icon} />
                          <Text
                            style={[
                              styles.subjectText,
                              {marginRight: Theme.responsiveSize.size20},
                            ]}>
                            {item?.subject}
                          </Text>
                          <Image source={Theme.icons.time_Duration} />
                          <Text style={styles.subjectText}>{item?.duration}</Text>
                        </View>
                        <View style={styles.flexRow}>
                          <Image source={Theme.icons.tutor_Location} />
                          <Text style={styles.subjectText}>{item?.location}</Text>
                        </View>
                      </View>
                    </View>
                  )}
                </Fragment>
              ))}
            </View>
          ))}
        </View>
        <View style={{height: 40}} />
      </ScrollView>
    </>
  );
};

export default WeeklyCalendar;
