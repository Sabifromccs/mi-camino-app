// Mi Camino App – ColorSafePlaceScreen.js v1.0.0
// Simple, calm tap-to-color screen for emotional soothing

import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const pastelColors = ['#FADADD', '#D5E8D4', '#D0E0F0', '#FCE5CD', '#EAD1DC', '#FFF2CC'];

export default function ColorSafePlaceScreen() {
  const [bgColor, setBgColor] = useState('#FFF');

  const changeColor = () => {
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    setBgColor(randomColor);
  };

  return (
    <Pressable style={[styles.container, { backgroundColor: bgColor }]} onPress={changeColor}>
      <Text style={styles.text}>🎨 Tap to change colors and feel calm</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500'
  }
});

