// screens/LegalSupportScreen.js

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function LegalSupportScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>⚖️ Legal Support</Text>
      <Text style={styles.disclaimer}>
        This is general information to help you understand what might happen in court.
        This is <Text style={{ fontWeight: 'bold' }}>not</Text> legal advice.
      </Text>

      <Text style={styles.sectionTitle}>👥 Who You Might See in Court</Text>
      <Text style={styles.text}>👩🏽‍⚖️ Judge – Listens to everyone and makes big decisions.</Text>
      <Text style={styles.text}>👩🏽‍💼 Lawyer – Speaks for someone during the hearing.</Text>
      <Text style={styles.text}>🗣️ Interpreter – Translates so you understand what's being said.</Text>

      <Text style={styles.sectionTitle}>📘 Words You Might Hear</Text>
      <Text style={styles.text}>🛡️ Asylum – Asking to stay because it's not safe in your country.</Text>
      <Text style={styles.text}>👨‍👩‍👧 Sponsor – A trusted adult who helps you while you wait.</Text>
      <Text style={styles.text}>🏛️ Court – The place where important decisions are made.</Text>

      <Text style={styles.sectionTitle}>🧭 What Happens in Court?</Text>
      <Text style={styles.text}>1. You walk in. It’s okay to feel nervous. Someone will help you.</Text>
      <Text style={styles.text}>2. The judge listens carefully to your story.</Text>
      <Text style={styles.text}>3. You might answer questions or sit with someone helping you.</Text>
      <Text style={styles.text}>4. The judge might need more time. Sometimes there are more visits.</Text>

      <Text style={styles.footer}>💛 You are not alone. We are here to help you understand and feel safer.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#4f46e5' },
  disclaimer: { fontSize: 14, fontStyle: 'italic', color: 'red', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 8 },
  text: { fontSize: 16, marginBottom: 8 },
  footer: { marginTop: 32, fontSize: 16, fontStyle: 'italic', textAlign: 'center', color: 'green' },
});
