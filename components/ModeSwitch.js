// Mi Camino App – ModeSwitch.js v1.0.0
// Placeholder 3-click toggle for Mode (Child > Teen > Adult)

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const modes = ['child', 'teen', 'adult'];

export default function ModeSwitch({ onChange }) {
  const [index, setIndex] = React.useState(0);

  const cycleMode = () => {
    const nextIndex = (index + 1) % modes.length;
    setIndex(nextIndex);
    onChange(modes[nextIndex]);
  };

  return (
    <Pressable onPress={cycleMode} style={styles.button}>
      <Text style={styles.label}>Switch Mode</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4f46e5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginLeft: 10
  },
  label: {
    color: 'white',
    fontWeight: '600'
  }
});
