// src/components/Logo.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = ({ style }) => (
  <Image source={require('../../assets/yapLogoWhite.png')} style={[styles.logo, style]} />
);

const styles = StyleSheet.create({
  logo: {
    width: 150,  // Set your desired dimensions
    height: 150,
    resizeMode: 'contain'  // Ensures the logo scales correctly within bounds
  }
});

export default Logo;
