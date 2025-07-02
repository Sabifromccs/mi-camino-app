// Mi Camino App – LegalSupportScreen.js v1.8.4
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DisclaimerBanner from '../components/DisclaimerBanner';
import ModeSwitch from '../components/ModeSwitch';

export default function LegalSupportScreen() {
  const [accepted, setAccepted] = useState(false);
  const [mode, setMode] = useState('child'); // Options: child, teen, adult

  useEffect(() => {
    const checkAcceptance = async () => {
      const hasAccepted = await AsyncStorage.getItem('legalDisclaimerAccepted');
      if (hasAccepted === 'true') setAccepted(true);
    };
    checkAcceptance();
  }, []);

  const handleAccept = () => setAccepted(true);
  const handleModeChange = (newMode) => setMode(newMode);

  if (!accepted) {
    return <DisclaimerBanner onAccept={handleAccept} />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚖️ Legal Support ({mode.toUpperCase()})</Text>
        <ModeSwitch onChange={handleModeChange} />
        <Text style={styles.modeHint}>🔄 Switch Mode / Cambiar Edad</Text>
      </View>

      {mode === 'child' && (
        <>
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
        </>
      )}

      {mode === 'teen' && (
        <Text style={styles.comingSoon}>
          Teen mode coming soon. We’ll explain your rights, expectations, and what you can ask for.
        </Text>
      )}

      {mode === 'adult' && (
        <Text style={styles.comingSoon}>
          Adult mode coming soon. Legal glossary, recent law changes, and self-advocacy tools will live here.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { flexDirection: 'column', alignItems: 'flex-start', marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#4f46e5' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 8 },
  text: { fontSize: 16, marginBottom: 8 },
  footer: { marginTop: 32, fontSize: 16, fontStyle: 'italic', textAlign: 'center', color: 'green' },
  comingSoon: { fontSize: 16, fontStyle: 'italic', marginTop: 24 },
  modeHint: { fontSize: 14, fontStyle: 'italic', marginTop: 8, color: '#6b7280' },
});
