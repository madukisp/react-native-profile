import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SkillRating from '../components/SkillRating';
import styles from './SkillScreen.styles';

const SkillScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Minhas Habilidades</Text>
      <Text style={styles.summary}>
      Sou estudante do 4º semestre em Desenvolvimento Full Stack pela Universidade Estácio de Sá, com conhecimentos em Python e competências em HTML, JavaScript, Angular, React, Node.js e Java. Atualmente, estou expandindo meu conhecimento em desenvolvimento mobile através do React Native e Flutter, bem como em computação em nuvem com Azure.
      </Text>
      <View style={styles.skillsWrapper}>
        <SkillRating skill="Python" rating={4} />
        <SkillRating skill="HTML" rating={5} />
        <SkillRating skill="CSS" rating={4} />
        <SkillRating skill="JavaScript" rating={4} />
        <SkillRating skill="React" rating={3} />
        <SkillRating skill="Angular" rating={4} />
        <SkillRating skill="Node.js" rating={3} />
        <SkillRating skill="Java" rating={2} />
        <SkillRating skill="React Native" rating={3} />
        <SkillRating skill="Flutter" rating={2} />
        <SkillRating skill="Azure" rating={2} />
      </View>
    </ScrollView>
  );
};

export default SkillScreen;
