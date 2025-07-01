import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LegalUpdateScreen({ navigation }) {
  const legalUpdate = {
    en: "New: Kids now have more time to find a lawyer before court.",
    es: "Nuevo: Ahora los niños tienen más tiempo para encontrar un abogado antes de la corte.",
  };

  const currentLang = 'en'; // Later, we’ll replace this with state or context

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Legal Update</Text>
      <Text style={styles.message}>{legalUpdate[currentLang]}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feelings')}>
        <Text style={styles.buttonText}>Next: How are you feeling?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#34A853',
    padding: 12,
    borderRadius: 8,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
