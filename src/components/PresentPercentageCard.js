import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, { G, Path, Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PresentPercentageCard() {
  const [activeTab, setActiveTab] = useState('ON');

  /* ================= DATA ================= */
  const payrollData = {
    ON: {
      present: 20,
      total: 100,
    },
    OFF: {
      present: 8,
      total: 40,
    },
  };

  const { present, total } = payrollData[activeTab];
  const percentage = Math.round((present / total) * 100);

  /* ================= PIE CONFIG ================= */
  const radius = 45;
  const center = 55;
  const angle = (percentage / 100) * 360;

  /* ================= HELPERS ================= */
  const polarToCartesian = (cx, cy, r, deg) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const describeArc = (x, y, r, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return `
      M ${start.x} ${start.y}
      A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}
      L ${x} ${y}
      Z
    `;
  };

  /* ================= UI ================= */
  return (
    <View style={styles.card}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Present Percentage</Text>

        {/* TOGGLE */}
        <View style={styles.toggleWrap}>
          {['ON', 'OFF'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.toggleBtn,
                activeTab === tab && styles.activeToggle,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  activeTab === tab && styles.activeText,
                ]}
              >
                {tab} PAYROLL
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Icon name="search" size={22} color="#333" />
      </View>

      <View style={styles.divider} />

      {/* CONTENT */}
      <View style={styles.content}>

        {/* PIE CHART */}
        <View style={styles.chartWrap}>
          <Svg width={110} height={110}>
            <G>
              {/* Background */}
              <Circle
                cx={center}
                cy={center}
                r={radius}
                fill="#E8FFF7"
              />

              {/* Present Slice */}
              <Path
                d={describeArc(center, center, radius, 0, angle)}
                fill="#1FD1A5"
              />

              {/* Donut Hole */}
              <Circle
                cx={center}
                cy={center}
                r={28}
                fill="#FFFFFF"
              />
            </G>
          </Svg>

          <Text style={styles.percentText}>
            {percentage} %
          </Text>
        </View>

        {/* RIGHT INFO */}
        <View style={styles.infoWrap}>
          <Text style={styles.bigText}>
            {present}/{total}
          </Text>

          <Text style={styles.infoText}>
            Total Employee : {total}
          </Text>

          <Text style={styles.infoText}>
            No Of Present Employee : {present}
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              VIEW EMPLOYEE LIST
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    elevation: 3,
    marginBottom:15
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F2A44',
  },

  toggleWrap: {
    flexDirection: 'row',
    backgroundColor: '#EAF7FF',
    borderRadius: 20,
    padding: 3,
  },

  toggleBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
  },

  activeToggle: {
    backgroundColor: '#BEEBFF',
  },

  toggleText: {
    fontSize: 12,
    color: '#555',
  },

  activeText: {
    fontWeight: '600',
    color: '#000',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 12,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  chartWrap: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },

  percentText: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: '700',
  },

  infoWrap: {
    flex: 1,
    paddingLeft: 16,
  },

  bigText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 13,
    color: '#444',
  },

  button: {
    marginTop: 10,
    backgroundColor: '#1FD1A5',
    paddingVertical: 8,
    borderRadius: 18,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
