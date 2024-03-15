import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import styles from './MainScreen.styles';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/photo.png')}
        style={styles.photo}
      />
      <Text style={styles.name}>Amanda Duque</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.summary}>
          Olá, sou estudante de Desenvolvimento Full-Stack dedicada à criação de soluções web inovadoras e sofisticadas. Minha expertise abrange Python, JavaScript, e uma gama de tecnologias avançadas, impulsionando um ciclo constante de inovação e aprimoramento profissional. Explore meu portfólio e descubra como podemos transformar ideias em realidade juntos.
        </Text>
      </View>
    </View>
  );
};

export default MainScreen;
