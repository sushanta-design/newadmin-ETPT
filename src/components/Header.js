import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  FlatList,
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

/* ================= NOTIFICATION DATA ================= */
const INITIAL_NOTIFICATIONS = [
  {
    id: '1',
    empName: 'Amit Kumar',
    empCode: 'EMP1023',
    message: 'Attendance marked successfully',
    time: '2 min ago',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    empName: 'Riya Sharma',
    empCode: 'EMP1045',
    message: 'Leave approved by manager',
    time: '10 min ago',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    empName: 'Sourav Das',
    empCode: 'EMP1099',
    message: 'New company policy published',
    time: '1 hour ago',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    empName: 'Neha Gupta',
    empCode: 'EMP1110',
    message: 'Salary slip generated',
    time: 'Yesterday',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: '5',
    empName: 'Rahul Sen',
    empCode: 'EMP1121',
    message: 'Password changed successfully',
    time: 'Yesterday',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '6',
    empName: 'Ananya Roy',
    empCode: 'EMP1133',
    message: 'Holiday declared for Monday',
    time: '2 days ago',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: '7',
    empName: 'Vikas Pal',
    empCode: 'EMP1144',
    message: 'New task assigned',
    time: '2 days ago',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: '8',
    empName: 'Pooja Mishra',
    empCode: 'EMP1155',
    message: 'Profile updated',
    time: '3 days ago',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
];

export default function Header({
  userName = 'Amit Kumar',
  designation = 'HR Executive',
}) {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [notifications, setNotifications] = useState(
    INITIAL_NOTIFICATIONS.slice(0, 8)
  );
  const [confirmClear, setConfirmClear] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);

  const openModal = type => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType(null);
    setConfirmClear(false);
  };

  const handleClearAll = () => {
    setNotifications([]);
    setConfirmClear(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <MaterialIcons name="menu" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.essBtn}>
          <MaterialIcons name="apps" size={16} color="#fff" />
          <Text style={styles.essText}>ESS</Text>
        </View>

        <View style={styles.right}>
          <TouchableOpacity
            style={styles.iconGap}
            onPress={() => openModal('settings')}
          >
            <MaterialIcons name="settings" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconGap}
            onPress={() => openModal('share')}
          >
            <Feather name="share-2" size={18} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.notification}
            onPress={() => openModal('notification')}
          >
            <MaterialIcons name="notifications-none" size={22} color="#fff" />
            {notifications.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {notifications.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* PROFILE CLICK */}
          <TouchableOpacity
            style={styles.profile}
            onPress={() => setProfileVisible(true)}
          >
            <Image
              source={{ uri: 'https://i.pravatar.cc/150' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>{userName}</Text>
              <Text style={styles.designation}>{designation}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* ================= SETTINGS / SHARE / NOTIFICATION MODAL ================= */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <Pressable style={styles.overlay} onPress={closeModal}>
          <Pressable style={styles.modalBox}>
            {/* SETTINGS */}
            {modalType === 'settings' && (
              <>
                <Text style={styles.modalTitle}>Settings</Text>
                <MenuItem icon="person" label="Profile" />
                <MenuItem icon="lock" label="Change Password" />
                <MenuItem icon="logout" label="Logout" danger />
              </>
            )}

            {/* SHARE */}
            {modalType === 'share' && (
              <>
                <Text style={styles.modalTitle}>Share</Text>
                <MenuItem icon="share" label="Share App" />
                <MenuItem icon="email" label="Email" />
                <MenuItem icon="link" label="Copy Link" />
              </>
            )}

            {/* NOTIFICATIONS */}
            {modalType === 'notification' && (
              <>
                <View style={styles.notificationHeader}>
                  <Text style={styles.modalTitle}>Notifications</Text>
                  {notifications.length > 0 && (
                    <TouchableOpacity onPress={() => setConfirmClear(true)}>
                      <Text style={styles.clearText}>Clear All</Text>
                    </TouchableOpacity>
                  )}
                </View>

                {confirmClear && (
                  <View style={styles.confirmBox}>
                    <Text>Clear all notifications?</Text>
                    <View style={styles.confirmActions}>
                      <TouchableOpacity
                        onPress={() => setConfirmClear(false)}
                      >
                        <Text>NOT OK</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={handleClearAll}
                        style={styles.okBtn}
                      >
                        <Text style={{ color: '#fff' }}>OK</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

                {notifications.length === 0 ? (
                  <Text style={styles.emptyText}>
                    No new notifications
                  </Text>
                ) : (
                  <FlatList
                    data={notifications}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <View style={styles.notificationItem}>
                        <Image
                          source={{ uri: item.avatar }}
                          style={styles.notifyAvatar}
                        />
                        <View style={{ flex: 1 }}>
                          <Text style={styles.empName}>
                            {item.empName} ({item.empCode})
                          </Text>
                          <Text style={styles.message}>
                            {item.message}
                          </Text>
                          <Text style={styles.time}>{item.time}</Text>
                        </View>
                      </View>
                    )}
                  />
                )}
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>

      {/* ================= PROFILE RIGHT PANEL ================= */}
      <Modal transparent visible={profileVisible} animationType="slide">
        <Pressable
          style={styles.profileOverlay}
          onPress={() => setProfileVisible(false)}
        >
          <Pressable style={styles.profilePanel}>
            <View style={styles.profileHeader}>
              <Text style={styles.profileTitle}>My Profile</Text>
              <TouchableOpacity onPress={() => setProfileVisible(false)}>
                <MaterialIcons name="close" size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.profileUserBox}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/150' }}
                style={styles.profileBigAvatar}
              />
              <Text style={styles.profileName}>{userName}</Text>
              <Text style={styles.profileRole}>{designation}</Text>
              <Text style={styles.profileCode}>EMP1023</Text>
            </View>

            <ProfileRow label="Email" value="amit.kumar@company.com" />
            <ProfileRow label="Mobile" value="+91 98765 43210" />
            <ProfileRow label="Department" value="Human Resource" />
            <ProfileRow label="Location" value="Kolkata" />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

/* ================= REUSABLE ================= */

const MenuItem = ({ icon, label, danger }) => (
  <TouchableOpacity style={styles.menuItem}>
    <MaterialIcons
      name={icon}
      size={18}
      color={danger ? '#E53935' : '#2E6E4D'}
    />
    <Text
      style={[
        styles.menuText,
        danger && { color: '#E53935' },
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

const ProfileRow = ({ label, value }) => (
  <View style={styles.profileRow}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: '#2E6E4D',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  right: { flexDirection: 'row', alignItems: 'center' },
  iconGap: { marginLeft: 14 },

  essBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  essText: { color: '#fff', marginLeft: 6, fontWeight: '600' },

  notification: { marginHorizontal: 14 },
  badge: {
    position: 'absolute',
    right: -4,
    top: -4,
    backgroundColor: '#00C853',
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },

  profile: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 34, height: 34, borderRadius: 17, marginRight: 8 },
  name: { color: '#fff', fontSize: 13, fontWeight: '600' },
  designation: { color: '#D0E6DA', fontSize: 11 },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 320,
    maxHeight: 450,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
  },

  modalTitle: { fontSize: 16, fontWeight: '700' },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuText: { marginLeft: 12, fontSize: 14 },

  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  clearText: {
    fontSize: 12,
    color: '#2E6E4D',
    fontWeight: '600',
  },

  notificationItem: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  notifyAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  empName: { fontSize: 13, fontWeight: '600' },
  message: { fontSize: 12, color: '#444', marginTop: 2 },
  time: { fontSize: 11, color: '#888', marginTop: 2 },

  emptyText: {
    textAlign: 'center',
    paddingVertical: 40,
    color: '#777',
  },

  confirmBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  confirmActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 6,
  },
  okBtn: {
    backgroundColor: '#2E6E4D',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 10,
  },

  profileOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profilePanel: {
    width: 320,
    height: '100%',
    backgroundColor: '#fff',
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 8,
  },
  profileTitle: { fontSize: 15, fontWeight: '600' },
  profileUserBox: { alignItems: 'center', marginVertical: 16 },
  profileBigAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 8,
  },
  profileName: { fontSize: 15, fontWeight: '600' },
  profileRole: { fontSize: 12, color: '#666' },
  profileCode: { fontSize: 11, color: '#2E6E4D' },

  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  rowLabel: { fontSize: 12, color: '#666' },
  rowValue: { fontSize: 12, fontWeight: '500' },
});
