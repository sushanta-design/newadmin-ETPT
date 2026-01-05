import React from 'react';
import { View, Image, useWindowDimensions } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { loginStyles } from '../styles/loginStyles';

export default function LoginScreen({ onLogin }) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View
      style={[
        loginStyles.root,
        { flexDirection: isTablet ? 'row' : 'column' },
      ]}
    >

      {/* LEFT BRAND PANEL */}
      <View style={loginStyles.brandPanel}>
        <Text style={loginStyles.brandTitle}>HRMS PRO</Text>
        <Text style={loginStyles.brandTagline}>
          Smart Attendance & Workforce Management
        </Text>

        <View style={loginStyles.brandBadge}>
          <Text style={loginStyles.badgeText}>Enterprise Ready</Text>
        </View>
      </View>

      {/* RIGHT LOGIN AREA */}
      <View style={loginStyles.loginArea}>
        <View style={loginStyles.loginCard}>

          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
            }}
            style={loginStyles.logo}
            resizeMode="contain"
          />

          <Text style={loginStyles.loginTitle}>Welcome Back</Text>
          <Text style={loginStyles.loginSubtitle}>
            Sign in to your account
          </Text>

          <TextInput
            label="Email"
            mode="outlined"
            style={loginStyles.input}
            activeOutlineColor="#00B0FF"
            left={<TextInput.Icon icon="email" />}
          />

          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            style={loginStyles.input}
            activeOutlineColor="#00B0FF"
            left={<TextInput.Icon icon="lock" />}
          />

         <Button
  mode="contained"
  onPress={onLogin}   // ✅ THIS triggers dashboard
  style={loginStyles.loginButton}
  buttonColor="#00B0FF"
>
            LOGIN
          </Button>

          <Text style={loginStyles.footer}>
            © 2025 HRMS Pro
          </Text>

        </View>
      </View>

    </View>
  );
}
