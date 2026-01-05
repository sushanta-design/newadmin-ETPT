import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

/* ---------------- SCREEN + WIDTH LOGIC ---------------- */

const SCREEN_WIDTH = Dimensions.get('window').width;

// Column widths
const DEPT_WIDTH = 180;
const DESIG_WIDTH = 180;
const SMALL_COL_WIDTH = 70;

// Total columns width
const TOTAL_COLUMN_WIDTH =
  DEPT_WIDTH + DESIG_WIDTH + (8 * SMALL_COL_WIDTH);

// Table width = screen OR content (whichever is larger)
const TABLE_WIDTH = Math.max(SCREEN_WIDTH, TOTAL_COLUMN_WIDTH);

// Row height logic (for vertical scroll after 6 rows)
const ROW_HEIGHT = 42;
const MAX_VISIBLE_ROWS = 4;
const TABLE_BODY_HEIGHT = ROW_HEIGHT * MAX_VISIBLE_ROWS;

/* ---------------- COMPONENT ---------------- */

export default function AttendanceStatusCard() {
  return (
    <View style={styles.card}>

      {/* TOP INFO BAR */}
      <View style={styles.topBar}>
        <Text style={styles.topText} numberOfLines={2}>
          Search By : Dated - 11/04/2025 | Grade - Demo | Company - YUSEN LOGISTICS
          PVT LIMITED (PANCHLA) | Shift - SHIFT-B (10H 0M)
        </Text>

        <View style={styles.searchIcon}>
          <Text style={{ fontSize: 18 }}>🔍</Text>
        </View>
      </View>

      {/* HORIZONTAL SCROLL (COLUMNS) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.table, { width: TABLE_WIDTH }]}>

          {/* TABLE HEADER */}
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.cell, styles.dept]}>DEPT.</Text>
            <Text style={[styles.cell, styles.desig]}>DESIG.</Text>
            <Text style={styles.cell}>STW</Text>
            <Text style={styles.cell}>NOP</Text>
            <Text style={styles.cell}>FD</Text>
            <Text style={styles.cell}>LI</Text>
            <Text style={styles.cell}>EG</Text>
            <Text style={styles.cell}>HD</Text>
            <Text style={styles.cell}>WO</Text>
            <Text style={styles.cell}>HO</Text>
          </View>

          {/* TABLE BODY (VERTICAL SCROLL AFTER 6 ROWS) */}
          <ScrollView
            style={{ maxHeight: TABLE_BODY_HEIGHT }}
            showsVerticalScrollIndicator
          >
            {DATA.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={[styles.cell, styles.dept]}>{item.dept}</Text>
                <Text style={[styles.cell, styles.desig]}>{item.desig}</Text>
                <Text style={styles.cell}>{item.stw}</Text>
                <Text style={styles.cell}>{item.nop}</Text>
                <Text style={styles.cell}>{item.fd}</Text>
                <Text style={styles.cell}>{item.li}</Text>
                <Text style={styles.cell}>{item.eg}</Text>
                <Text style={styles.cell}>{item.hd}</Text>
                <Text style={styles.cell}>{item.wo}</Text>
                <Text style={styles.cell}>{item.ho}</Text>
              </View>
            ))}
          </ScrollView>

        </View>
      </ScrollView>
    </View>
  );
}

/* ---------------- DEMO DATA ---------------- */

const DATA = [
  { dept: 'WAREHOUSE OPERATIONS', desig: 'SHIFT SUPERVISOR', stw: 1, nop: 12, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'HUMAN RESOURCE', desig: 'HR EXECUTIVE', stw: 1, nop: 8, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'ACCOUNTS & FINANCE', desig: 'ACCOUNTANT', stw: 1, nop: 6, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'IT DEPARTMENT', desig: 'SYSTEM ADMIN', stw: 1, nop: 4, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'SECURITY SERVICES', desig: 'SECURITY OFFICER', stw: 1, nop: 15, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'TRANSPORT DEPARTMENT', desig: 'FLEET INCHARGE', stw: 1, nop: 9, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'QUALITY CONTROL', desig: 'QC INSPECTOR', stw: 1, nop: 7, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'ADMINISTRATION', desig: 'ADMIN OFFICER', stw: 1, nop: 5, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'PROCUREMENT', desig: 'PURCHASE EXECUTIVE', stw: 1, nop: 6, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
  { dept: 'FACILITY MANAGEMENT', desig: 'MAINTENANCE SUPERVISOR', stw: 1, nop: 10, fd: 1, li: 0, eg: 0, hd: 0, wo: 0, ho: 0 },
];

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    elevation: 3,
    width: '100%',
    marginBottom: 15,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingBottom: 8,
    marginBottom: 10,
  },

  topText: {
    fontSize: 12,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },

  searchIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#eef6fb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  table: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 6,
    overflow: 'hidden',
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#EDEDED',
    paddingVertical: 8,
    alignItems: 'center',
  },

  header: {
    backgroundColor: '#F5F7FA',
  },

  cell: {
    width: SMALL_COL_WIDTH,
    fontSize: 12,
    textAlign: 'center',
    color: '#222',
    paddingHorizontal: 10,
  },

  dept: {
    width: DEPT_WIDTH,
    textAlign: 'left',
    fontWeight: '600',
  },

  desig: {
    width: DESIG_WIDTH,
    textAlign: 'left',
  },
});
