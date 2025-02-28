import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

const audioSource = require('../../assets/audio/im_rich_brother.m4a');

export default function DetailsScreen() {
  // useAudioPlayer recibe el archivo de audio y devuelve un objeto reproductor.
  const player = useAudioPlayer(audioSource);

  const handlePress = () => {
    // Reproduce el audio
    player.play();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Im Rich Bro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF', // color similar al botón de Apple Pay
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
