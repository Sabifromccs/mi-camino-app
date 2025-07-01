import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const feelings = [
  { emoji: '😊', en: 'Happy', es: 'Feliz' },
  { emoji: '😢', en: 'Sad', es: 'Triste' },
  { emoji: '😠', en: 'Angry', es: 'Bravo/a' },
  { emoji: '😨', en: 'Scared', es: 'Asustado/a' },
  { emoji: '😴', en: 'Tired', es: 'Cansado/a' },
  { emoji: '🤔', en: 'Confused', es: 'Confundido/a' }
];

export default function FeelingsScreen({ navigation }) {
  const [selected, setSelected] = useState(null);
  const currentLang = 'en'; // Future: pull this from state or context

  const handleSelect = (feeling) => {
    setSelected(feeling);
    setTimeout(() => navigation.navigate('Games'), 800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How are you feeling?</Text>
      <FlatList
        data={feelings}
        keyExtractor={(item) => item.emoji}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.feeling} onPress={() => handleSelect(item)}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.label}>{item[currentLang]}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  list: {
    alignItems: 'center',
  },
  feeling: {
    alignItems: 'center',
    margin: 16,
  },
  emoji: {
    fontSize: 48,
  },
  label: {
    fontSize: 18,
    marginTop: 8,
  },
});
