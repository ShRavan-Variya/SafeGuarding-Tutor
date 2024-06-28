import React from 'react';
import {
    Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Theme from '../theme/Theme';
import { Constants } from '../utils';
import HomeLesson from '../screens/home/HomeLesson';
import HomeTracking from '../screens/home/HomeTracking';
import { styles } from './styles';
import LessonScreen from '../screens/lessons/LessonScreen';
import CalendarScreen from '../screens/lessons/CalendarScreen';

const Tab = createMaterialTopTabNavigator();

const LessonTabNavigation = (props: any) => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={inspectionScreenStyle.mainContent}>
        <Tab.Navigator
        initialRouteName={Constants.TUTOR_LESSONS_CALENDAR_SCREEN}
          screenOptions={({route, navigation}) => ({
            tabBarActiveTintColor: Theme.colors.appColorTutor,
            tabBarInactiveTintColor: Theme.colors.appColorLight,
            tabBarIndicatorStyle: {backgroundColor: Theme.colors.appColorTutor,height:3},
            activeBackgroundColor: Theme.colors.white,
            tabBarLabelStyle: inspectionScreenStyle.tabBarLabelStyle,
            tabBarPressColor: Theme.colors.appColorTutor,
            tabBarBounces:true,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: Theme.colors.white, height:70,justifyContent: 'flex-end'},
          })}>
          <Tab.Screen
            name={Constants.TUTOR_LESSONS_CALENDAR_SCREEN}
            component={CalendarScreen}
            options={{
                title: 'Calendar',
                tabBarIcon:({ color, focused }) => (
                    <>
                      {focused?
                            <View style={[
                                styles.top_image_wrapper
                                ]}>
                                <Image
                                source={Theme.icons.lessons_calendar_active}
                                style={{width:22, height:22}}
                                resizeMode="contain"
                                />
                                <Text style={[styles.top_label, {color:color}]}>{'Calendar'}</Text>
                            </View>
                          :
                            <View style={[
                                styles.top_image_wrapper
                                ]}>
                                <Image
                                source={Theme.icons.lessons_calendar}
                                style={{width:22, height:22}}
                                resizeMode="contain"
                                />
                                <Text style={styles.top_label}>{'Calendar'}</Text>
                            </View>
                      }
                  </>
                ),
            }}
          />

          <Tab.Screen
            name={Constants.TUTOR_LESSONS_LESSONS_SCREEN}
            component={LessonScreen}
            options={{
                title: 'Tracking',
                tabBarIcon:({ color, focused }) => (
                    <>
                      {focused?
                            <View style={[
                                styles.top_image_wrapper
                                ]}>
                                <Image
                                source={Theme.icons.lessons_lessons_active}
                                style={{width:22, height:22}}
                                resizeMode="contain"
                                />
                                <Text style={[styles.top_label, {color:color}]}>{'Lessons'}</Text>
                            </View>
                          :
                            <View style={[
                                styles.top_image_wrapper
                                ]}>
                                <Image
                                source={Theme.icons.lessons_lessons}
                                style={{width:22, height:22}}
                                resizeMode="contain"
                                />
                                <Text style={styles.top_label}>{'Lessons'}</Text>
                            </View>
                      }
                  </>
                ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};
const inspectionScreenStyle = StyleSheet.create({
  mainContent: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor1,
  },
  tabBarLabelStyle: {
    fontSize: Theme.responsiveSize.size12,
  },
});
export default LessonTabNavigation;
