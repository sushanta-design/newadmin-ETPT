import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  /* ROOT */
  root: {
    flex: 1,
    backgroundColor: '#EEF2FF',
  },

  brandPanel: {
    flex: 1.4,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#2563EB',
  },

  brandTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
  },

  brandTagline: {
    fontSize: 16,
    color: '#E0E7FF',
    lineHeight: 24,
    maxWidth: 320,
  },

  brandBadge: {
    marginTop: 32,
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },

  badgeText: {
    color: '#ECFEFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  /* RIGHT LOGIN AREA */
  loginArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F8FAFF',
  },

  /* GLASS CARD */
  loginCard: {
    width: '100%',
    maxWidth: 380,
    borderRadius: 22,
    padding: 30,
    backgroundColor: 'rgba(255,255,255,0.92)',
    elevation: 12,
    shadowColor: '#2563EB',
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },

  logo: {
    width: 140,
    height: 48,
    alignSelf: 'center',
    marginBottom: 22,
  },

  loginTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 6,
  },

  loginSubtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 26,
  },

  input: {
    marginBottom: 18,
    backgroundColor: '#FFFFFF',
  },

  /* COLORFUL BUTTON */
  loginButton: {
    marginTop: 8,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: '#2563EB',
  },

  footer: {
    marginTop: 26,
    fontSize: 11,
    color: '#94A3B8',
    textAlign: 'center',
  },
});
