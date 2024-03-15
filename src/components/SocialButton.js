import React from 'react';
import { TouchableOpacity, Text, Image, Animated } from 'react-native';
import styles from './SocialButton.styles';

const SocialButton = ({ title, onPress, iconUrl }) => {
  const opacity = new Animated.Value(1);

  const animatedStyle = {
    opacity: opacity,
  };

  const handlePressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.7,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity style={styles.button} onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Image source={{ uri: iconUrl }} style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SocialButton;
