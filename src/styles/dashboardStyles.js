import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  scrollContent: {
    padding: 12,
    paddingBottom: 90, // space for footer
  },

  /* WRAPPER */
  dashboardContWrap: {
    width: '100%',
  },

  /* DESKTOP */
  desktopRow: {
    flexDirection: 'row',
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

  /* MOBILE */
  mobileColumn: {
    flexDirection: 'column',
  },

  mobileBox: {
    width: '100%',
    marginBottom: 12,
  },



});