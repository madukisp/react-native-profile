import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SkillRating.styles';

const filledStar = 'https://img.icons8.com/ios-filled/50/000000/star--v1.png';
const emptyStar = 'https://img.icons8.com/ios/50/000000/star--v1.png';

const SkillRating = ({ skill, rating }) => {
  const maxRating = Array(5).fill(0); // Cria um array com 5 posições preenchidas com 0

  return (
    <View style={styles.skillRow}>
      <Text style={styles.skillText}>{skill}</Text>
      <View style={styles.starsContainer}>
        {maxRating.map((_, index) => (
          <Image
            key={index}
            source={{ uri: index < rating ? filledStar : emptyStar }}
            style={styles.star}
          />
        ))}
      </View>
    </View>
  );
};

export default SkillRating;
