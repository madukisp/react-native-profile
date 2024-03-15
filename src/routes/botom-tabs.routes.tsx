import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import SkillScreen from '../screens/SkillScreen';
import ContactScreen from '../screens/ContactScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={MainScreen} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons 
                    name="home" 
                    color='black' 
                    size={size} />
            ),            
        }}
    />
    
      <Tab.Screen 
        name="Skills" 
        component={SkillScreen}
        options={{
            tabBarLabel: 'Skills',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons 
                    name="star" 
                    color='black' 
                    size={size} />
            ),            
        }}
    />
    <Tab.Screen 
        name="Contact" 
        component={ContactScreen}
        options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons 
                    name="email" 
                    color='black' 
                    size={size} />
            ),            
        }}
    />
    </Tab.Navigator>
  );
}
