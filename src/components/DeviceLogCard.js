import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

export default function DeviceLogCard() {
  const { height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.card,
        { maxHeight: height - 140 }, // 🔥 scroll appears only if overflow
      ]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Device Log</Text>

        <View style={styles.statusCount}>
          <View style={styles.dotGreen} />
          <Text style={styles.countText}>10</Text>
          <View style={styles.dotRed} />
          <Text style={styles.countText}>2</Text>



          
        </View>
      </View>





      <View style={styles.divider} />

      {/* AUTO SCROLL AREA */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        {DATA.map((item, index) => (
          <View key={index} style={styles.item}>
            <View
              style={[
                styles.indexBox,
                item.status === 'Online'
                  ? styles.greenBg
                  : styles.redBg,
              ]}
            >
              <Text
                style={[
                  styles.indexText,
                  item.status === 'Online'
                    ? styles.greenText
                    : styles.redText,
                ]}
              >
                {index + 1}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.serial}>
                Serial No. : {item.serial}
              </Text>
              <Text style={styles.pingText}>
                🕒 Last Ping {item.lastPing}
              </Text>
            </View>

            <Text
              style={[
                styles.statusText,
                item.status === 'Online'
                  ? styles.greenText
                  : styles.redText,
              ]}
            >
              {item.status}
            </Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
}

/* ================= DEMO DATA ================= */

const DATA = [
  { location: 'KOLKATA', serial: 'BKU7182860568', lastPing: '01/01/1900 12:00 am', status: 'Online' },
  { location: 'Kolkata BANTALA', serial: 'BKU7182860568', lastPing: '01/01/1900 12:00 am', status: 'Online' },
  { location: 'Chennai Airport(D)', serial: 'BKU7182860568', lastPing: '01/01/1900 12:00 am', status: 'Offline' },
  { location: 'KOLKATA', serial: 'BKU7182860568', lastPing: '01/01/1900 12:00 am', status: 'Online' },
  { location: 'Chennai Airport(D)', serial: 'BKU7182860568', lastPing: '01/01/1900 12:00 am', status: 'Offline' },
  { location: 'Kolkata BANTALA', serial: 'BKU7182860568', lastPing: '01/01/1900 12:00 am', status: 'Online' },
  { location: 'Kolkata BANTALA', serial: 'BKU7182860568', lastPing: '01/01/1900 12:00 am', status: 'Online' },
];

/* ================= STYLES ================= */

const styles = StyleSheet.create({
    card: {
    backgroundColor: '#fff',
    margin: 0,
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    height:"100%",
    },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },

  statusCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  countText: {
    fontSize: 12,
    marginHorizontal: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#E6E6E6',
    marginVertical: 10,
  },

  item: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ECECEC',
    alignItems: 'center',
  },

  indexBox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  indexText: {
    fontSize: 12,
    fontWeight: '600',
  },

  info: {
    flex: 1,
  },

  location: {
    fontSize: 13,
    fontWeight: '600',
  },

  serial: {
    fontSize: 11,
    color: '#555',
  },

  pingText: {
    fontSize: 11,
    color: '#666',
  },

  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },

  dotGreen: { backgroundColor: '#00C853', width: 8, height: 8, borderRadius: 4 },
  dotRed: { backgroundColor: '#FF3D00', width: 8, height: 8, borderRadius: 4 },
  greenText: { color: '#00C853' },
  redText: { color: '#FF3D00' },
  greenBg: { backgroundColor: '#E8F9F0' },
  redBg: { backgroundColor: '#FFE9E6' },
});
