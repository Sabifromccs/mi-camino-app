import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LaunchScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/launch-image.png')} style={styles.image} />

      <Text style={styles.title}>Mi Camino / My Journey App</Text>

      <Text style={styles.subtitle}>
        You're not alone. You're safe here.{"\n"}
        I'm here to help—and you're not doing this by yourself.
      </Text>

      <Text style={styles.arkash}>—ARKASH</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Language')}>
        <Text style={styles.buttonText}>Start</Text>
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
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  arkash: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
