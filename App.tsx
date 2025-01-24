<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import SplashScreen from './android/app/src/screens/SplashScreen';
import HomeScreen from './android/app/src/screens/home/HomeScreen';
import ChatbotScreen from './android/app/src/screens/chatbot/ChatbotScreen';
import SettingScreen from './android/app/src/screens/setting/SettingScreen';
import BLEConnection from './android/app/src/screens/bluetooth/BLEConnection';
import LoginScreen from './android/app/src/screens/auth/Login/LoginScreen';
import IdFind from './android/app/src/screens/auth/Login/IdFInd';
import PasswordFind from './android/app/src/screens/auth/Login/PasswordFind';
import RegisterEmail from './android/app/src/screens/auth/Register/RegisteEmail';
import RegisterName from './android/app/src/screens/auth/Register/RegisterName';
import RegisterPassword from './android/app/src/screens/auth/Register/RegisterPassword';
import ChangePassword from './android/app/src/screens/setting/ChangePassword';
import ConfirmPassword from './android/app/src/screens/auth/Register/CofirmPassword';
import PersonalInfo from './android/app/src/screens/auth/Register/PersonalInfo';
// React Query Client 생성
// const queryClient = new QueryClient();s
import { Buffer } from 'buffer';
global.Buffer = Buffer;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chatbot" component={ChatbotScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Info" component={PersonalInfo} />
          <Stack.Screen name="Email" component={RegisterEmail} />
          <Stack.Screen name="Name" component={RegisterName} />
          <Stack.Screen name="IdFind" component={IdFind} />
          <Stack.Screen name="PasswordFind" component={PasswordFind} />
          <Stack.Screen name="Password" component={RegisterPassword} />
          <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
          <Stack.Screen name="BLEConnection" component={BLEConnection} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import SplashScreen from './android/app/src/screens/SplashScreen';
import HomeScreen from './android/app/src/screens/HomeScreen';
import ChatbotScreen from './android/app/src/screens/ChatbotScreen';
import SettingScreen from './android/app/src/screens/SettingScreen';
import BLEConnection from './android/app/src/screens/BLEConnection';
import LoginScreen from './android/app/src/screens/auth/Login/LoginScreen';
import IdFind from './android/app/src/screens/auth/Login/IdFInd';
import PasswordFind from './android/app/src/screens/auth/Login/PasswordFind';
import RegisterEmail from './android/app/src/screens/auth/Register/RegisteEmail';
import RegisterName from './android/app/src/screens/auth/Register/RegisterName';
import RegisterPassword from './android/app/src/screens/auth/Register/RegisterPassword';
import ConfirmPassword from './android/app/src/screens/auth/Register/CofirmPassword';
import PersonalInfo from './android/app/src/screens/auth/Register/PersonalInfo';
// React Query Client 생성
// const queryClient = new QueryClient();s

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chatbot" component={ChatbotScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Info" component={PersonalInfo} />
          <Stack.Screen name="Email" component={RegisterEmail} />
          <Stack.Screen name="Name" component={RegisterName} />
          <Stack.Screen name="IdFind" component={IdFind} />
          <Stack.Screen name="PasswordFind" component={PasswordFind} />
          <Stack.Screen name="Password" component={RegisterPassword} />
          <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
          <Stack.Screen name="BLEConnection" component={BLEConnection} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
>>>>>>> 2a78710 (merge)
