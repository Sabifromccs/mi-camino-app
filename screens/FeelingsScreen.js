// 🧠 FeelingsScreen v1.7.4 – Emoji Tap Upgrade (Popup + Comfort Cue)

import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Alert, Switch } from 'react-native';

const feelingsList = [
  { emoji: '😊', label: 'Happy', label_es: 'Feliz', cue: 'Celebrate your joy with a smile!' },
  { emoji: '😢', label: 'Sad', label_es: 'Triste', cue: 'Take deep breaths and give yourself a hug.' },
  { emoji: '😡', label: 'Angry', label_es: 'Enojado', cue: 'Try squeezing your hands, then releasing slowly.' },
  { emoji: '😰', label: 'Scared', label_es: 'Asustado', cue: 'Look around and name 3 things you see.' },
  { emoji: '😴', label: 'Tired', label_es: 'Cansado', cue: 'Close your eyes and breathe gently for 10 seconds.' },
];

export default function FeelingsScreen() {
  const [isSpanish, setIsSpanish] = useState(false);

  const handleFeelingPress = (feeling) => {
    const title = isSpanish ? 'Emoción seleccionada' : 'Feeling Selected';
    const message = isSpanish
      ? `Has seleccionado: ${feeling.label_es}\n\nConsejo: ${feeling.cue}`
      : `You selected: ${feeling.label}\n\nComfort Tip: ${feeling.cue}`;

    Alert.alert(title, message, [
      { text: isSpanish ? 'Gracias' : 'Thanks', onPress: () => {} }
    ]);
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{isSpanish ? '¿Cómo te sientes hoy?' : 'How Are You Feeling Today?'}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 8 }}>ES</Text>
          <Switch value={isSpanish} onValueChange={() => setIsSpanish(!isSpanish)} />
          <Text style={{ marginLeft: 8 }}>EN</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {feelingsList.map((feeling, index) => (
          <Pressable
            key={index}
            onPress={() => handleFeelingPress(feeling)}
            style={{ padding: 16, alignItems: 'center', width: '30%', marginVertical: 10 }}
          >
            <Text style={{ fontSize: 36 }}>{feeling.emoji}</Text>
            <Text style={{ marginTop: 4, fontSize: 16 }}>
              {isSpanish ? feeling.label_es : feeling.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
