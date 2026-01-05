import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashboardScreen from '../screens/DashboardScreen';
import AboutScreen from '../screens/AboutScreen';
import ServicesScreen from '../screens/ServicesScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Services" component={ServicesScreen} />
    </Drawer.Navigator>
  );
}
