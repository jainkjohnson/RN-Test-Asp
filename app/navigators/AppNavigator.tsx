import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Debit} from '../screens/debit/Debit';
import {Home} from '../screens/home/Home';
import {SpendingLimit} from '../screens/debit/spendingLimit/SpendingLimit';
import {RouteNames} from './Routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={RouteNames.DEBIT} component={Debit} />
      <Tab.Screen name={RouteNames.HOME} component={Home} />
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.LANDING}>
      <Stack.Screen name={RouteNames.LANDING} component={TabStack} />
      <Stack.Screen
        name={RouteNames.SPENDING_LIMIT}
        component={SpendingLimit}
      />
    </Stack.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
