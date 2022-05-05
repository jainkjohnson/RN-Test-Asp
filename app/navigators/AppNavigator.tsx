import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Debit} from '../screens/debit/Debit';
import {Home} from '../screens/home/Home';
import {SpendingLimit} from '../screens/debit/spendingLimit/SpendingLimit';
import {RouteNames} from './Routes';
import {IconSVG} from '../components/iconSVG/IconSVG';
import CardIcon from '../../assets/icons/Card.svg';
import HomeIcon from '../../assets/icons/Home.svg';
import {Palette} from '../theme/Palatte';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === RouteNames.DEBIT) {
            if (focused) {
              return <IconSVG svgComponent={CardIcon} />;
            }
            return <IconSVG svgComponent={CardIcon} color={Palette.grey} />;
          } else if (route.name === RouteNames.HOME) {
            if (focused) {
              return <IconSVG svgComponent={HomeIcon} />;
            }
            return <IconSVG svgComponent={HomeIcon} color={Palette.grey} />;
          }
        },
        headerShown: false,
        tabBarActiveTintColor: Palette.green,
        tabBarInactiveTintColor: Palette.darkGrey,
      })}>
      <Tab.Screen name={RouteNames.HOME} component={Home} />
      <Tab.Screen name={RouteNames.DEBIT} component={Debit} />
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
