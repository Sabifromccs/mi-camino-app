// Mi Camino App – DisclaimerBanner.js v1.0.0
// Displays required legal disclaimer with accept logic

import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DisclaimerBanner({ onAccept }) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const checkAcceptance = async () => {
      const hasAccepted = await AsyncStorage.getItem('legalDisclaimerAccepted');
      if (hasAccepted === 'true') {
        setAccepted(true);
        onAccept?.();
      }
    };
    checkAcceptance();
  }, []);

  const acceptDisclaimer = async () => {
    await AsyncStorage.setItem('legalDisclaimerAccepted', 'true');
    setAccepted(true);
    Alert.alert('Acknowledged', 'You may now view legal information.');
    onAccept?.();
  };

  if (accepted) return null;

  return (
    <View style={styles.banner}>
      <Text style={styles.text}>
        🛑 This is general information. This is not legal advice. Only your lawyer can do that.
      </Text>
      <Pressable style={styles.button} onPress={acceptDisclaimer}>
        <Text style={styles.buttonText}>I Understand</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#fde047',
    padding: 16,
    borderRadius: 12,
    margin: 16,
    borderWidth: 1,
    borderColor: '#facc15'
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: '500',
    color: '#111827'
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600'
  }
});
