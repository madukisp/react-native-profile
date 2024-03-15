import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsRoutes } from './src/routes/botom-tabs.routes';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsRoutes /> 
    </NavigationContainer>
  );
};

export default App;
