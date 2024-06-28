import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image, Text, View } from 'react-native';
import { Constants } from '../utils';
import Theme from '../theme/Theme';
import { styles } from './styles';
import HomeTabNavigation from './HomeTabNavigation';
import LessonTabNavigation from './LessonTabNavigation';
import Incidents from '../screens/incidents/Incidents';
import ProfileScreen from '../screens/more/ProfileScreen';
import NotificationsScreen from '../screens/more/NotificationsScreen';
import SendIncident from '../screens/home/incident/SendIncident';
import IncidentSent from '../screens/home/incident/IncidentSent';
import EndedLesson from '../screens/home/lesson/EndedLesson';
import Students from '../screens/students/Students';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Tab = createMaterialBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      initialRouteName={Constants.TUTOR_HOME_SCREEN}
      activeColor={Theme.colors.appColorTutor}
      style={{
        backgroundColor:'white',
        // borderTopLeftRadius: Theme.responsiveSize.size30, 
        // borderTopRightRadius: Theme.responsiveSize.size30,
      }}
      labeled={false}
      shifting={false}
      barStyle={{ 
        backgroundColor: Theme.colors.white,
        borderTopLeftRadius: Theme.responsiveSize.size30, 
        borderTopRightRadius: Theme.responsiveSize.size30,
        height: Theme.responsiveSize.size75,
        position: 'absolute', 
        borderWidth: 0.5,
        borderColor: Theme.colors.appColorLight,
        overflow:'hidden',
        paddingHorizontal: Theme.responsiveSize.size15,
        left: 0,
        right: 0,
      }}
    >
      <Tab.Screen
        name={Constants.TUTOR_HOME_SCREEN}
        component={HomeTabNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'green',
          tabBarIcon: ({ color, focused }) => (
            <>
                {focused?
                    <View style={[
                      styles.image_wrapper,
                      {backgroundColor:color}
                      ]}>
                      <Image
                      source={Theme.icons.parent_home_active}
                      style={styles.image}
                      resizeMode="contain"
                      />
                      <Text style={{color:Theme.colors.white, fontSize:Theme.responsiveSize.size10}}>{'Home'}</Text>
                    </View>
                  :
                    <Image
                    source={Theme.icons.parent_home}
                    style={{width:22, height:22}}
                    resizeMode="contain"
                    />
                }
              </>
          ),
        }}
       />
       <Tab.Screen
        name={Constants.TUTOR_STUDENTS_SCREEN}
        component={Students}
        options={{
          tabBarLabel: 'Students',
          tabBarIcon: ({ color, focused }) => (
            <>
                {focused?
                    <View style={[
                      styles.image_wrapper,
                      {backgroundColor:color}
                      ]}>
                      <Image
                      source={Theme.icons.tutor_students_active}
                      style={styles.image}
                      resizeMode="contain"
                      />
                      <Text style={{color:Theme.colors.white, fontSize:Theme.responsiveSize.size10}}>{'Students'}</Text>
                    </View>
                    :
                    <Image
                    source={Theme.icons.tutor_students}
                    style={{width:22, height:22}}
                    resizeMode="contain"
                    />
                }
              </>
          ),
        }}
       />
       <Tab.Screen
        name={Constants.TUTOR_LESSONS_SCREEN}
        component={LessonTabNavigation}
        options={{
          tabBarLabel: 'Lessons',
          tabBarIcon: ({ color, focused }) => (
            <>
                {focused?
                    <View style={[
                        styles.image_wrapper,
                        {backgroundColor:color}
                        ]}>
                        <Image
                        source={Theme.icons.parent_lessons_active}
                        style={styles.image}
                        resizeMode="contain"
                        />
                        <Text style={{color:Theme.colors.white, fontSize:Theme.responsiveSize.size10}}>{'Lessons'}</Text>
                    </View>
                    :
                    <Image
                    source={Theme.icons.parent_lessons}
                    style={{width:22, height:22}}
                    resizeMode="contain"
                    />
                }
            </>
          ),
        }}
       />
       <Tab.Screen
        name={Constants.TUTOR_INCIDENTS_SCREEN}
        component={Incidents}
        options={{
          tabBarLabel: 'Incidents',
          tabBarIcon: ({ color, focused }) => (
            <>
                {focused?
                    <View style={[
                        styles.image_wrapper,
                        {backgroundColor:color}
                        ]}>
                        <Image
                        source={Theme.icons.tutor_incidents_active}
                        style={{width:18, height:18, marginRight:3}}
                        resizeMode="contain"
                        />
                        <Text style={{color:Theme.colors.white, fontSize:Theme.responsiveSize.size10}}>{'Incidents'}</Text>
                    </View>
                    :
                    <Image
                    source={Theme.icons.tutor_incidents}
                    style={{width:18, height:18}}
                    resizeMode="contain"
                    />
                }
            </>
          ),
        }}
       />
       <Tab.Screen
        name={Constants.TUTOR_MORE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, focused }) => (
            <>
            {focused?
                <View style={[
                    styles.image_wrapper,
                    {backgroundColor:color}
                    ]}>
                    <Image
                    source={Theme.icons.more_active}
                    style={styles.image}
                    resizeMode="contain"
                    />
                    <Text style={styles.label}>{'More'}</Text>
                </View>
                :
                <Image
                source={Theme.icons.more}
                style={{width:22, height:22}}
                resizeMode="contain"
                />
            }
            </>
          ),
        }}
       />
    </Tab.Navigator>
  );
}

export default BottomStack;