import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AppNavigator from '../navigation/AppNavigator';

export default function AppLayout() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.main}>
        <AppNavigator />
      </View>
      <Footer />
    </View>
  );


}

const styles = StyleSheet.create({
  container: { flex: 1 },
  main: { flex: 1 },
});