import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, SafeAreaView, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome / Bienvenido</Text>
      <Button title="Start" onPress={() => navigation.navigate('Info')} />
    </SafeAreaView>
  );
}

function InfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi Camino / My Journey App</Text>
      <Text style={styles.text}>You’re on your path. Let's learn together.</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});

