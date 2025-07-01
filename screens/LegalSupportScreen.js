// screens/LegalSupportScreen.js

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function LegalSupportScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>⚖️ Legal Support</Text>
      <Text style={styles.disclaimer}>
        This is general information to help you understand what might happen in court. This is **not** legal advice.
      </Text>

      <Text style={styles.sectionTitle}>Who You Might See in Court</Text>
      <Text style={styles.text}>👩🏽‍⚖️ Judge – The person who listens and makes decisions.</Text>
      <Text style={styles.text}>👩🏽‍💼 Lawyer – Someone who can speak for you or someone else in court.</Text>
      <Text style={styles.text}>🗣️ Interpreter – Helps translate if you don’t understand the language.</Text>

      <Text style={styles.sectionTitle}>Glossary (Words You Might Hear)</Text>
      <Text style={styles.text}>📘 Asylum – Asking for protection because it’s not safe in your home country.</Text>
      <Text style={styles.text}>👨‍👩‍👧 Sponsor – A trusted adult who might take care of you while you wait for your case.</Text>
      <Text style={styles.text}>🏛️ Court – A place where people make legal decisions.</Text>

      <Text style={styles.sectionTitle}>What Happens in Court?</Text>
      <Text style={styles.text}>1. You walk in. It might feel scary, but someone is there to help you.</Text>
      <Text style={styles.text}>2. The judge listens to your case.</Text>
      <Text style={styles.text}>3. You may answer questions or just sit quietly with a helper.</Text>
      <Text style={styles.text}>4. The judge doesn’t decide everything in one day. It takes time.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  disclaimer: { fontSize: 14, fontStyle: 'italic', marginBottom: 16, color: 'red' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 8 },
  text: { fontSize: 16, marginBottom: 8 },
});
