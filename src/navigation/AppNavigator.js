

import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Header from '../components/Header';
import DashboardScreen from '../screens/DashboardScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

/* ✅ DEFINE THIS FIRST */
function ScreenWithHeader({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>

      <Drawer.Screen name="Dashboard">
        {() => (
          <ScreenWithHeader>
            <DashboardScreen />
          </ScreenWithHeader>
        )}
      </Drawer.Screen>

      <Drawer.Screen name="About">
        {() => (
          <ScreenWithHeader>
            <AboutScreen />
          </ScreenWithHeader>
        )}
      </Drawer.Screen>

    </Drawer.Navigator>
  );
}