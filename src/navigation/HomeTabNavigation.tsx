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

const Tab = createMaterialTopTabNavigator();

const HomeTabNavigation = (props: any) => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={inspectionScreenStyle.mainContent}>
        <Tab.Navigator
        initialRouteName={Constants.TUTOR_HOME_LESSON_SCREEN}
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
            name={Constants.TUTOR_HOME_LESSON_SCREEN}
            component={HomeLesson}
            options={{
                title: 'Lesson',
                tabBarIcon:({ color, focused }) => (
                    <>
                      {focused?
                            <View style={[
                                styles.top_image_wrapper
                                ]}>
                                <Image
                                source={Theme.icons.home_lesson_active}
                                style={{width:22, height:22}}
                                resizeMode="contain"
                                />
                                <Text style={[styles.top_label, {color:color}]}>{'Lesson'}</Text>
                            </View>
                          :
                            <View style={[
                                styles.top_image_wrapper
                                ]}>
                                <Image
                                source={Theme.icons.home_lesson}
                                style={{width:22, height:22}}
                                resizeMode="contain"
                                />
                                <Text style={styles.top_label}>{'Lesson'}</Text>
                            </View>
                      }
                  </>
                ),
            }}
          />

          <Tab.Screen
            name={Constants.TUTOR_HOME_TRACKING_SCREEN}
            component={HomeTracking}
            options={{
                title: 'Tracking',
                tabBarIcon:({ color, focused }) => (
                    <>
                      {focused?
                            <View style={[
                                styles.top_image_wrapper
                                ]}>
                                <Image
                                source={Theme.icons.home_tracking_active}
                                style={{width:22, height:22}}
                                resizeMode="contain"
                                />
                                <Text style={[styles.top_label, {color:color}]}>{'Tracking'}</Text>
                            </View>
                          :
                            <View style={[
                                styles.top_image_wrapper
                                ]}>
                                <Image
                                source={Theme.icons.home_tracking}
                                style={{width:22, height:22}}
                                resizeMode="contain"
                                />
                                <Text style={styles.top_label}>{'Tracking'}</Text>
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
export default HomeTabNavigation;
