// Mi Camino App – ColorSafePlaceScreen.js v1.1.0
// Tap-to-color screen with rotating comfort messages (EN/ES)

import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Switch } from 'react-native';

const pastelColors = ['#FADADD', '#D5E8D4', '#D0E0F0', '#FCE5CD', '#EAD1DC', '#FFF2CC'];

const comfortMessages = {
  en: [
    "Every color you pick brings calm.",
    "Let the colors take care of you.",
    "A little tap, a little peace.",
    "Pick a color that feels gentle.",
    "This space is here for you."
  ],
  es: [
    "Cada color que eliges trae calma.",
    "Deja que los colores te cuiden.",
    "Un toque, un poco de paz.",
    "Elige un color que se sienta suave.",
    "Este espacio es para ti."
  ]
};

export default function ColorSafePlaceScreen() {
  const [bgColor, setBgColor] = useState('#FFF');
  const [isSpanish, setIsSpanish] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const changeColor = () => {
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    setBgColor(randomColor);
    setMessageIndex((prev) => (prev + 1) % comfortMessages.en.length);
  };

  const currentMessage = isSpanish
    ? comfortMessages.es[messageIndex]
    : comfortMessages.en[messageIndex];

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.toggleRow}>
        <Text style={styles.toggleText}>ES</Text>
        <Switch value={isSpanish} onValueChange={() => setIsSpanish(!isSpanish)} />
        <Text style={styles.toggleText}>EN</Text>
      </View>
      <Pressable style={styles.tapBox} onPress={changeColor}>
        <Text style={styles.text}>🎨 {currentMessage}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
  tapBox: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.4)',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 }
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500'
  },
  toggleRow: {
    position: 'absolute',
    top: 60,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center'
  },
  toggleText: {
    marginHorizontal: 6,
    fontSize: 14,
    fontWeight: '600'
  }
});
