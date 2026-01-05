import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';   // ✅ FIXED
import AppLayout from '../layouts/AppLayout';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen
              {...props}
              onLogin={() => setIsLoggedIn(true)}
            />
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="App" component={AppLayout} />
      )}
    </Stack.Navigator>
  );
}