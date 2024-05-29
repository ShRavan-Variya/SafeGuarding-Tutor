import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image, Text, View } from 'react-native';
import { Constants } from '../utils';
import Theme from '../theme/Theme';
import { styles } from './styles';
import HomeScreen from '../screens/home/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      initialRouteName={Constants.TUTOR_HOME_SCREEN}
      activeColor={Theme.colors.appColorTutor}
      labeled={false}
      barStyle={{ 
        backgroundColor: 'green',
        borderTopLeftRadius: Theme.responsiveSize.size30, 
        borderTopRightRadius: Theme.responsiveSize.size30,
      }}
    >
      <Tab.Screen
        name={Constants.TUTOR_HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <>
                {focused?
                    <View style={[
                        styles.image_wrapper,
                        {z:color}
                        ]}>
                        <Image
                        source={Theme.icons.parent_home_active}
                        style={styles.image}
                        resizeMode="contain"
                        />
                        <Text style={{color:Theme.colors.white, fontSize:Theme.responsiveSize.size12}}>{'Home'}</Text>
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
        component={HomeScreen}
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
                        <Text style={{color:Theme.colors.white, fontSize:Theme.responsiveSize.size12}}>{'Students'}</Text>
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
        component={HomeScreen}
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
                        <Text style={{color:Theme.colors.white, fontSize:Theme.responsiveSize.size12}}>{'Lessons'}</Text>
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
        component={HomeScreen}
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
                        <Text style={{color:Theme.colors.white, fontSize:Theme.responsiveSize.size12}}>{'Incidents'}</Text>
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
        component={HomeScreen}
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
                    source={Theme.icons.parent_profile_active}
                    style={styles.image}
                    resizeMode="contain"
                    />
                    <Text style={styles.label}>{'More'}</Text>
                </View>
                :
                <Image
                source={Theme.icons.parent_profile}
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