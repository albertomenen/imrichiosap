import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  const handlePress = () => {
    console.log('Botón presionado: Im Rich Bro');
    
    // Aquí puedes añadir la lógica que necesites, por ejemplo, reproducir un audio.
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Im Rich BroTher</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF', // Color similar al botón de Apple Pay
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
