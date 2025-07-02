// Mi Camino App – MySafeObjectScreen.js v1.0.0
// A calm drawing canvas to imagine a safe object or space

import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function MySafeObjectScreen() {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState('');
  const svgRef = useRef(null);

  const handleGesture = (event) => {
    const { x, y } = event.nativeEvent;
    setCurrentPath((prevPath) => `${prevPath} L${x},${y}`);
  };

  const handleStart = (event) => {
    const { x, y } = event.nativeEvent;
    setCurrentPath(`M${x},${y}`);
  };

  const handleEnd = () => {
    if (currentPath) {
      setPaths([...paths, currentPath]);
      setCurrentPath('');
    }
  };

  const clearCanvas = () => {
    setPaths([]);
    setCurrentPath('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🖌️ Imagine or draw your safe object</Text>
      <PanGestureHandler
        onGestureEvent={handleGesture}
        onBegan={handleStart}
        onEnded={handleEnd}
      >
        <Svg
          ref={svgRef}
          height={height * 0.6}
          width={width - 32}
          style={styles.canvas}
        >
          {paths.map((p, index) => (
            <Path key={index} d={p} stroke="black" strokeWidth={3} fill="none" />
          ))}
          {currentPath && (
            <Path d={currentPath} stroke="gray" strokeWidth={3} fill="none" />
          )}
        </Svg>
      </PanGestureHandler>

      <Pressable onPress={clearCanvas} style={styles.clearButton}>
        <Text style={{ color: 'white' }}>Clear Drawing</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  canvas: {
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  clearButton: {
    marginTop: 16,
    backgroundColor: '#e11d48',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
