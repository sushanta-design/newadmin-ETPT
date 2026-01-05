import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ApprovalCards() {
  return (
    <View style={styles.container}>

      {/* OD APPROVAL */}   
      <View style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#1dd3c5' }]}>
          <MaterialCommunityIcons name="clock-outline" size={22} color="#fff" />
        </View>

        <View style={styles.textBox}>
          <Text style={styles.title}>OD Approval</Text>
          <Text style={styles.count}>10</Text>
        </View>

        <View style={[styles.wave, { borderColor: '#1dd3c540' }]} />
      </View>

      {/* LEAVE APPROVAL */}
      <View style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#2e7d32' }]}>
          <MaterialCommunityIcons name="walk" size={22} color="#fff" />
        </View>

        <View style={styles.textBox}>
          <Text style={styles.title}>Leave Approval</Text>
          <Text style={styles.count}>10</Text>
        </View>

        <View style={[styles.wave, { borderColor: '#2e7d3240' }]} />
      </View>

      {/* PROBATION COMPLETED */}
      <View style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#1e88e5' }]}>
          <MaterialCommunityIcons
            name="clipboard-check-outline"
            size={22}
            color="#fff"
          />
        </View>

        <View style={styles.textBox}>
          <Text style={styles.title}>Probation Completed</Text>
          <Text style={styles.count}>10</Text>
        </View>

        <View style={[styles.wave, { borderColor: '#1e88e540' }]} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    elevation: 3,
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
    marginLeft: 12,
    zIndex: 2,
  },

  title: {
    fontSize: 13,
    color: '#555',
  },

  count: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginTop: 2,
  },

  wave: {
    position: 'absolute',
    right: -30,
    top: -30,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
  },
});
