// SABI2025🔥 - Full Flow v1.7 | Game Demo + Debug Path Fixes
// Project: Mi Camino App | Victor x ARKASH

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, ScrollView, Pressable, Switch, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

// Replacing placeholder screens with real ones
import FeelingsScreen from './screens/FeelingsScreen';
import LanguageScreen from './screens/LanguageScreen';
import LaunchScreen from './screens/LaunchScreen';
import LegalUpdateScreen from './screens/LegalUpdateScreen';
import SafetyScreen from './screens/SafetyScreen';
import LegalSupportScreen from './screens/LegalSupportScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const glossaryData = {
  en: [
    {
      id: '1',
      term: 'Overwhelmed',
      description: 'Feeling like too many emotions or tasks are happening at once.',
      example: 'I had so much on my plate, I just shut down.',
      cue: 'Take three deep breaths and count to 10.'
    },
    {
      id: '2',
      term: 'Hopeful',
      description: 'Believing something good can happen even in hard times.',
      example: 'Even though things are hard, I believe it’ll work out.',
      cue: 'Picture a safe place or memory that brings peace.'
    }
  ],
  es: [
    {
      id: '1',
      term: 'Abrumado',
      description: 'Sentir que hay demasiadas emociones o tareas al mismo tiempo.',
      example: 'Tenía tantas cosas que hacer que simplemente me bloqueé.',
      cue: 'Respira hondo tres veces y cuenta hasta 10.'
    },
    {
      id: '2',
      term: 'Esperanzado',
      description: 'Creer que algo bueno puede suceder incluso en tiempos difíciles.',
      example: 'Aunque las cosas están difíciles, creo que saldrán bien.',
      cue: 'Imagina un lugar o recuerdo seguro que te da paz.'
    }
  ]
};

function OnboardingScreen({ navigation }) {
  useEffect(() => {
    const checkOnboarding = async () => {
      const seen = await AsyncStorage.getItem('seenOnboarding');
      if (seen) {
        navigation.replace('MainTabs');
      }
    };
    checkOnboarding();
  }, []);

  const finishOnboarding = async () => {
    await AsyncStorage.setItem('seenOnboarding', 'true');
    navigation.replace('MainTabs');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 24 }}>
      <Image source={require('./assets/launch-image.png')} style={{ width: '100%', height: 300, borderRadius: 12, marginBottom: 16 }} resizeMode="contain" />
      <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center', marginBottom: 16 }}>
        You’re not alone. You’re safe here.{"\n"}I’m here to help—and you’re not doing this by yourself.
      </Text>
      <Pressable onPress={finishOnboarding} style={{ backgroundColor: '#4f46e5', paddingVertical: 12, borderRadius: 12 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Start My Journey</Text>
      </Pressable>
    </ScrollView>
  );
}

function MentalResetGlossary() {
  const [isSpanish, setIsSpanish] = useState(false);
  const glossary = isSpanish ? glossaryData.es : glossaryData.en;

  const logFeeling = async (term) => {
    const lang = isSpanish ? 'ES' : 'EN';
    const timestamp = new Date().toLocaleString();
    const entry = `${term} | ${lang} | ${timestamp}`;
    let existing = await AsyncStorage.getItem('emotionalLogs');
    let logs = existing ? JSON.parse(existing) : [];
    logs.push(entry);
    await AsyncStorage.setItem('emotionalLogs', JSON.stringify(logs));
    Alert.alert('Saved', `${term} logged @ ${timestamp} (${lang})`);
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{isSpanish ? 'Glosario Emocional' : 'Emotional Glossary'}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 8 }}>ES</Text>
          <Switch value={isSpanish} onValueChange={() => setIsSpanish(!isSpanish)} />
          <Text style={{ marginLeft: 8 }}>EN</Text>
        </View>
      </View>
      {glossary.map((entry) => (
        <View key={entry.id} style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#4f46e5' }}>{entry.term}</Text>
          <Text style={{ marginTop: 4 }}>{entry.description}</Text>
          <Text style={{ marginTop: 8, fontStyle: 'italic' }}>Example: {entry.example}</Text>
          <Text style={{ marginTop: 4, color: 'green', fontWeight: '500' }}>Comfort Cue: {entry.cue}</Text>
          <Pressable onPress={() => logFeeling(entry.term)} style={{ marginTop: 8, backgroundColor: 'green', padding: 8, borderRadius: 6 }}>
            <Text style={{ color: 'white' }}>{isSpanish ? 'Registrar esta emoción' : 'Log this feeling'}</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

function GameDemoScreen() {
  const [answered, setAnswered] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Mini Game: What Helps You Feel Safe?</Text>
      {!answered ? (
        <>
          <Pressable onPress={() => setAnswered(true)} style={{ backgroundColor: '#3b82f6', padding: 12, borderRadius: 12, marginBottom: 12 }}>
            <Text style={{ color: 'white' }}>Taking deep breaths</Text>
          </Pressable>
          <Pressable onPress={() => setAnswered(true)} style={{ backgroundColor: '#3b82f6', padding: 12, borderRadius: 12 }}>
            <Text style={{ color: 'white' }}>Talking to someone I trust</Text>
          </Pressable>
        </>
      ) : (
        <Text style={{ color: 'green', marginTop: 16, textAlign: 'center' }}>Great choice! Let’s keep practicing what helps us feel grounded.</Text>
      )}
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Glossary') iconName = 'book';
        else if (route.name === 'Feelings') iconName = 'happy';
        else if (route.name === 'Games') iconName = 'game-controller';
        else if (route.name === 'Safety') iconName = 'shield-checkmark';
        else iconName = 'ellipse';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#4f46e5',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Glossary" component={MentalResetGlossary} />
      <Tab.Screen name="Feelings" component={FeelingsScreen} />
      <Tab.Screen name="Games" component={GameDemoScreen} />
      <Tab.Screen name="Safety" component={SafetyScreen} />
      <Tab.Screen name="Language" component={LanguageScreen} />
      <Tab.Screen name="Legal" component={LegalSupportScreen} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Launch" component={LaunchScreen} />
        <Stack.Screen name="LegalUpdate" component={LegalUpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import Constants from 'expo-constants';
import { Text, View } from 'react-native';

export default function App() {
  const env = Constants.expoConfig?.extra?.ENV || 'undefined';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>
        Current Environment: {env}
      </Text>
    </View>
  );
}
