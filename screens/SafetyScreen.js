import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function SafetyScreen({ navigation }) {
  const emergencyNumber = '911';

  const handleEmergencyCall = () => {
    Linking.openURL(`tel:${emergencyNumber}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🆘 Safety & Emergency</Text>
      <Text style={styles.text}>
        If you ever feel unsafe, press the button below to call for help.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleEmergencyCall}>
        <Text style={styles.buttonText}>Call {emergencyNumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#FF3B30',
    padding: 16,
    borderRadius: 10,
    width: 200,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  backButton: {
    marginTop: 30
  },
  backText: {
    fontSize: 16,
    color: '#007AFF'
  }
});
