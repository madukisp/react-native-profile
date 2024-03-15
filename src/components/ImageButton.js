import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ImageButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

