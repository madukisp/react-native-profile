import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import SocialButton from '../components/SocialButton';
import styles from './ContactScreen.styles';

const ContactScreen = () => {
  const openURL = (url) => {
    // Abre a URL no navegador do dispositivo

    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Contatos</Text>
      <SocialButton 
        title="GitHub" 
        onPress={() => openURL('https://github.com/madukisp')} 
        iconUrl="https://img.icons8.com/ios-filled/50/000000/github.png" 
      />
      <SocialButton 
        title="LinkedIn" 
        onPress={() => openURL('https://www.linkedin.com/in/amanda-duque-kawa')} 
        iconUrl="https://img.icons8.com/ios-filled/50/000000/linkedin.png" 
      />
      <SocialButton 
        title="Email" 
        onPress={() => openURL('mailto:madukisp@gmail.com')} 
        iconUrl="https://img.icons8.com/ios-filled/50/000000/secured-letter.png" 
      />
    </ScrollView>
  );
};

export default ContactScreen;
