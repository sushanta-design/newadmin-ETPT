import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function BirthdayCard() {
  return (
    <View style={styles.card}>
      {/* LEFT CONTENT */}
      <View style={styles.leftContent}>
        <Text style={styles.title}>Today's Birthday!</Text>

        <Text style={styles.description}>
          <Text style={styles.bold}>Puja Mishra, Rajesh Sen</Text> and{' '}
          <Text style={styles.bold}>10 others</Text> have birthday today!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>WISH THEM ALL</Text>
        </TouchableOpacity>
      </View>

      {/* RIGHT IMAGE */}
      <Image
        source={{
          uri: 'https://diligentitech.com/new_admin/images/hbd1.png',
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF7FF',
    padding: 16,
    borderRadius: 14,
    marginBottom:15
  },

  leftContent: {
    flex: 1,
    paddingRight: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
    marginBottom: 12,
  },

  bold: {
    fontWeight: '700',
    color: '#000',
  },

  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#1DA1F2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  image: {
    width: 72,
    height: 72,
  },
});