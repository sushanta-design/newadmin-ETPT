import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>

      <Text style={styles.paragraph}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <Text style={styles.paragraph}>
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
        varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
        magna felis sollicitudin mauris.
      </Text>

      <Text style={styles.paragraph}>
        Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus
        vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut
        ullamcorper, ligula eu tempor congue, eros est euismod turpis, id
        tincidunt sapien risus a quam.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#2E6E4D',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#444',
    marginBottom: 14,
  },
});
