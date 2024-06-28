import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import {Constants} from '../utils';
import Splash from '../screens/auth/Splash';
import Login from '../screens/auth/Login';
import IncidentSent from '../screens/home/incident/IncidentSent';
import SendIncident from '../screens/home/incident/SendIncident';
import NotificationsScreen from '../screens/more/NotificationsScreen';
import EndedLesson from '../screens/home/lesson/EndedLesson';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={Constants.SPLASH_SCREEN}
        screenOptions={({navigation, route}) => ({})}>
        <Stack.Screen
          name={Constants.SPLASH_SCREEN}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.LOGIN_SCREEN}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.TUTOR_BOTTOM}
          component={BottomStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.Incident_Sent_Screen}
          component={IncidentSent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.Send_Incident_Screen}
          component={SendIncident}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.Notification_Screen}
          component={NotificationsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.Ended_Lesson}
          component={EndedLesson}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigation;
