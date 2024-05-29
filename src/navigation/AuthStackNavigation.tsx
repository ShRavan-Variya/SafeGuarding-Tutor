import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import Theme from '../theme/Theme';
import { Constants } from '../utils';
import Splash from '../screens/auth/Splash';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColorLight}
        barStyle={'light-content'}
      />
      <Stack.Navigator
        initialRouteName={Constants.SPLASH_SCREEN}
        screenOptions={({navigation, route}) => ({})}>
        <Stack.Screen
          name={Constants.SPLASH_SCREEN}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.TUTOR_BOTTOM}
          component={BottomStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigation;
