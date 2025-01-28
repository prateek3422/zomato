import React from 'react';
import SplashScreen from '@features/auth/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import LoginScreen from '@features/auth/LoginScreen';
import {navigationRef} from '@utils/NavigationUtils';
import UserBottonTab from '@features/tabs/UserBottomTab';

const stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen
          options={{
            animation: 'fade',
          }}
          name="LoginScreen"
          component={LoginScreen}
        />

        <stack.Screen
          options={{
            animation: 'fade',
          }}
          name="UserBottonTab"
          component={UserBottonTab}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
