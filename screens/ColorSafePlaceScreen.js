// Mi Camino App – ColorSafePlaceScreen.js v1.1.0
// Tap to change calming colors with affirmations – bilingual

import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';

const pastelColors = ['#FADADD', '#D5E8D4', '#D0E0F0', '#FCE5CD', '#EAD1DC', '#FFF2CC'];

const affirmations = [
  { en: 'You are safe here.', es: 'Estás a salvo aquí.' },
  { en: 'Take a breath. You’re doing okay.', es: 'Respira. Lo estás haciendo bien.' },
  { en: 'You matter.', es: 'Tú importas.' },
  { en: 'This moment is yours.', es: 'Este momento es tuyo.' },
  { en: 'Peace is allowed.', es: 'La paz es permitida.' },
  { en: 'One color, one pause.', es: 'Un color, una pausa.' }
];

export default function ColorSafePlaceScreen() {
  const [bgColor, setBgColor] = useState('#FFF');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(1))[0];

  const changeColor = () => {
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    const nextPhrase = Math.floor(Math.random() * affirmations.length);
    
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: true })
    ]).start();

    setBgColor(randomColor);
    setPhraseIndex(nextPhrase);
  };

  return (
    <Pressable style={[styles.container, { backgroundColor: bgColor }]} onPress={changeColor}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        {affirmations[phraseIndex].en} {'\n'}<Text style={styles.spanish}>{affirmations[phraseIndex].es}</Text>
      </Animated.Text>
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
  },
  spanish: {
    fontSize: 18,
    color: '#444',
    fontStyle: 'italic'
  }
});
