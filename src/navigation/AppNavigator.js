import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JournalEntryScreen from '../screens/JournalEntryScreen';
import EmotionResultScreen from '../screens/EmotionResultScreen';
import TrendsScreen from '../screens/TrendsScreen';

import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={AuthScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="JournalEntry"
                    component={JournalEntryScreen}
                    options={{ title: 'Journal', headerShown: false }}
                />
                <Stack.Screen
                    name="EmotionResult"
                    component={EmotionResultScreen}
                    options={{ title: 'Result', headerShown: false }}
                />
                <Stack.Screen
                    name="Trends"
                    component={TrendsScreen}
                    options={{ title: 'Trends', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
