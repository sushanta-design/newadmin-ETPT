import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import PresentAbsentStatus from '../components/PresentAbsentStatus';
import PresentPercentageCard from '../components/PresentPercentageCard';
import BirthdayCard from '../components/BirthdayCard';
import AttendanceStatusCard from '../components/AttendanceStatusCard';
import ApprovalCards from '../components/ApprovalCards';
import DeviceLogCard from '../components/DeviceLogCard';

export default function DashboardScreen() {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 768;

  /* ================= MOBILE ================= */
  if (isMobile) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.mobileScroll}
        showsVerticalScrollIndicator={false}
      >
        <PresentAbsentStatus />
        <PresentPercentageCard />
        <BirthdayCard />
        <AttendanceStatusCard />
        <ApprovalCards />
        <DeviceLogCard />

        {/* footer gap */}
        <View style={{ height: 20 }} />
      </ScrollView>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <View style={styles.container}>
      <View style={[styles.dashboardContWrap, styles.desktopRow]}>

        {/* LEFT */}
        <View style={styles.leftSidebar}>
          <PresentAbsentStatus />
        </View>

        {/* CENTER (ONLY SCROLL HERE) */}
        <View style={styles.mainCont}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <PresentPercentageCard />
            <BirthdayCard />
            <AttendanceStatusCard />
            <ApprovalCards />
          </ScrollView>
        </View>

        {/* RIGHT */}
        <View style={styles.rightSidebar}>
          <DeviceLogCard />
        </View>

      </View>

      <View style={{ height: 20 }} />
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  /* ---------- DESKTOP ---------- */
  dashboardContWrap: {
    flex: 1,
    width: '100%',
    padding: 12,
  },

  desktopRow: {
    flexDirection: 'row',
    alignItems: 'stretch', // equal height columns
  },

  leftSidebar: {
    flex: 1,
    marginRight: 8,
  },

  mainCont: {
    flex: 2,
    marginHorizontal: 8,
  },

  rightSidebar: {
    flex: 1,
    marginLeft: 8,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  /* ---------- MOBILE ---------- */
  mobileScroll: {
    padding: 12,
  },
});

