import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { ProgressBar, TextInput } from 'react-native-paper';

/* ================= DATA ================= */

const DATA = [
  {
    id: '1',
    title: 'CC GUWAHATI',
    short: 'CG',
    present: 1,
    total: 4,
    percent: 25,
    color: '#ff3b30',
    payroll: 'on',
  },
  {
    id: '2',
    title: 'CHENNAI DOMESTIC',
    short: 'CD',
    present: 0,
    total: 0,
    percent: 0,
    color: '#ff3b30',
    payroll: 'on',
  },
  {
    id: '3',
    title: 'EXPRESS AVENUE CHENNAI',
    short: 'EC',
    present: 80,
    total: 100,
    percent: 80,
    color: '#34c759',
    payroll: 'on',
  },
  {
    id: '4',
    title: 'LULU, KOCHI',
    short: 'LK',
    present: 40,
    total: 100,
    percent: 40,
    color: '#ffcc00',
    payroll: 'off',
  },
  {
    id: '5',
    title: 'LULU, KOCHI 2',
    short: 'LK',
    present: 50,
    total: 100,
    percent: 50,
    color: '#ffcc00',
    payroll: 'off',
  },
  {
    id: '6',
    title: 'LULU, KOCHI 3',
    short: 'LK',
    present: 70,
    total: 100,
    percent: 70,
    color: '#34c759',
    payroll: 'off',
  },
];

/* ================= COMPONENT ================= */

export default function PresentAbsentStatus() {
  const [activeTab, setActiveTab] = useState('on');
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const listRef = useRef(null);
  const { height } = useWindowDimensions();

  /* 🔁 Filter data */
  const filteredData = DATA.filter(item => {
    const matchPayroll = item.payroll === activeTab;
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchPayroll && matchSearch;
  });

  /* 🔝 Reset scroll when tab changes */
  useEffect(() => {
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  }, [activeTab]);

  /* ================= RENDER ITEM ================= */

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.short}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.location}>{item.title}</Text>
        <Text style={styles.subText}>
          Present Employee {item.present}/{item.total}
        </Text>

        <ProgressBar
          progress={item.percent / 100}
          color={item.color}
          style={styles.progress}
        />
      </View>

      <Text style={[styles.percent, { color: item.color }]}>
        {item.percent}%
      </Text>
    </View>
  );

  /* ================= UI ================= */

  return (
    <View
      style={[
        styles.card,
        { maxHeight: height - 140 }, // scroll only if needed
      ]}
    >
      {/* TITLE + SEARCH */}
      <View style={styles.title_option}>
        <Text style={styles.title}>
          Today's Present Absent Status
        </Text>

        {!showSearch ? (
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => setShowSearch(true)}
          >
            <Text style={styles.searchIconText}>🔍</Text>
          </TouchableOpacity>
        ) : (
          <TextInput
            mode="outlined"
            placeholder="Search location"
            value={search}
            onChangeText={setSearch}
            autoFocus
            style={styles.search}
            left={<TextInput.Icon icon="magnify" />}
            right={
              <TextInput.Icon
                icon="close"
                onPress={() => {
                  setSearch('');
                  setShowSearch(false);
                }}
              />
            }
          />
        )}
      </View>

      {/* TABS */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'on' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('on')}
        >
          <Text style={styles.tabText}>ON PAYROLL</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'off' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('off')}
        >
          <Text style={styles.tabText}>OFF PAYROLL</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        ref={listRef}
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        extraData={activeTab}   // 🔥 IMPORTANT
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No results found</Text>
        }
      />
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 4,
  },

  title_option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },

  searchIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#eef6fb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchIconText: {
    fontSize: 18,
  },

  search: {
    width: 180,
    height: 40,
    backgroundColor: '#fff',
  },

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#eef6fb',
    borderRadius: 12,
    marginBottom: 16,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
  },

  activeTab: {
    backgroundColor: '#bfe9ff',
  },

  tabText: {
    fontSize: 13,
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  avatarText: {
    fontWeight: '700',
  },

  location: {
    fontSize: 14,
    fontWeight: '600',
  },

  subText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },

  progress: {
    height: 6,
    borderRadius: 6,
    backgroundColor: '#eee',
  },

  percent: {
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 8,
  },

  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
});
