// screens/LanguageScreen.js
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function LanguageScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🌐 Language Options</Text>
      <Image
        source={require('../assets/launch-image.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        This app works in both English 🇺🇸 and Spanish 🇲🇽.
      </Text>
      <Text style={styles.text}>
        You can change your language anytime using the switch at the top of each screen.
      </Text>
      <Text style={styles.text}>
        We want you to feel safe, seen, and understood no matter what language you speak at home.
      </Text>
      <Text style={styles.text}>
        If your parents speak Spanish and you speak English (or both), that’s okay. This app is for everyone.
      </Text>
      <Text style={styles.text}>
        In future updates, you’ll be able to tap words to see what they mean in both languages. We’re just getting started.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  image: { width: '100%', height: 200, marginBottom: 16, borderRadius: 12 },
  text: { fontSize: 16, marginBottom: 12, lineHeight: 22 },
});
