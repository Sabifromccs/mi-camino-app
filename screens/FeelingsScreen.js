// Mi Camino App – FeelingsScreen.js v1.7.5
// Upgraded: Dual-language cues + more emotions + next step options

import React, { useState } from 'react';
import { View, Text, Pressable, Switch, Alert, ScrollView } from 'react-native';

const feelingsData = {
  en: [
    { emoji: '😊', label: 'Happy', cue: 'Take a deep breath and smile softly.' },
    { emoji: '😢', label: 'Sad', cue: 'Hug something soft or someone you trust.' },
    { emoji: '😡', label: 'Angry', cue: 'Try squeezing and releasing your fists slowly.' },
    { emoji: '😱', label: 'Scared', cue: 'Look around and name 3 things you see.' },
    { emoji: '😴', label: 'Tired', cue: 'Close your eyes and take 3 slow breaths.' },
    { emoji: '😐', label: 'Confused', cue: 'Ask yourself one thing you *do* know.' },
    { emoji: '😨', label: 'Anxious', cue: 'Put your hand on your chest and breathe in slowly.' },
    { emoji: '🤢', label: 'Nauseous', cue: 'Sit still and take gentle sips of water if you can.' },
    { emoji: '🫠', label: 'Bored', cue: 'Name one thing around you that looks interesting.' },
    { emoji: '🥹', label: 'Hopeful', cue: 'Picture something good happening today.' },
  ],
  es: [
    { emoji: '😊', label: 'Feliz', cue: 'Respira profundamente y sonríe suavemente.' },
    { emoji: '😢', label: 'Triste', cue: 'Abraza algo suave o a alguien de confianza.' },
    { emoji: '😡', label: 'Enojado', cue: 'Aprieta y suelta tus puños lentamente.' },
    { emoji: '😱', label: 'Asustado', cue: 'Mira a tu alrededor y nombra 3 cosas que ves.' },
    { emoji: '😴', label: 'Cansado', cue: 'Cierra los ojos y respira despacio 3 veces.' },
    { emoji: '😐', label: 'Confundido', cue: 'Pregúntate una cosa que *sí* sabes.' },
    { emoji: '😨', label: 'Ansioso', cue: 'Pon tu mano en el pecho y respira lentamente.' },
    { emoji: '🤢', label: 'Con náuseas', cue: 'Siéntate tranquilo y bebe agua si puedes.' },
    { emoji: '🫠', label: 'Aburrido', cue: 'Nombra una cosa cerca de ti que parezca interesante.' },
    { emoji: '🥹', label: 'Esperanzado', cue: 'Imagina que algo bueno pasa hoy.' },
  ]
};

export default function FeelingsScreen({ navigation }) {
  const [isSpanish, setIsSpanish] = useState(false);
  const feelings = isSpanish ? feelingsData.es : feelingsData.en;

  const handleFeelingPress = (feeling) => {
    const title = isSpanish ? 'Emoción seleccionada' : 'Selected Feeling';
    const msg = isSpanish
      ? `Has seleccionado: ${feeling.label}\n\nConsejo: ${feeling.cue}`
      : `You selected: ${feeling.label}\n\nComfort Tip: ${feeling.cue}`;

    Alert.alert(
      title,
      msg,
      [
        {
          text: isSpanish ? 'Necesito un descanso 🧘' : 'I need a break 🧘',
          onPress: () => navigation.navigate('Games'),
        },
        {
          text: isSpanish ? '¿Por qué me siento así? 🤔' : 'Why do I feel this way? 🤔',
          onPress: () => Alert.alert('Coming soon', 'More emotional tools are coming!'),
        },
        {
          text: isSpanish ? 'Solo quería ver' : 'Just wanted to tap',
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{isSpanish ? '¿Cómo te sientes hoy?' : 'How are you feeling today?'}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 4 }}>ES</Text>
          <Switch value={isSpanish} onValueChange={() => setIsSpanish(!isSpanish)} />
          <Text style={{ marginLeft: 4 }}>EN</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 24, justifyContent: 'center' }}>
        {feelings.map((feeling, index) => (
          <Pressable
            key={index}
            onPress={() => handleFeelingPress(feeling)}
            style={{ alignItems: 'center', margin: 16 }}
          >
            <Text style={{ fontSize: 40 }}>{feeling.emoji}</Text>
            <Text>{feeling.label}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
