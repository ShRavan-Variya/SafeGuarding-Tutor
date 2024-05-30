import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './BottomStack';
import { Constants } from '../utils';
import Splash from '../screens/auth/Splash';
import { SafeAreaView } from 'react-native';
import Theme from '../theme/Theme';

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
          name={Constants.TUTOR_BOTTOM}
          component={BottomStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigation;
