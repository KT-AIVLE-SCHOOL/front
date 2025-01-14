import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import SplashScreen from './android/app/src/screens/SplashScreen';
import MainScreen from './android/app/src/screens/MainScreen';
import BLEConnection from './android/app/src/screens/BLEConnection';
import LoginScreen from './android/app/src/screens/auth/LoginScreen';
import RegisterScreen from './android/app/src/screens/auth/RegisterScreen';
// React Query Client 생성
// const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Bluetooth" component={BLEConnection} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
